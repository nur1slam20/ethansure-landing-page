export function withBaseUrl(path?: string | null) {
  if (!path) return null

  const base =
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.RAILWAY_PUBLIC_DOMAIN && `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`) ||
    process.env.RAILWAY_STATIC_URL

  if (!base) return path 
  if (path.startsWith('http://') || path.startsWith('https://')) return path
  return `${base.replace(/\/$/, '')}${path.startsWith('/') ? '' : '/'}${path}`
}
