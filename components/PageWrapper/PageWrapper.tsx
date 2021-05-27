import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Head } from 'components/Head/Head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './PageWrapperStyles.module.scss';
interface Props {
  children: ReactNode;
  title: string;
}

export function PageWrapper({ children, title }: Props) {
  return (
    <div className={styles.styles}>
      <Head title={title} />
      <Link href="/" passHref>
        <a>
          <div className={styles.topMenu}>
            <Button type="text">Home</Button>
          </div>
        </a>
      </Link>

      <h2>{title}</h2>
      {children}
    </div>
  );
}
