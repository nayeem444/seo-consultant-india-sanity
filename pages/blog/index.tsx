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
}

interface Query {
  [key: string]: string;
}

export default function Page(props: PageProps) {
  const { posts, settings, draftMode } = props;

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />;
  }

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="SEO Blogs" content="" />
        
      </Head>
      <Navbar/>
    <section className="mb-8 md:mb-16 flex justify-center h-64  items-center bg-blue-600">
      <div >
      <h1 className='flex justify-center align-middle text-7xl text-white font-bold font-montserrat'  >Blog</h1>
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
  const discription = "Seo and Link Building Posts"

  const [settings, posts = []] = await Promise.all([
    getSettings(client),
    getAllPosts(client),
  ]);

  return {
    props: {
      posts,
      settings,
      draftMode,
      discription,
      token: draftMode ? readToken : '',
    },
  };
};
