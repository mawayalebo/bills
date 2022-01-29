import Head from 'next/head'
import Banner from '../components/Banner'
import Description from '../components/Description'
import Documments from '../components/Documents'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bills hub | Legal cost consultants in South africa</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header/>
      <Banner/>
      <Description/>
      <Documments/>
    </div>
  )
}
