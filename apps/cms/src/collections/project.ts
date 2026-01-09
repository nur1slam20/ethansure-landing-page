import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'shortDescription', type: 'textarea' },
    { name: 'year', type: 'number' },
    { name: 'published', type: 'checkbox', defaultValue: true },


    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },


    { name: 'invert', type: 'checkbox', defaultValue: false },
  ],
}
