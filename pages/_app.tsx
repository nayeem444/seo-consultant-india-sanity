import 'tailwindcss/tailwind.css';
import '@wordpress/block-library/build-style/style.css'; // Gutenberg styles
import Script from 'next/script';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/analytics';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Calan from 'components/PopUp';


function AppContent({
  Component,
  pageProps,
}: AppProps<{ token: string; title?: string; description?: string }>) {
  const router = useRouter();
  const { isDarkMode } = useTheme();

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
            {/* Google Site Verification Meta Tag */}
            <meta name="google-adsense-account" content="ca-pub-4456787203259215"/>
        <link rel="canonical" href={`https://shahidshahmiri.com${router.asPath}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {pageProps.title && <title>{pageProps.title}</title>}
        {pageProps.description && (
          <meta name="description" content={pageProps.description} />
        )}


     
      </Head>
      <main
        className={`font-montserrat ${isDarkMode ? 'bg-[#25282C] text-white' : 'bg-[#25282C] text-white'}`}
      >
        {pageProps.title && !router.pathname.startsWith('/blog/') && (
          <h1 className="visually-hidden">{pageProps.title}</h1>
        )}
        {pageProps.description && !router.pathname.startsWith('/blog/') && (
          <p className="visually-hidden">{pageProps.description}</p>
        )}
        <Component {...pageProps} />
        <Calan />

        {/* Google Analytics Script */}
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-6B4YEN9B05"
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

        {/* Clarity Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "o2f572dzct");
            `,
          }}
        />
         {/* Google AdSense Script */}
  {/* <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4456787203259215"
        crossOrigin="anonymous"
        strate gy="afterInteractive"
      /> */}

      </main>
    </>
  );
}

function App(props: AppProps<{ token: string; title?: string; description?: string }>) {
  return (
    <ThemeProvider>
      
      <AppContent {...props} />
    
    </ThemeProvider>
  );
}

export default App;
