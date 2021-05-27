import { HnItem } from 'containers/Hn/HnItem';
import { GetServerSideProps } from 'next';

// export async function getServerSideProps(context: NextPageContext) {
export const getServerSideProps: GetServerSideProps = async (context) => {
  // // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // // Pass data to the page via props
  // return { props: { data } }

  const {
    params: { id },
  } = context;

  console.log({ id });

  return { props: {} };
};

export default function hnItem() {
  return <HnItem />;
}
