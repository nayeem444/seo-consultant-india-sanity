import Head from 'next/head';
import IndexPage from 'components/IndexPage';
import PreviewIndexPage from 'components/PreviewIndexPage';
import { readToken } from 'lib/sanity.api';
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client';
import { Post, Settings } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';
import type { SharedPageProps } from 'pages/_app';
import Footer from '../../components/Footer';
import Navbar from 'components/Navbar';

interface PageProps extends SharedPageProps {
  posts: Post[];
  settings: Settings;
  draftMode?: boolean;
  title: string; // Add title property
  description: string; // Add description property
}


interface Query {
  [key: string]: string;
}

export default function Page(props: PageProps) {
  const { posts, settings, draftMode, title, description } = props;

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />;
  }

  return (
    <>
      <Navbar/>
      <Head>
        <title>
          {title}
        </title>
      </Head>
    <section className="mb-8 md:mb-16 flex justify-center h-64  items-center bg-blue-600">
      <div >
      <h2 className='flex justify-center align-middle text-7xl text-white font-bold font-montserrat'>Blog</h2>
      </div>
    
    </section>
      <IndexPage posts={posts} settings={settings} />
      <Footer/>
    </>
  );
}


export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const description = "Learn the latest strategies and tips to enhance your online presence and drive more traffic to your site. Start reading now for cutting-edge digital marketing insights!";
  const title = "Read Blogs on Search Engine Optimization and Digital Marketing"

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ]);

  return {
    props: {
      posts,
      settings,
      draftMode,
      description, // Add description prop
      title, // Add title prop
      token: draftMode ? readToken : '',
    },
  };
};
