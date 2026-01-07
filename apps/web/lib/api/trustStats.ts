// apps/web/lib/api/trustStats.ts
import { payloadFetch } from "../payload";

export type TrustStat = {
  id: string;
  label: string;
  value: number;
  order: number;
  createdAt?: string;
  updatedAt?: string;
};

type PayloadList<T> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  page: number;
  totalPages: number;
  hasNextPage?: boolean;
  hasPrevPage?: boolean;
  nextPage?: number | null;
  prevPage?: number | null;
};

export async function getTrustStats() {
  // sort=order (asc). If you need desc: sort=-order
  return payloadFetch<PayloadList<TrustStat>>(
    "/api/trust-stats?sort=order&limit=50&depth=0",
    { next: { revalidate: 30 } },
  );
}
