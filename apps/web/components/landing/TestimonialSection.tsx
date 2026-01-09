import Testimonial from '@/components/landing/Testimonial'
import { getTestimonials, getMediaUrl } from '@/lib/cms'
import type { TestimonialItem } from '@/components/landing/Testimonial'

export default async function TestimonialSection() {
  const testimonials = await getTestimonials()

  const testimonialItems: TestimonialItem[] =
    testimonials?.map((testimonial) => ({
      id: String(testimonial.id),
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company,
      project: testimonial.project,
      text: testimonial.text,
      photo: getMediaUrl(testimonial.photo),
    })) || []

  return <Testimonial items={testimonialItems} />
}

