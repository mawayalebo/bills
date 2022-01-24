import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bills</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header/>
      <Banner/>
    </div>
  )
}
