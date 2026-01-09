import Brag from '@/components/landing/Brag'
import { getHomePage, getMediaUrl } from '@/lib/cms'

export default async function BragSection() {
  const homePage = await getHomePage()

  const bragPosters =
    homePage?.bragPosters?.map((poster) => ({
      id: poster.id || String(Math.random()),
      url: getMediaUrl(poster.image),
    })) || []

  const bragRows =
    homePage?.bragRows?.map((row) => ({
      company: row.company,
      award: row.award,
      category: row.category,
      year: row.year,
    })) || []

  return (
    <Brag
      title={homePage?.bragTitle || ''}
      subtitle={homePage?.bragSubtitle || ''}
      posters={bragPosters}
      rows={bragRows}
    />
  )
}

