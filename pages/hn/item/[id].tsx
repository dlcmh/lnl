import fetch from 'node-fetch';
import { HnItem } from 'containers/Hn/HnItem';
import { GetServerSideProps } from 'next';

type HnItemResponse = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: 'story';
  url: string;
};

// eg item 27295906
export const getServerSideProps: GetServerSideProps = async (context) => {
  // // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // // Pass data to the page via props
  // return { props: { data } }

  const {
    params: { id },
  } = context;

  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  );
  const json: HnItemResponse = await response.json();
  console.log({ json });

  return { props: {} };
};

export default function hnItem() {
  return <HnItem />;
}
