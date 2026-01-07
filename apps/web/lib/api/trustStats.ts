
import { payloadFetch } from "../payload";

export type TrustStat = {
  id: string;
  title?: string;
  subtitle?: string;
  order?: number;
};

type PayloadList<T> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  page: number;
  totalPages: number;
};

export async function getTrustStats() {

  return payloadFetch<PayloadList<TrustStat>>(
    "/trust-stats?sort=order&limit=50&depth=1",
    { next: { revalidate: 30 } },
  );
}
