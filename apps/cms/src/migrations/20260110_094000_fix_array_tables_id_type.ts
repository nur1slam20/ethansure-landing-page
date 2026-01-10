import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ 
    BEGIN
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_hero_roles' AND column_name = 'id' AND data_type = 'integer') THEN
        ALTER TABLE "pages_hero_roles" ALTER COLUMN "id" TYPE varchar USING "id"::varchar;
        ALTER TABLE "pages_hero_roles" ALTER COLUMN "id" DROP DEFAULT;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_hero_logos' AND column_name = 'id' AND data_type = 'integer') THEN
        ALTER TABLE "pages_hero_logos" ALTER COLUMN "id" TYPE varchar USING "id"::varchar;
        ALTER TABLE "pages_hero_logos" ALTER COLUMN "id" DROP DEFAULT;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_process_steps' AND column_name = 'id' AND data_type = 'integer') THEN
        ALTER TABLE "pages_process_steps" ALTER COLUMN "id" TYPE varchar USING "id"::varchar;
        ALTER TABLE "pages_process_steps" ALTER COLUMN "id" DROP DEFAULT;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_brag_posters' AND column_name = 'id' AND data_type = 'integer') THEN
        ALTER TABLE "pages_brag_posters" ALTER COLUMN "id" TYPE varchar USING "id"::varchar;
        ALTER TABLE "pages_brag_posters" ALTER COLUMN "id" DROP DEFAULT;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_brag_rows' AND column_name = 'id' AND data_type = 'integer') THEN
        ALTER TABLE "pages_brag_rows" ALTER COLUMN "id" TYPE varchar USING "id"::varchar;
        ALTER TABLE "pages_brag_rows" ALTER COLUMN "id" DROP DEFAULT;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_footer_logos' AND column_name = 'id' AND data_type = 'integer') THEN
        ALTER TABLE "pages_footer_logos" ALTER COLUMN "id" TYPE varchar USING "id"::varchar;
        ALTER TABLE "pages_footer_logos" ALTER COLUMN "id" DROP DEFAULT;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DO $$ 
    BEGIN
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_hero_roles' AND column_name = 'id' AND data_type = 'character varying') THEN
        ALTER TABLE "pages_hero_roles" ALTER COLUMN "id" TYPE integer USING "id"::integer;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_hero_logos' AND column_name = 'id' AND data_type = 'character varying') THEN
        ALTER TABLE "pages_hero_logos" ALTER COLUMN "id" TYPE integer USING "id"::integer;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_process_steps' AND column_name = 'id' AND data_type = 'character varying') THEN
        ALTER TABLE "pages_process_steps" ALTER COLUMN "id" TYPE integer USING "id"::integer;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_brag_posters' AND column_name = 'id' AND data_type = 'character varying') THEN
        ALTER TABLE "pages_brag_posters" ALTER COLUMN "id" TYPE integer USING "id"::integer;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_brag_rows' AND column_name = 'id' AND data_type = 'character varying') THEN
        ALTER TABLE "pages_brag_rows" ALTER COLUMN "id" TYPE integer USING "id"::integer;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_footer_logos' AND column_name = 'id' AND data_type = 'character varying') THEN
        ALTER TABLE "pages_footer_logos" ALTER COLUMN "id" TYPE integer USING "id"::integer;
      END IF;
    END $$;
  `)
}

