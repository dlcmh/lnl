import { Layout, Typography } from 'antd';
import { Footer } from 'components/components/Footer';
import { Sider } from '../../components/sidebar/Sider';
import { SidebarMenu } from '../../components/sidebar/SidebarMenu';
import { TopBar } from '../../components/TopBar';
import { SingleContenteditableForm } from './SingleContenteditableForm';

export function SingleContenteditable() {
  return (
    <Layout>
      <TopBar />
      <Layout>
        <Sider>
          <SidebarMenu />
        </Sider>
        <Layout>
          <Layout.Content style={{ background: 'white', margin: '2rem', padding: '2rem' }}>
            <Typography.Title>contenteditable - single</Typography.Title>
            <SingleContenteditableForm />
          </Layout.Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>

  );
}
