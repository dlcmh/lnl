import { Layout, Typography } from 'antd';
import { Footer } from 'components/components/Footer';
import { useConvertedSamples } from './store/useConvertedSamples';
import { TopBar } from './TopBar';

export const katexSamples = [
  String.raw`\% \text{ purity of a substance} = \frac{\text{mass of } \mathbf{X} \text{ in it}}{\text{total mass}} \times 100\%`,
  String.raw`\text{efficiency} = \frac{\text{useful power output}}{\text{total power input}}`,
  String.raw`\text{efficiency} = \dfrac{\text{useful power output}}{\text{total power input}}`,
  String.raw`\text{CH}_4(g) + \text{2O}_2(g) \rightarrow \text{CO}_2(g) + \text{2H}_2\text{O}(l)`,
  String.raw`\ce{ CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l) }`,
  String.raw`\ce{ 2Mg(s) + O2(g) -> 2MgO(s) }`,
  String.raw`\text{percentage rate $\times$ net book value of asset}`,
  String.raw`\text{100}^{\circ}\text{C}`,
  String.raw`\text{100}^{\circ}C`,
  String.raw`100^{\circ}\text{C}`,
  String.raw`100{\degree}\text{C}`,
  String.raw`100{\degree}C`,
];

export function Katex() {
  const samples = useConvertedSamples();

  return (
    <Layout>
      <TopBar />
      <Layout>
        <Layout>
          <Layout.Content style={{ margin: '24px 16px 0', padding: 24 }}>
            <Typography.Title>Katex</Typography.Title>
            {samples.map((sample, idx) => (
              <div
                key={idx}
                style={{
                  borderBottom: '1px solid',
                  marginTop: '1rem',
                  paddingBottom: '1rem',
                }}
              >
                <pre>
                  <div style={{ marginBottom: '1rem' }}>{sample.katex}</div>
                  <div
                    dangerouslySetInnerHTML={{ __html: sample.html }}
                    style={{ border: '1px dashed gray', padding: '1rem' }}
                  />
                </pre>
              </div>
            ))}
          </Layout.Content>
          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
}
