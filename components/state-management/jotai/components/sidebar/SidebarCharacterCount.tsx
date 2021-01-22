import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useAtom } from 'jotai';
import { textAtom } from '../../atoms/textAtom';
import { characterCount } from '../../utils/characterCount';

export function SidebarCharacterCount() {
  const [text] = useAtom(textAtom);
  const count = characterCount(text);

  return (
    <Menu mode="inline" theme="dark">
      <Menu.Item key="1" icon={<UserOutlined />} style={{ color: 'yellow' }}>
        {count || 0}
      </Menu.Item>
    </Menu>
  );
}
