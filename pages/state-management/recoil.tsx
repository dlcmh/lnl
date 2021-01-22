import { Recoil } from 'components/state-management/recoil/Recoil';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>Recoil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Recoil />
    </>
  );
}
