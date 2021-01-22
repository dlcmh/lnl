import { Jotai } from 'components/state-management/jotai/Jotai';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Jotai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jotai />
    </>
  );
}
