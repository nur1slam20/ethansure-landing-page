import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "hero_description" text;
    ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "process_heading" varchar;
    ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "process_subheading" varchar;
    ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "brag_title" varchar;
    ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "brag_subtitle" varchar;
    ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "footer_logos_title" varchar;

    CREATE TABLE IF NOT EXISTS "pages_hero_roles" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "role" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "pages_hero_logos" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "logo" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "pages_process_steps" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "number" varchar NOT NULL,
      "title" varchar NOT NULL,
      "description" text NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "pages_brag_posters" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "image_id" integer
    );

    CREATE TABLE IF NOT EXISTS "pages_brag_rows" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "company" varchar NOT NULL,
      "award" varchar NOT NULL,
      "category" varchar NOT NULL,
      "year" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "pages_footer_logos" (
      "id" serial PRIMARY KEY NOT NULL,
      "order" integer,
      "parent_id" integer NOT NULL,
      "label" varchar NOT NULL
    );

    CREATE TABLE IF NOT EXISTS "testimonials" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "role" varchar NOT NULL,
      "company" varchar NOT NULL,
      "project" varchar NOT NULL,
      "text" text NOT NULL,
      "photo_id" integer,
      "order" numeric DEFAULT 0,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );

    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "testimonials_id" integer;

    CREATE INDEX IF NOT EXISTS "pages_hero_roles_order_idx" ON "pages_hero_roles" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "pages_hero_roles_parent_id_idx" ON "pages_hero_roles" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "pages_hero_logos_order_idx" ON "pages_hero_logos" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "pages_hero_logos_parent_id_idx" ON "pages_hero_logos" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "pages_process_steps_order_idx" ON "pages_process_steps" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "pages_process_steps_parent_id_idx" ON "pages_process_steps" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "pages_brag_posters_order_idx" ON "pages_brag_posters" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "pages_brag_posters_parent_id_idx" ON "pages_brag_posters" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "pages_brag_rows_order_idx" ON "pages_brag_rows" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "pages_brag_rows_parent_id_idx" ON "pages_brag_rows" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "pages_footer_logos_order_idx" ON "pages_footer_logos" USING btree ("order");
    CREATE INDEX IF NOT EXISTS "pages_footer_logos_parent_id_idx" ON "pages_footer_logos" USING btree ("parent_id");
    CREATE INDEX IF NOT EXISTS "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
    CREATE INDEX IF NOT EXISTS "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
    CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");

    ALTER TABLE "pages_hero_roles" ADD CONSTRAINT "pages_hero_roles_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "pages_hero_logos" ADD CONSTRAINT "pages_hero_logos_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "pages_process_steps" ADD CONSTRAINT "pages_process_steps_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "pages_brag_posters" ADD CONSTRAINT "pages_brag_posters_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "pages_brag_posters" ADD CONSTRAINT "pages_brag_posters_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    ALTER TABLE "pages_brag_rows" ADD CONSTRAINT "pages_brag_rows_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "pages_footer_logos" ADD CONSTRAINT "pages_footer_logos_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
    ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "pages" DROP COLUMN IF EXISTS "hero_description";
    ALTER TABLE "pages" DROP COLUMN IF EXISTS "process_heading";
    ALTER TABLE "pages" DROP COLUMN IF EXISTS "process_subheading";
    ALTER TABLE "pages" DROP COLUMN IF EXISTS "brag_title";
    ALTER TABLE "pages" DROP COLUMN IF EXISTS "brag_subtitle";
    ALTER TABLE "pages" DROP COLUMN IF EXISTS "footer_logos_title";

    DROP TABLE IF EXISTS "pages_hero_roles" CASCADE;
    DROP TABLE IF EXISTS "pages_hero_logos" CASCADE;
    DROP TABLE IF EXISTS "pages_process_steps" CASCADE;
    DROP TABLE IF EXISTS "pages_brag_posters" CASCADE;
    DROP TABLE IF EXISTS "pages_brag_rows" CASCADE;
    DROP TABLE IF EXISTS "pages_footer_logos" CASCADE;
    DROP TABLE IF EXISTS "testimonials" CASCADE;

    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "testimonials_id";
    DROP INDEX IF EXISTS "payload_locked_documents_rels_testimonials_id_idx";
  `)
}

