import { payloadFetch } from "./payload";

export type ProjectsResponse = {
  docs: any[];
};

export const getProjects = () =>
  payloadFetch<ProjectsResponse>("/api/projects", {
    next: { revalidate: 60 },
  });

export const getFaqs = () =>
  payloadFetch<ProjectsResponse>("/api/faqs", {
    next: { revalidate: 60 },
  });
export const getTestimonials = () =>
  payloadFetch<ProjectsResponse>("/api/testimonials", {
    next: { revalidate: 60 },
  });