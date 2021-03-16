import { katexStore } from './katexStore';
import { conditionallyPopulateSamples } from './conditionallyPopulateSamples';

export function useConvertedSamples() {
  const samples = katexStore((state) => state.samples);

  conditionallyPopulateSamples();

  return samples;
}
