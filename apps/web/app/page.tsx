import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Work from '../components/landing/Work'
import Process from '../components/landing/Process'
import Brag from '../components/landing/Brag'
import Testimonial from '../components/landing/Testimonial'
import FAQ from '../components/landing/FAQ'
import FooterLogos from '../components/landing/FooterLogos'


export default async function Page() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Process />
        <Brag />
        <Testimonial />
        <FAQ />
        <FooterLogos />
      </main>
    </>
  )
}



