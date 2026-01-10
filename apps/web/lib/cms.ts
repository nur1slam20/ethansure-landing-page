import { cache } from 'react'
import { payloadFetch } from './payload'

export type MediaDoc = {
  id: string | number
  url?: string
  alt?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
}

export type ProjectDoc = {
  id: string | number
  title: string
  shortDescription?: string
  year?: number
  published?: boolean
  invert?: boolean
  image?: MediaDoc | string | number
}

export type FAQDoc = {
  id: string | number
  question: string
  answer: string
  order?: number
}

export type PageDoc = {
  id: string | number
  slug: string
  heroTitle?: string
  heroRoles?: Array<{ role: string; id?: string }>
  heroDescription?: string
  heroLogos?: Array<{ logo: string; id?: string }>
  ctaText?: string
  ctaButton?: string
  processHeading?: string
  processSubheading?: string
  processSteps?: Array<{ number: string; title: string; description: string; id?: string }>
  bragTitle?: string
  bragSubtitle?: string
  bragPosters?: Array<{ image: MediaDoc | string | number; id?: string }>
  bragRows?: Array<{ company: string; award: string; category: string; year: string; id?: string }>
  footerLogosTitle?: string
  footerLogos?: Array<{ label: string; id?: string }>
}

export type TestimonialDoc = {
  id: string | number
  name: string
  role: string
  company: string
  project: string
  text: string
  photo?: MediaDoc | string | number
  order?: number
}

type PayloadListResponse<T> = {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page?: number
}

export const getProjects = cache(async () => {
  try {
    const response = await payloadFetch<PayloadListResponse<ProjectDoc>>(
      '/api/projects?where[published][equals]=true&sort=-year&depth=2',
      {
        next: { revalidate: 60 },
      },
    )
    return response.docs
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
})

export const getFaqs = cache(async () => {
  try {
    const response = await payloadFetch<PayloadListResponse<FAQDoc>>(
      '/api/faqs?sort=order&limit=50',
      {
        next: { revalidate: 60 },
      },
    )
    return response.docs
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    return []
  }
})

export const getHomePage = cache(async () => {
  try {
    const homeResponse = await payloadFetch<PayloadListResponse<PageDoc>>(
      '/api/pages?where[slug][equals]=home&limit=1&depth=2',
      {
        next: { revalidate: 60 },
      },
    )
    if (homeResponse.docs && homeResponse.docs.length > 0) {
      return homeResponse.docs[0]
    }
    const allPages = await payloadFetch<PayloadListResponse<PageDoc>>(
      '/api/pages?limit=1&depth=2',
      {
        next: { revalidate: 60 },
      },
    )
    return allPages.docs[0]
  } catch (error) {
    console.error('Error fetching home page:', error)
    return undefined
  }
})

export const getTestimonials = cache(async () => {
  try {
    const response = await payloadFetch<PayloadListResponse<TestimonialDoc>>(
      '/api/testimonials?sort=order&limit=50',
      {
        next: { revalidate: 60 },
      },
    )
    return response.docs
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
})

function getMediaBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')
  }

  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    return `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`.replace(/\/$/, '')
  }

  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3001'
  }

  return ''
}

export function getMediaUrl(media: MediaDoc | string | number | null | undefined): string {
  if (!media) return ''
  
  const baseUrl = getMediaBaseUrl()
  
  if (typeof media === 'string') {
    if (media.startsWith('http://') || media.startsWith('https://')) {
      return media
    }
    if (baseUrl) {
      return `${baseUrl}${media.startsWith('/') ? '' : '/'}${media}`
    }
    return media
  }
  
  if (typeof media === 'number') {
    return ''
  }
  
  if (media && typeof media === 'object') {
    if ('url' in media && media.url) {
      const url = media.url
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return url
      }
      if (baseUrl) {
        return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`
      }
      return url
    }
  }
  
  return ''
}

