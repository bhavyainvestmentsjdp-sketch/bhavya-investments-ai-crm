-- CreateEnum
CREATE TYPE "public"."LeadStatus" AS ENUM ('NEW', 'CONTACTED', 'FOLLOW_UP', 'MEETING', 'INTERESTED', 'CLOSED_WON', 'CLOSED_LOST');

-- CreateEnum
CREATE TYPE "public"."LeadSource" AS ENUM ('WEBSITE', 'FACEBOOK', 'INSTAGRAM', 'WHATSAPP', 'REFERRAL', 'WALK_IN', 'PROPERTY', 'MANUAL');

-- CreateEnum
CREATE TYPE "public"."LeadService" AS ENUM ('MUTUAL_FUND', 'HEALTH_INSURANCE', 'LIC', 'TERM_INSURANCE', 'PROPERTY', 'FINANCIAL_PLANNING', 'LOAN', 'OTHER');

-- CreateTable
CREATE TABLE "public"."Lead" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT,
    "city" TEXT,
    "source" "public"."LeadSource" NOT NULL DEFAULT 'MANUAL',
    "serviceInterested" "public"."LeadService" NOT NULL,
    "status" "public"."LeadStatus" NOT NULL DEFAULT 'NEW',
    "notes" TEXT,
    "assignedToId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Lead" ADD CONSTRAINT "Lead_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
