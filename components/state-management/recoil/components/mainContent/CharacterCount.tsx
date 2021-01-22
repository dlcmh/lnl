import { useRecoilValue } from 'recoil';
import { textAtom } from '../../atoms/textAtom';
import { characterCount } from '../../utils/characterCount';

export function CharacterCount() {
  const text = useRecoilValue(textAtom);
  const count = characterCount(text);

  return (
    <>
      Character Count:
      {' '}
      {count || 0}
    </>
  );
}
