// import Head from 'next/head';
// import IndexPage from 'components/IndexPage';
// import PreviewIndexPage from 'components/PreviewIndexPage';
// import { readToken } from 'lib/sanity.api';
// import { getAllPosts, getClient, getSettings } from 'lib/sanity.client';
// import { Post, Settings } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';
// import type { SharedPageProps } from 'pages/_app';
// import Footer from '../../components/Footer';
// import Navbar from 'components/Navbar';

// interface PageProps extends SharedPageProps {
//   posts: Post[];
//   settings: Settings;
//   draftMode?: boolean;
//   title: string; // Add title property
//   description: string; // Add description property
// }


// interface Query {
//   [key: string]: string;
// }

// export default function Page(props: PageProps) {
//   const { posts, settings, draftMode, title, description } = props;

//   if (draftMode) {
//     return <PreviewIndexPage posts={posts} settings={settings} />;
//   }

//   return (
//     <>
//       <Navbar/>
     
//     <section className="mb-8 md:mb-16 flex justify-center h-64  items-center bg-blue-600">
//       <div >
//       <h2 className='flex justify-center align-middle text-7xl text-white font-bold font-montserrat'>Blog</h2>
//       </div>
    
//     </section>
//       <IndexPage posts={posts} settings={settings} />
//       <Footer/>
//     </>
//   );
// }


// export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
//   const { draftMode = false } = ctx;
//   const client = getClient(draftMode ? { token: readToken } : undefined);
//   const description = "Learn the latest strategies and tips to enhance your online presence and drive more traffic to your site. Start reading now for cutting-edge digital marketing insights!";
//   const title = "Read Blogs on Search Engine Optimization and Digital Marketing"

//   const [settings, posts = []] = await Promise.all([
//     getSettings(client),
//     getAllPosts(client),
//   ]);

//   return {
//     props: {
//       posts,
//       settings,
//       draftMode,
//       description, // Add description prop
//       title, // Add title prop
//       token: draftMode ? readToken : '',
//     },
//   };
// };


import { useQuery } from '@apollo/client';
import client from '../../lib/apollo';
import { GET_LATEST_POSTS } from '../../lib/queries';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Image from 'next/image';

export default function IndexPage(props) {
  const [page, setPage] = useState(1);
  const { data, loading, error, fetchMore } = useQuery(GET_LATEST_POSTS, {
    client,
    variables: {
      first: 6,
      after: null,
    },
  });

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;

  const posts = data.posts.edges.map((edge) => {
    const post = edge.node;
    const cleanedExcerpt = post.excerpt.replace(/<\/?p>/g, ''); // Remove <p> tags from excerpt
    return { ...post, excerpt: cleanedExcerpt };
  });

  const loadMorePosts = async () => {
    const newPage = page + 1;
    const { endCursor } = data.posts.pageInfo;

    await fetchMore({
      variables: {
        first: 6,
        after: endCursor,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newPosts = fetchMoreResult.posts.edges.map((edge) => {
          const post = edge.node;
          const cleanedExcerpt = post.excerpt.replace(/<\/?p>/g, ''); // Remove <p> tags from excerpt
          return { ...post, excerpt: cleanedExcerpt };
        });
        const allPosts = [...prevResult.posts.edges, ...fetchMoreResult.posts.edges];

        return {
          posts: {
            __typename: prevResult.posts.__typename,
            edges: allPosts,
            pageInfo: fetchMoreResult.posts.pageInfo,
          },
        };
      },
    });

    setPage(newPage);
  };

  return (
    <div>
      <Navbar />
      <div className="mb-8 md:mb-16 flex justify-center h-64 items-center bg-blue-600">
        <p className="flex justify-center align-middle text-7xl text-white font-bold font-montserrat">Blog</p>
      </div>
      <div>
        <h1 className='hidden'>{props?.title}</h1>
        <meta name="description" content={props.description} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-12">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} legacyBehavior key={post.id}>
            <div className="block p-4 border rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <h2 className="text-xl font-bold mb-2 text-blue-600">{post.title}</h2>
              {post.featuredImage && post.featuredImage.node && (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post?.title}
                  width={200}
                  height={200}
                  className="mb-4"
                />
              )}
              <p>
                {post.excerpt}
              </p>
              <p className="text-gray-700 text-sm font-semibold">
                By {post.author.node.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      {data.posts.pageInfo.hasNextPage && (
        <div className="text-center mt-8">
          <button
            onClick={loadMorePosts}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Load More Posts
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const description =
    'Learn the latest strategies and tips to enhance your online presence and drive more traffic to your site. Start reading now for cutting-edge digital marketing insights!';
  const title = 'Read Blogs on Search Engine Optimization and Digital Marketing';

  return {
    props: {
      description,
      title,
    },
  };
};