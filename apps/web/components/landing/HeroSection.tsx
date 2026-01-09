import Hero from '@/components/hero/Hero'
import { getHomePage, getMediaUrl } from '@/lib/cms'

export default async function HeroSection() {
  const homePage = await getHomePage()

  return (
    <Hero
      title={homePage?.heroTitle || ''}
      roles={homePage?.heroRoles?.map((r) => r.role) || []}
      logos={homePage?.heroLogos?.map((l) => l.logo) || []}
      description={homePage?.heroDescription || ''}
    />
  )
}

