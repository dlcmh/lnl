import create from 'zustand';

type Store = {
  contenteditable: string;
  textarea: string;
}

const store = create<Store>(() => ({
  contenteditable: '',
  textarea: '',
}));

/** subscription hooks */
export const contenteditableSingleStore = store;
