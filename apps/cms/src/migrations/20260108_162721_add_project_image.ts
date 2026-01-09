import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"about_title" varchar,
  	"about_text" varchar,
  	"cta_text" varchar,
  	"cta_button" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DROP INDEX "projects_slug_idx";
  ALTER TABLE "trust_stats" ALTER COLUMN "order" DROP DEFAULT;
  ALTER TABLE "trust_stats" ALTER COLUMN "order" SET NOT NULL;
  ALTER TABLE "projects" ADD COLUMN "image_id" integer;
  ALTER TABLE "projects" ADD COLUMN "invert" boolean DEFAULT false;
  ALTER TABLE "trust_stats" ADD COLUMN "label" varchar NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "pages_id" integer;
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  ALTER TABLE "projects" ADD CONSTRAINT "projects_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "projects_image_idx" ON "projects" USING btree ("image_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  ALTER TABLE "projects" DROP COLUMN "slug";
  ALTER TABLE "trust_stats" DROP COLUMN "title";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages" CASCADE;
  ALTER TABLE "projects" DROP CONSTRAINT "projects_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_pages_fk";
  
  DROP INDEX "projects_image_idx";
  DROP INDEX "payload_locked_documents_rels_pages_id_idx";
  ALTER TABLE "trust_stats" ALTER COLUMN "order" SET DEFAULT 0;
  ALTER TABLE "trust_stats" ALTER COLUMN "order" DROP NOT NULL;
  ALTER TABLE "projects" ADD COLUMN "slug" varchar NOT NULL;
  ALTER TABLE "trust_stats" ADD COLUMN "title" varchar NOT NULL;
  CREATE UNIQUE INDEX "projects_slug_idx" ON "projects" USING btree ("slug");
  ALTER TABLE "projects" DROP COLUMN "image_id";
  ALTER TABLE "projects" DROP COLUMN "invert";
  ALTER TABLE "trust_stats" DROP COLUMN "label";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "pages_id";`)
}
