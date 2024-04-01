import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import PrelineScript from "../components/PrelineScript";

function MyDocument() {
  return (
    <Html>
      <Head>
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
      </Head>
      <body className='tgback'>
        <Main />
        <NextScript />
        <script src="./node_modules/preline/dist/preline.js"></script>
        <PrelineScript />
      </body>
    </Html>
  );
}

export default MyDocument;
