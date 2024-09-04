import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PageTemplate from '../../components/PageTemplate';
import { PageContent } from '../../types/content';
import { fetchContentBySlug, getAllSlugs } from '../../lib/pages';

interface PageProps {
  content: PageContent;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getAllSlugs();
  console.log('Available slugs:', slugs);
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  console.log('Params:', params);
  const slug = params?.slug;
  if (typeof slug !== 'string') {
    return { notFound: true };
  }

  const content = await fetchContentBySlug(slug);
  console.log('Fetched content:', content);

  if (!content) {
    return { notFound: true };
  }

  return { props: { content } };
};

const Page: React.FC<PageProps> = ({ content }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Extracting necessary values from content
  const { title, metaDescription, questions } = content;

  // Getting the first question or falling back to the title
  const firstQuestion = questions[0]?.question || title || 'Default Title';

  return (
    <>
      <Head>
        <title>{firstQuestion}</title>
        <meta name="description" content={metaDescription || 'Default Description'} />
      </Head>
      <main className="px-4 py-6">
        {/* Display the first question as the H1 heading */}
       
        <PageTemplate content={content} />
      </main>
    </>
  );
};

export default Page;
