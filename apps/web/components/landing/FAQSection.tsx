import FAQ from '@/components/landing/FAQ'
import { getFaqs } from '@/lib/cms'

export default async function FAQSection() {
  const faqs = await getFaqs()

  const faqItems =
    faqs?.map((faq) => ({
      id: String(faq.id),
      question: faq.question,
      answer: faq.answer,
    })) || []

  return (
    <FAQ
      title={'COMMON\nQUESTIONS'}
      subtitle={'SOME QUESTIONS\nPEOPLE USUALLY ASK'}
      items={faqItems}
    />
  )
}

