// import PostPage from 'components/PostPage'
// import PreviewPostPage from 'components/PreviewPostPage'
// import { readToken } from 'lib/sanity.api'
// import {
//   getAllPostsSlugs,
//   getClient,
//   getPostAndMoreStories,
//   getSettings,
// } from 'lib/sanity.client'
// import { Post, Settings } from 'lib/sanity.queries'
// import { GetStaticProps } from 'next'
// import type { SharedPageProps } from 'pages/_app'

// interface PageProps extends SharedPageProps {
//   post: Post
//   morePosts: Post[]
//   settings?: Settings
// }

// interface Query {
//   [key: string]: string
// }

// export default function ProjectSlugRoute(props: PageProps) {
//   const { settings, post, morePosts, draftMode } = props



//   if (draftMode) {
//     return (
//       <PreviewPostPage post={post} morePosts={morePosts} settings={settings} />
//     )
//   }

//   return <PostPage post={post} morePosts={morePosts} settings={settings} title = {post.title} description = {post.excerpt} />
// }

// export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
//   const { draftMode = false, params = {} } = ctx
//   const client = getClient(draftMode ? { token: readToken } : undefined)

//   const [settings, { post, morePosts }] = await Promise.all([
//     getSettings(client),
//     getPostAndMoreStories(client, params.slug),
//   ])

//   if (!post) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: {
//       post,
//       morePosts,
//       settings,
//       draftMode,
//       token: draftMode ? readToken : '',
//       description: post.excerpt || null,
//       title:post.title || null
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const slugs = await getAllPostsSlugs()

//   return {
//     paths: slugs?.map(({ slug }) => `/blog/${slug}`) || [],
//     fallback: 'blocking',
//   }
// }





import { useQuery } from '@apollo/client';
import Head from 'next/head';
import Image from 'next/image';
import client from '../../lib/apollo';
import { GET_FULL_POST } from '../../lib/queries';
import { getAllPostsSlugs } from '../../lib/api';
import img from '../../public/Screenshot 2023-02-17 at 5.webp';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import CommentForm from 'components/CommentForm';

const stripHtmlTags = (html) => {
  if (!html) return '';
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

export default function PostPage({ slug }) {
  const { data, loading, error } = useQuery(GET_FULL_POST, {
    client,
    variables: { slug },
  });

  if (error) return <div className="text-center mt-10 text-red-500">Error: {error.message}</div>;

  const post = data?.post;
  const {  title, content, date, featuredImage, author, excerpt, comments, databaseId ,seo } = post || {};
  const formattedContent = content ? content.replace(/\n{4,}/g, '<br>') : '';
  const cleanExcerpt = stripHtmlTags(excerpt);


  
  return (
    <div>
      <Navbar />
      <Head>
        <title>{title || 'Loading...'}</title>
        
        <meta name="description" content={cleanExcerpt || 'Loading...'} />
        {seo && (
    <>
      <meta name="robots" content={seo.metaRobotsNoindex ? 'noindex' : 'index'} />
      <meta name="robots" content={seo.metaRobotsNofollow ? 'nofollow' : 'follow'} />
      <meta property="og:locale" content={seo.opengraphLocale} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.opengraphTitle} />
      <meta property="og:description" content={seo.opengraphDescription} />
      <meta property="og:url" content={seo.opengraphUrl} />
      <meta property="og:site_name" content={seo.opengraphSiteName} />
      <meta property="article:published_time" content={seo.article?.publishedTime} />
      <meta property="article:modified_time" content={seo.article?.modifiedTime} />
      <meta property="og:updated_time" content={seo.article?.updatedTime} />
      <meta property="og:image" content={seo.opengraphImage?.sourceUrl} />
      <meta property="og:image:secure_url" content={seo.opengraphImage?.sourceUrl} />
      <meta property="og:image:width" content={seo.opengraphImage?.mediaDetails?.width} />
      <meta property="og:image:height" content={seo.opengraphImage?.mediaDetails?.height} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:site" content={seo.twitterSite} />
      <meta name="twitter:image" content={seo.twitterImage?.sourceUrl} />
      <meta name="twitter:creator" content={seo.twitterCreator} />
      <link rel="canonical" href={`https://shahidshahmiri.com/blog/${slug}`} />
    </>
  )}
      </Head>

      <div className='h-60 bg-blue-600 flex justify-center items-center'>
        {loading ? <SkeletonTitle /> : (
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-center md:text-4xl md:leading-none lg:text-6xl text-balance mx-4 sm:mx-24 text-white">
            {title}
          </h1>
        )}
      </div>

      <div className="hidden md:mb-12 md:flex justify-center mx-4 sm:mx-24">
        <div className="flex items-center m-8">
          {author && author.node && (
            <>
              <Image
                src={author.node.avatar?.url}
                alt={author.node.name}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
              <div>
                <p className="text-gray-500">
                  By <span className="font-semibold">{author.node.name}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center mx-4 sm:mx-24'>
        <div className='lg:w-3/4 lg:mx-4'>
          <div className='flex justify-center'>
            {loading ? <SkeletonImage /> : (
              featuredImage && featuredImage.node && (
                <Image
                  src={featuredImage.node.sourceUrl}
                  alt={title}
                  width={400}
                  height={200}
                  className="mb-8 rounded-lg"
                />
              )
            )}
          </div>
          <article className="prose prose-lg m-4 sm:m-12 blue-links" dangerouslySetInnerHTML={{ __html: formattedContent }} />
          {loading && <SkeletonContent />}

          {/* Comments Section */}
          <div className="comments-section mt-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            {comments && comments.edges.length > 0 ? (
              comments.edges.map(({ node: comment }, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center mb-2">
                    {comment.author.node.avatar && (
                      <Image
                        src={comment.author.node.avatar.url}
                        alt={comment.author.node.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-2"
                      />
                    )}
                    <div>
                      <p className="font-semibold">{comment.author.node.name}</p>
                      <p className="text-gray-500 text-sm">{new Date(comment.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    {stripHtmlTags(comment.content)}
                  </div>
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>

          {/* Comment Form */}
          {databaseId && <CommentForm databaseId={databaseId} />}
        </div>

        <div className='lg:w-1/4 lg:m-4 m-4'>
          <div className="sticky top-4 mx-4 md:mx-0 mt-4 md:mt-0 md:w-72">
            <div className="rounded h-96 bg-blue-600 p-6 flex flex-col justify-center items-center">
              <h2 className="text-white text-3xl font-bold mb-4 text-center">Want to see a similar trend in your GSC?</h2>
              <div className="py-4">
                <Image width={400} height={200} src={img} className="rounded" />
              </div>
              <a
                href="/contact"
                className="text-black bg-white hover:bg-white-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
              >
                Book A Free Call
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();
  return {
    paths: slugs.map((slug) => `/blog/${slug}`),
    fallback: 'blocking',
  };
};

const SkeletonTitle = () => (
  <div className="h-10 w-3/4 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
);

const SkeletonImage = () => (
  <div className="w-full h-56 bg-gray-300 rounded-lg animate-pulse mb-8"></div>
);

const SkeletonContent = () => (
  <div>
    <div className="h-6 w-full bg-gray-300 rounded-lg animate-pulse mb-4"></div>
    <div className="h-6 w-5/6 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
    <div className="h-6 w-4/6 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
    <div className="h-6 w-3/6 bg-gray-300 rounded-lg animate-pulse mb-4"></div>
  </div>
);
