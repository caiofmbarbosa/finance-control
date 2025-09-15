DROP TABLE IF EXISTS "users" CASCADE;
DROP TABLE IF EXISTS "subscriptions" CASCADE;
DROP TABLE IF EXISTS "user_preference" CASCADE;

CREATE TYPE "roles" AS ENUM (
    'ROLE_CUSTOMER',
    'ROLE_ADMIN'
    );

CREATE TYPE "billing_periods" AS ENUM (
    'MONTHLY',
    'YEARLY',
    'WEEKLY',
    'CUSTOM'
    );

CREATE TABLE "users"
(
    "id"            UUID PRIMARY KEY   NOT NULL,
    "username"      varchar(30) UNIQUE NOT NULL,
    "password"      varchar(100)       NOT NULL,
    "role"          roles              NOT NULL,
    "refresh_token" TEXT,
    "created_at"    timestamp          NOT NULL DEFAULT (now()),
    "updated_at"    timestamp          NOT NULL DEFAULT (now())
);

CREATE TABLE "subscriptions"
(
    "id"                 UUID PRIMARY KEY NOT NULL,
    "user_id"            UUID             NOT NULL,
    "name"               varchar(30)      NOT NULL,
    "cost"               numeric(12, 2)   NOT NULL,
    "billing_period"     billing_periods  NOT NULL,
    "renewal_date"       date             NOT NULL,
    "notify_days_before" integer DEFAULT 7
);

CREATE TABLE "user_preference"
(
    "id"            UUID PRIMARY KEY NOT NULL,
    "user_id"       UUID             NOT NULL,
    "receive_email" bool             NOT NULL DEFAULT false,
    "receive_sms"   bool             NOT NULL DEFAULT false
);

CREATE UNIQUE INDEX ON "subscriptions" ("user_id", "name");

ALTER TABLE "subscriptions"
    ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "user_preference"
    ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;
