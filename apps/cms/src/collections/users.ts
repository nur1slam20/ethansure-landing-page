import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',

  auth: {
    tokenExpiration: 7200,
  },

  admin: {
    useAsTitle: 'email',
  },

  fields: [],
}
