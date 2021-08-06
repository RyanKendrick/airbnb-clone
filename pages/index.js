import Head from 'next/head';
import Header from '../pages/components/Header.js';
import Banner from '../pages/components/Banner.js';

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Explore Nearby
          </h2>
          {/* Pull Data from Server - API Endpoints */}
          {exploreData.map(item => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>

    </div>
  );
}


export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    }
  }
}