import 'tailwindcss/tailwind.css';
import '@wordpress/block-library/build-style/style.css'; // Gutenberg styles
import Script from 'next/script';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { initGA, logPageView } from '../utils/analytics';

function App({ Component, pageProps }: AppProps<{ token: string; title?: string; description?: string }>) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Google Analytics
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    // Track page view on route change
    const handleRouteChange = (url: string) => {
      logPageView();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://shahidshahmiri.com${router.asPath}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {pageProps.title && <title>{pageProps.title}</title>}
        {pageProps.description && <meta name="description" content={pageProps.description} />}
      </Head>
      <main className="font-montserrat">
        {pageProps.title && !router.pathname.startsWith('/blog/') && (
          <h1 className="visually-hidden">{pageProps.title}</h1>
        )}
        {pageProps.description && !router.pathname.startsWith('/blog/') && (
          <p className="visually-hidden">{pageProps.description}</p>
        )}
        <Component {...pageProps} />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-6B4YEN9B05`}
        />
        <Script
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6B4YEN9B05');
            `,
          }}
        />
      </main>
    </>
  );
}

export default App;

