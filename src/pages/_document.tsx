import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A site to preview icons for Twitter, Facebook, and Instagram." />
        <meta name="keywords" content="icons, preview, Twitter, Facebook, Instagram, social media" />
        <meta name="author" content="Your Name" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://icon-viewer.vercel.app/" />
        <meta property="og:title" content="Social Media Icon Preview" />
        <meta property="og:description" content="A site to preview icons for Twitter, Facebook, and Instagram." />
        <meta property="og:image" content="https://icon-viewer.vercel.app/ogp.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://icon-viewer.vercel.app/" />
        <meta property="twitter:title" content="Social Media Icon Preview" />
        <meta property="twitter:description" content="A site to preview icons for Twitter, Facebook, and Instagram." />
        <meta property="twitter:image" content="https://icon-viewer.vercel.app/ogp.jpg" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
