import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useAtom } from 'jotai';
import { textAtom } from '../../atoms/textAtom';

export function LightMenu() {
  const [text] = useAtom(textAtom);

  return (
    <Menu mode="inline">
      {text.split('').filter((char) => !!char.trim()).map((char, idx) => (
      // eslint-disable-next-line react/no-array-index-key
        <Menu.Item key={(idx + 100) * 10} icon={<UserOutlined />}>
          {char}
        </Menu.Item>
      ))}
    </Menu>

  );
}
