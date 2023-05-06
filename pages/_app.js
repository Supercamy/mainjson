import '@/styles/globals.css';

import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className='container mx-auto mt-2'>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
