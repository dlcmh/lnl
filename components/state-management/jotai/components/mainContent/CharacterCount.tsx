import { useAtom } from 'jotai';
import { characterCount } from '../../utils/characterCount';
import { textAtom } from '../../atoms/textAtom';

export function CharacterCount() {
  const [text] = useAtom(textAtom);
  const count = characterCount(text);

  return (
    <>
      Character Count:
      {' '}
      {count || 0}
    </>
  );
}
