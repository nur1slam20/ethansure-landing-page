import { payloadFetch } from '../payload'

export type TrustStat = {
  id: string
  label: string
  value: number
  order: number
}

type PayloadList<T> = {
  docs: T[]
  totalDocs: number
}

export function getTrustStats() {
  return payloadFetch<PayloadList<TrustStat>>(
    '/api/trust-stats?sort=order&limit=50',
    { next: { revalidate: 30 } },
  )
}
