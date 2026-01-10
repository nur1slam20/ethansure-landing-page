import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

import { Users } from './collections/users'
import { Media } from './collections/media'
import { Projects } from './collections/project'
import { Faqs } from './collections/faqs'
import { TrustStats } from './collections/TrustStats'
import { Pages } from './collections/pages'
import { Testimonials } from './collections/testimonials'

const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET
if (!PAYLOAD_SECRET) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('PAYLOAD_SECRET is required in production')
  }
  console.warn('PAYLOAD_SECRET is missing - using placeholder for build')
}

const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error('DATABASE_URL is required in production')
  }
  console.warn('DATABASE_URL is missing - using placeholder for build')
}

const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN

export default buildConfig({
  secret: PAYLOAD_SECRET,

  db: postgresAdapter({
    pool: {
      connectionString: DATABASE_URL || 'postgresql://placeholder',
      connectionTimeoutMillis: 10000,
      idleTimeoutMillis: 30000,
      max: 20,
    },
  }),

  admin: {
    user: Users.slug,
    disable: false,
    suppressHydrationWarning: true,
  },

  collections: [Users, Media, Projects, Faqs, TrustStats, Pages, Testimonials],

  plugins: [
    ...(BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            token: BLOB_READ_WRITE_TOKEN,
            collections: {
              media: true,
            },
          }),
        ]
      : []),
  ],

  sharp,
})
