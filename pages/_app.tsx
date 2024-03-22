import 'tailwindcss/tailwind.css';
import { VisualEditing } from '@sanity/visual-editing/next-pages-router';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

// Import the Montserrat font
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

const PreviewProvider = dynamic(() => import('components/PreviewProvider'));

export default function App({ Component, pageProps }: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  return (
    <>
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