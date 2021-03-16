import { katexSamples } from '../Katex';
import { convertSample } from './convertSample';
import { katexStore } from './katexStore';

export async function conditionallyPopulateSamples() {
  const { didPopulateSamples, isFetching } = katexStore.getState();
  if (didPopulateSamples || isFetching) return;

  katexStore.setState({
    isFetching: true,
  });

  const fetches = katexSamples.map(async (katex) => {
    const html = await convertSample(katex);
    return { katex, html };
  });

  const results = await Promise.all(fetches);

  katexStore.setState({
    didPopulateSamples: true,
    samples: results,
  });
}
