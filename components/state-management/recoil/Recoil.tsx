import { Layout, Typography } from 'antd';
import { Footer } from 'components/components/Footer';
import { Provider } from 'jotai';
import { TopBar } from '../components/TopBar';
import { CharacterCounter } from './components/mainContent/CharacterCounter';
import { LightMenu } from './components/sidebar/LightMenu';
import { SidebarCharacterCount } from './components/sidebar/SidebarCharacterCount';
import { Sider } from './components/sidebar/Sider';

export function Recoil() {
  return (
    <Provider>
      <Layout>
        <TopBar />
        <Layout>
          <Sider>
            <SidebarCharacterCount />
            <LightMenu />
          </Sider>
          <Layout>
            <Layout.Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, minHeight: 360 }}>
                <Typography.Title>Recoil</Typography.Title>
                <CharacterCounter />
              </div>
            </Layout.Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    </Provider>
  );
}
