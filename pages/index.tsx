import Head from 'next/head'
import Banner from '../components/Banner'
import Description from '../components/Description'
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
      <Description/>
    </div>
  )
}
