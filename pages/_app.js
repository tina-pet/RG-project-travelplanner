import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="EasyTrip - cestovní itinerář" />

        <title>EasyTrip - cestovní itinerář</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
