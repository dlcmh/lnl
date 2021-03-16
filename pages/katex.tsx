import { Katex } from 'containers/Katex/Katex';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Katex</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css"
          integrity="sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw"
          crossOrigin="anonymous"
        />
      </Head>
      <Katex />
    </>
  );
}
