import Head from 'next/head';

export default function Headtags() {
  return (
    <Head>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon.svg"
      />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Hey this is Myles. I'm a self-taught web developer, come check out my portfolio site!"
      ></meta>

      <title>Myles&apos;s Portfolio</title>
    </Head>
  );
}
