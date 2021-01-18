import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';

export const TopBar = () => {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Layout.Header>
      <div
        className="logo"
        style={{
          float: 'left',
          width: '120px',
          height: '31px',
          margin: '16px 30px 16px 0',
          background: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <Menu
        mode="horizontal"
        selectedKeys={[router.pathname.split('/').slice(-1)[0]]}
        theme="dark"
      >
        <Menu.Item key="jotai">Jotai</Menu.Item>
        <Menu.Item key="recoil">Recoil</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};
