CREATE TABLE "access_requests" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"role" text NOT NULL,
	"reason" text NOT NULL,
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"role" text NOT NULL,
	"access_code" text NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"approved_at" timestamp DEFAULT now() NOT NULL,
	"request_id" uuid NOT NULL,
	CONSTRAINT "users_access_code_unique" UNIQUE("access_code")
);
--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_request_id_access_requests_id_fk" FOREIGN KEY ("request_id") REFERENCES "public"."access_requests"("id") ON DELETE no action ON UPDATE no action;