import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Work from '../components/landing/Work'
import Process from '../components/landing/Process'
import Brag from '../components/landing/Brag'
import Testimonial from '../components/landing/Testimonial'
import FAQ from '../components/landing/FAQ'
import FooterLogos from '../components/landing/FooterLogos'
import { getTrustStats } from "../lib/api/trustStats";
import { getProjects } from '@/lib/cms'


export default async function Page() {
 let trustStats: any[] = []

  try {
    const res = await getTrustStats()
    trustStats = res.docs
  } catch (e) {
    console.warn('trust-stats not ready yet')
  }
  const data = await getProjects();
  return (
    
    <>
        <div>
      {data.docs.map((p) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.shortDescription}</p>
        </div>
      ))}
    </div>

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



