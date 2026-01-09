import type { CollectionConfig } from 'payload'

export const TrustStats: CollectionConfig = {
  slug: 'trust-stats',
  admin: {
    useAsTitle: 'label',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'label',
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
      required: true,
    },
  ],
};
