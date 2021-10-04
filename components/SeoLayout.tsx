import Head from "next/head";
import { ReactNode } from "react";

const SeoLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <link
          sizes="57x57"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          sizes="60x60"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          sizes="72x72"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          sizes="76x76"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          sizes="114x114"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          sizes="120x120"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          sizes="144x144"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          sizes="152x152"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          sizes="180x180"
          rel="apple-touch-icon"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          type="image/png"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          sizes="32x32"
          type="image/png"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          sizes="96x96"
          type="image/png"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          sizes="16x16"
          type="image/png"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {children}
    </>
  );
};

export default SeoLayout;
