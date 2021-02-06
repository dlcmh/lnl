import { SingleContenteditable } from 'components/editor/contenteditable/Single/SingleContenteditable';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Single contenteditable div</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SingleContenteditable />
    </>
  );
}
