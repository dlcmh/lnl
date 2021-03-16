import create from 'zustand';

interface Sample {
  katex: string;
  html: string;
}

type State = {
  didPopulateSamples: boolean;
  isFetching: boolean;
  samples: Sample[];
};

const store = create<State>(() => ({
  didPopulateSamples: false,
  isFetching: false,
  samples: [],
}));
export const katexStore = store;
