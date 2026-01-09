type FetchOpts = RequestInit & {
  next?: { revalidate?: number }
}

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '')
  }

  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    return `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`.replace(/\/$/, '')
  }

  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
  }

  throw new Error('NEXT_PUBLIC_API_URL is missing')
}

export async function payloadFetch<T>(
  path: string,
  opts: FetchOpts = {},
): Promise<T> {
  const base = getBaseUrl()
  const url = `${base}${path.startsWith('/') ? '' : '/'}${path}`

  const res = await fetch(url, {
    ...opts,
    headers: {
      ...(opts.headers || {}),
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Payload API ${res.status}: ${text}`)
  }

  return res.json()
}
