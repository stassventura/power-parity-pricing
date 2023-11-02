import type { AppProps } from 'next/app';
import type { LayoutProps } from '@vercel/examples-ui/layout';
import { getLayout } from '@vercel/examples-ui';
import '@vercel/examples-ui/globals.css';
import { MantineProvider } from '@mantine/core';

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = getLayout<LayoutProps>(Component);

  return (
    <Layout title="Power parity pricing" path="edge-middleware/power-parity-pricing">
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </Layout>
  );
}
