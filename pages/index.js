import Head from 'next/head';
import Header from '../pages/components/Header.js';
import Banner from '../pages/components/Banner.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

    </div>
  )
}
