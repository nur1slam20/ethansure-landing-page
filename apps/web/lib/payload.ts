type FetchOpts = RequestInit & { next?: { revalidate?: number } };

function normalizeBaseUrl(raw: string) {
  const trimmed = raw.trim().replace(/\/$/, "");
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function getBaseUrl() {
  const raw =
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.RAILWAY_PUBLIC_DOMAIN && `https://${process.env.RAILWAY_PUBLIC_DOMAIN}`) ||
    process.env.RAILWAY_STATIC_URL;

  if (!raw) throw new Error("NEXT_PUBLIC_API_URL is missing");
  return normalizeBaseUrl(raw);
}


export async function payloadFetch<T>(
  path: string,
  opts: FetchOpts = {}
): Promise<T> {
  const base = getBaseUrl();
  const url = `${base}${path.startsWith("/") ? "" : "/"}${path}`;


  const res = await fetch(url, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Payload API ${res.status}: ${text || res.statusText}`);
  }

  return res.json() as Promise<T>;
}
