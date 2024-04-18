// _app.tsx
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const PreviewProvider = dynamic(() => import('components/PreviewProvider'));
import { VisualEditing } from '@sanity/visual-editing/next-pages-router';

function App({ Component, pageProps }: AppProps<{ draftMode: boolean; token: string; title?: string; description?: string }>) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="canonical" href={`https://shahidshahmiri.com${router.asPath}`} />
        <title>{pageProps.title || 'Default Site Title'}</title>
        <meta name="description" content={pageProps.description || "Default description for the site."} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {pageProps.draftMode ? (
        <PreviewProvider token={pageProps.token}>
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        </PreviewProvider>
      ) : (
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
      )}
    </>
  );
}

export default App;
