import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';

export function SidebarMenu() {
  return (
    <Menu mode="inline" theme="dark">
      <Menu.Item key="single" icon={<UserOutlined />}>
        <Link href="/editor/contenteditable/single">contenteditable - single</Link>
      </Menu.Item>
    </Menu>
  );
}
