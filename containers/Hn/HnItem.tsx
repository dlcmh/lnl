import { Button, Space } from 'antd';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import Link from 'next/link';

export function HnItem() {
  return (
    <PageWrapper title="HN Item">
      <Space>
        <Link href="/learn-chinese/simplified-characters/add" passHref>
          <a>
            <Button type="primary">Add Simplified Character</Button>
          </a>
        </Link>
        <Link href="/learn-chinese/simplified-characters/search" passHref>
          <a>
            <Button type="primary">Search Character in File</Button>
          </a>
        </Link>
      </Space>
    </PageWrapper>
  );
}
