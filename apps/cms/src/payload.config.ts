// apps/cms/src/payload.config.ts

import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'

import { Users } from './collections/users'
import { Media } from './collections/media'
import { Projects } from './collections/project'
import { Faqs } from './collections/faqs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Secret
const PAYLOAD_SECRET = process.env.PAYLOAD_SECRET
if (!PAYLOAD_SECRET) {
  throw new Error('PAYLOAD_SECRET is missing. Add it to apps/cms/.env.local')
}

// SQLite file URL (libsql expects a URL, not a filesystem path)
const dbPath = path.resolve(dirname, '../payload.db')
const dbURL = pathToFileURL(dbPath).toString() // -> file:///Users/...

export default buildConfig({
  secret: PAYLOAD_SECRET,

  db: sqliteAdapter({
    client: {
      url: dbURL,
    },
  }),

  admin: {
    user: Users.slug,
  },

  collections: [Users, Media, Projects, Faqs],
})
