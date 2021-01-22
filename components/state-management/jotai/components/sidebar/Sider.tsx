import { Layout } from 'antd';

export function Sider({ children }) {
  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      {children}
    </Layout.Sider>
  );
}
