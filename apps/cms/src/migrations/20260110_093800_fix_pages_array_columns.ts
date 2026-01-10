import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    DO $$ 
    BEGIN
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_hero_roles' AND column_name = 'parent_id') THEN
        ALTER TABLE "pages_hero_roles" RENAME COLUMN "parent_id" TO "_parent_id";
        ALTER TABLE "pages_hero_roles" RENAME COLUMN "order" TO "_order";
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_hero_logos' AND column_name = 'parent_id') THEN
        ALTER TABLE "pages_hero_logos" RENAME COLUMN "parent_id" TO "_parent_id";
        ALTER TABLE "pages_hero_logos" RENAME COLUMN "order" TO "_order";
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_process_steps' AND column_name = 'parent_id') THEN
        ALTER TABLE "pages_process_steps" RENAME COLUMN "parent_id" TO "_parent_id";
        ALTER TABLE "pages_process_steps" RENAME COLUMN "order" TO "_order";
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_brag_posters' AND column_name = 'parent_id') THEN
        ALTER TABLE "pages_brag_posters" RENAME COLUMN "parent_id" TO "_parent_id";
        ALTER TABLE "pages_brag_posters" RENAME COLUMN "order" TO "_order";
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_brag_rows' AND column_name = 'parent_id') THEN
        ALTER TABLE "pages_brag_rows" RENAME COLUMN "parent_id" TO "_parent_id";
        ALTER TABLE "pages_brag_rows" RENAME COLUMN "order" TO "_order";
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'pages_footer_logos' AND column_name = 'parent_id') THEN
        ALTER TABLE "pages_footer_logos" RENAME COLUMN "parent_id" TO "_parent_id";
        ALTER TABLE "pages_footer_logos" RENAME COLUMN "order" TO "_order";
      END IF;
    END $$;

    DROP INDEX IF EXISTS "pages_hero_roles_order_idx";
    DROP INDEX IF EXISTS "pages_hero_roles_parent_id_idx";
    DROP INDEX IF EXISTS "pages_hero_logos_order_idx";
    DROP INDEX IF EXISTS "pages_hero_logos_parent_id_idx";
    DROP INDEX IF EXISTS "pages_process_steps_order_idx";
    DROP INDEX IF EXISTS "pages_process_steps_parent_id_idx";
    DROP INDEX IF EXISTS "pages_brag_posters_order_idx";
    DROP INDEX IF EXISTS "pages_brag_posters_parent_id_idx";
    DROP INDEX IF EXISTS "pages_brag_rows_order_idx";
    DROP INDEX IF EXISTS "pages_brag_rows_parent_id_idx";
    DROP INDEX IF EXISTS "pages_footer_logos_order_idx";
    DROP INDEX IF EXISTS "pages_footer_logos_parent_id_idx";

    CREATE INDEX IF NOT EXISTS "pages_hero_roles_order_idx" ON "pages_hero_roles" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_hero_roles_parent_id_idx" ON "pages_hero_roles" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_hero_logos_order_idx" ON "pages_hero_logos" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_hero_logos_parent_id_idx" ON "pages_hero_logos" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_process_steps_order_idx" ON "pages_process_steps" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_process_steps_parent_id_idx" ON "pages_process_steps" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_brag_posters_order_idx" ON "pages_brag_posters" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_brag_posters_parent_id_idx" ON "pages_brag_posters" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_brag_rows_order_idx" ON "pages_brag_rows" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_brag_rows_parent_id_idx" ON "pages_brag_rows" USING btree ("_parent_id");
    CREATE INDEX IF NOT EXISTS "pages_footer_logos_order_idx" ON "pages_footer_logos" USING btree ("_order");
    CREATE INDEX IF NOT EXISTS "pages_footer_logos_parent_id_idx" ON "pages_footer_logos" USING btree ("_parent_id");

    DO $$
    BEGIN
      IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'pages_hero_roles_parent_id_pages_id_fk' AND table_name = 'pages_hero_roles') THEN
        ALTER TABLE "pages_hero_roles" DROP CONSTRAINT IF EXISTS "pages_hero_roles_parent_id_pages_id_fk";
        ALTER TABLE "pages_hero_roles" ADD CONSTRAINT "pages_hero_roles_parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'pages_hero_logos_parent_id_pages_id_fk' AND table_name = 'pages_hero_logos') THEN
        ALTER TABLE "pages_hero_logos" DROP CONSTRAINT IF EXISTS "pages_hero_logos_parent_id_pages_id_fk";
        ALTER TABLE "pages_hero_logos" ADD CONSTRAINT "pages_hero_logos_parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'pages_process_steps_parent_id_pages_id_fk' AND table_name = 'pages_process_steps') THEN
        ALTER TABLE "pages_process_steps" DROP CONSTRAINT IF EXISTS "pages_process_steps_parent_id_pages_id_fk";
        ALTER TABLE "pages_process_steps" ADD CONSTRAINT "pages_process_steps_parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'pages_brag_posters_parent_id_pages_id_fk' AND table_name = 'pages_brag_posters') THEN
        ALTER TABLE "pages_brag_posters" DROP CONSTRAINT IF EXISTS "pages_brag_posters_parent_id_pages_id_fk";
        ALTER TABLE "pages_brag_posters" ADD CONSTRAINT "pages_brag_posters_parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'pages_brag_rows_parent_id_pages_id_fk' AND table_name = 'pages_brag_rows') THEN
        ALTER TABLE "pages_brag_rows" DROP CONSTRAINT IF EXISTS "pages_brag_rows_parent_id_pages_id_fk";
        ALTER TABLE "pages_brag_rows" ADD CONSTRAINT "pages_brag_rows_parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
      
      IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'pages_footer_logos_parent_id_pages_id_fk' AND table_name = 'pages_footer_logos') THEN
        ALTER TABLE "pages_footer_logos" DROP CONSTRAINT IF EXISTS "pages_footer_logos_parent_id_pages_id_fk";
        ALTER TABLE "pages_footer_logos" ADD CONSTRAINT "pages_footer_logos_parent_id_pages_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
      END IF;
    END $$;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages_hero_roles" RENAME COLUMN "_parent_id" TO "parent_id";
    ALTER TABLE "pages_hero_roles" RENAME COLUMN "_order" TO "order";
    ALTER TABLE "pages_hero_logos" RENAME COLUMN "_parent_id" TO "parent_id";
    ALTER TABLE "pages_hero_logos" RENAME COLUMN "_order" TO "order";
    ALTER TABLE "pages_process_steps" RENAME COLUMN "_parent_id" TO "parent_id";
    ALTER TABLE "pages_process_steps" RENAME COLUMN "_order" TO "order";
    ALTER TABLE "pages_brag_posters" RENAME COLUMN "_parent_id" TO "parent_id";
    ALTER TABLE "pages_brag_posters" RENAME COLUMN "_order" TO "order";
    ALTER TABLE "pages_brag_rows" RENAME COLUMN "_parent_id" TO "parent_id";
    ALTER TABLE "pages_brag_rows" RENAME COLUMN "_order" TO "order";
    ALTER TABLE "pages_footer_logos" RENAME COLUMN "_parent_id" TO "parent_id";
    ALTER TABLE "pages_footer_logos" RENAME COLUMN "_order" TO "order";
  `)
}

