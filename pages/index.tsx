import Head from 'next/head'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import Description from '../components/Description'
import Documments from '../components/Documents'
import Fees from '../components/Fees'
import Footer from '../components/Footer'
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
      <ContactForm/>
      <Fees/>
      <Footer/>
    </div>
  )
}
