import { useRecoilState } from 'recoil';
import { textAtom } from '../../atoms/textAtom';

export function TextInput() {
  const [text, setText] = useRecoilState(textAtom);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input onChange={onChange} style={{ width: '100%' }} type="text" value={text} />
      <br />
      Echo:
      {' '}
      {text}
    </div>
  );
}
