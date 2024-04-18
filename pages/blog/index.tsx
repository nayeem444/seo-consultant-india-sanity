import Head from 'next/head';
import IndexPage from 'components/IndexPage';
import PreviewIndexPage from 'components/PreviewIndexPage';
import { readToken } from 'lib/sanity.api';
import { getAllPosts, getClient, getSettings } from 'lib/sanity.client';
import { Post, Settings } from 'lib/sanity.queries';
import { GetStaticProps } from 'next';
import type { SharedPageProps } from 'pages/_app';
import Footer from '../../components/Footer';

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
