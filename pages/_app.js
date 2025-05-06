// pages/_app.js
import '@/components/Layout.css'; 
import Layout from '@/components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;