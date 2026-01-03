const CMS_URL =
  process.env.NEXT_PUBLIC_CMS_URL ?? 'http://localhost:3000'

type PayloadList<T> = {
  docs: T[]
  totalDocs: number
}

export type Project = {
  id: string
  title: string
  slug: string
  description?: string
}

export type Faq = {
  id: string
  question: string
  answer: string
}

async function fetchFromCMS<T>(path: string): Promise<T> {
  const res = await fetch(`${CMS_URL}${path}`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error(`CMS error: ${path}`)
  }

  return res.json()
}

export function getProjects() {
  return fetchFromCMS<PayloadList<Project>>('/api/projects')
}

export function getFaqs() {
  return fetchFromCMS<PayloadList<Faq>>('/api/faqs')
}
