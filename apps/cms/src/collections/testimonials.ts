import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', required: true },
    { name: 'company', type: 'text', required: true },
    { name: 'project', type: 'text', required: true },
    { name: 'text', type: 'textarea', required: true },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}

