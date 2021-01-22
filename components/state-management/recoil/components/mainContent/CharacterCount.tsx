import { useAtom } from 'jotai';
import { charCountState } from '../../utils/charCountState';
import { textAtom } from '../../atoms/textAtom';

export function CharacterCount() {
  const [text] = useAtom(textAtom);
  const count = charCountState(text);

  return (
    <>
      Character Count:
      {' '}
      {count || 0}
    </>
  );
}
