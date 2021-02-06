import Link from 'next/link';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';

export const TopBar = () => {
  const router = useRouter();

  return (
    <Layout.Header>
      <div
        className="logo"
        style={{
          float: 'left',
          width: '140px',
          height: '31px',
          margin: '16px 50px 16px 0',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <Menu
        mode="horizontal"
        selectedKeys={[router.pathname.split('/').slice(-1)[0]]}
        theme="dark"
      >
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="contenteditable">
          <Link href="/editor/contenteditable/single">contenteditable</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
