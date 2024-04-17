// Import global styles and libraries
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

// Next.js and other imports
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';

// Import the Montserrat font using the new Next.js font handling
import { Montserrat } from 'next/font/google';

// Initialize the Montserrat font
const montserrat = Montserrat({ subsets: ['latin'] });

// Types for enhanced page properties
export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

// Dynamically import the PreviewProvider component
const PreviewProvider = dynamic(() => import('components/PreviewProvider'));

// Visual editing tools integrated conditionally
import { VisualEditing } from '@sanity/visual-editing/next-pages-router';

function App({ Component, pageProps }: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;
  const router = useRouter();

  // Construct canonical URL dynamically based on the router
  const canonicalUrl = `https://shahidshahmiri.com${router.asPath}`;

  // Extract the slug and format it to generate a title
  const formatTitle = (slug: string) => {
    const titleParts = slug.split('/').filter(part => part); // filter to remove empty strings
    return titleParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' - ');
  };
  
  // Default title if no slug segments
  const pageTitle = formatTitle(router.asPath) || 'Home Page';

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <title>{pageTitle}</title>
      </Head>
      {draftMode ? (
        <PreviewProvider token={token}>
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        </PreviewProvider>
      ) : (
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
      )}
      {draftMode && <VisualEditing />}
    </>
  );
}

export default App;
