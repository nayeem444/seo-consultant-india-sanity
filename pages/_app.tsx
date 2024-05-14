import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';

const PreviewProvider = dynamic(() => import('components/PreviewProvider'));
import { VisualEditing } from '@sanity/visual-editing/next-pages-router';

function App({ Component, pageProps }: AppProps<{ draftMode: boolean; token: string; title?: string;  excerpt?: string }>) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://shahidshahmiri.com${router.asPath}`} />
        <title>{pageProps.title ? pageProps.title : 'Default Site Title'}</title>
        <meta name="description" content={pageProps.excerpt ? pageProps.excerpt : 'Default Site Description'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Import Montserrat font from Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      {pageProps.draftMode ? (
        <PreviewProvider token={pageProps.token}>
          <main className="font-montserrat">
            {/* Render blog title only if it exists and not on the blog page */}
            {pageProps.title && router.pathname !== '/blog' && (
              <h1 className="visually-hidden">{pageProps.title}</h1>
            )}
            <Component {...pageProps} />
          </main>
        </PreviewProvider>
      ) : (
        <main className="font-montserrat">
        {/* Render blog title only if it exists and not on individual blog pages */}
        {pageProps.title && !router.pathname.startsWith('/blog/') && (
          <h1 className="visually-hidden">{pageProps.title}</h1>
        )}
        {/* Render blog description */}
        {pageProps.excerpt && !router.pathname.startsWith('/blog/') && (
          <p>{pageProps.excerpt}</p>
        )}
        <Component {...pageProps} />
      </main>
      
      )}
    </>
  );
}

export default App;
