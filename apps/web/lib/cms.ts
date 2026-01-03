const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL!

async function cmsFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${CMS_URL}${path}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error(`CMS ${res.status} for ${path}`)
  return res.json()
}

export const getProjects = () => cmsFetch<{ docs: any[] }>('/api/projects')
export const getFaqs = () => cmsFetch<{ docs: any[] }>('/api/faqs')
