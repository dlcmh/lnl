import { Layout, Typography } from 'antd';
import { Provider } from 'jotai';
import { CharacterCounter } from './components/mainContent/CharacterCounter';
import { SidebarCharacterCount } from './components/sidebar/SidebarCharacterCount';
import { LightMenu } from './components/sidebar/LightMenu';
import { Sider } from './components/sidebar/Sider';
import { TopBar } from './components/TopBar';

export function Jotai() {
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
                <Typography.Title>Jotai</Typography.Title>
                <CharacterCounter />
              </div>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
              <a href="https://github.com/dlcmh/lnl">LnL Repo</a>
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    </Provider>
  );
}
