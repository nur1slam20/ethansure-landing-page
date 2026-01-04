

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'

import { Users } from './collections/users'
import { Media } from './collections/media'
import { Projects } from './collections/project'
import { Faqs } from './collections/faqs'

const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET
if (!PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET is missing')
}

const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is missing')
}

export default buildConfig({
  secret: PAYLOAD_SECRET,

  db: postgresAdapter({
    pool: {
      connectionString: DATABASE_URL,
    },
  }),

  admin: {
    user: Users.slug,
  },

  collections: [Users, Media, Projects, Faqs],
})
