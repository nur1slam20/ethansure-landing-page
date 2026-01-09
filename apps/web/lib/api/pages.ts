
import { payloadFetch } from '../payload';

export async function getHomePage() {
  const res = await payloadFetch<{ docs: any[] }>(
    '/api/pages?where[slug][equals]=home&limit=1',
    { next: { revalidate: 60 } }
  );

  return res.docs[0];
}
