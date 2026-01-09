import FooterLogos from '@/components/landing/FooterLogos'
import { getHomePage } from '@/lib/cms'

export default async function FooterLogosSection() {
  const homePage = await getHomePage()

  const footerLogos =
    homePage?.footerLogos?.map((logo) => ({
      id: logo.id || String(Math.random()),
      label: logo.label,
    })) || []

  return <FooterLogos title={homePage?.footerLogosTitle || ''} logos={footerLogos} />
}

