import { CollectionConfig } from 'payload'

export const TrustStats: CollectionConfig = {
  slug: 'trust-stats',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, 
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'number',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
