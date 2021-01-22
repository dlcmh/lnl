import { atom } from 'recoil';

export const textAtom = atom({
  key: 'textAtom', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
