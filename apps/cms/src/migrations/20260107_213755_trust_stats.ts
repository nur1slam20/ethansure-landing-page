import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "trust_stats" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"value" numeric NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "trust_stats_id" integer;
  CREATE INDEX "trust_stats_updated_at_idx" ON "trust_stats" USING btree ("updated_at");
  CREATE INDEX "trust_stats_created_at_idx" ON "trust_stats" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trust_stats_fk" FOREIGN KEY ("trust_stats_id") REFERENCES "public"."trust_stats"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_trust_stats_id_idx" ON "payload_locked_documents_rels" USING btree ("trust_stats_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "trust_stats" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "trust_stats" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_trust_stats_fk";
  
  DROP INDEX "payload_locked_documents_rels_trust_stats_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "trust_stats_id";`)
}
