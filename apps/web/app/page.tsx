import Header from '@/components/header/Header'
import HeroSection from '@/components/landing/HeroSection'
import WorkSection from '@/components/landing/WorkSection'
import ProcessSection from '@/components/landing/ProcessSection'
import BragSection from '@/components/landing/BragSection'
import TestimonialSection from '@/components/landing/TestimonialSection'
import FAQSection from '@/components/landing/FAQSection'
import FooterLogosSection from '@/components/landing/FooterLogosSection'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WorkSection />
        <ProcessSection />
        <BragSection />
        <TestimonialSection />
        <FAQSection />
        <FooterLogosSection />
      </main>
    </>
  )
}
