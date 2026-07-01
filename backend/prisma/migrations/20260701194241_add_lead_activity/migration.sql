-- CreateEnum
CREATE TYPE "public"."ActivityType" AS ENUM ('NOTE', 'CALL', 'WHATSAPP', 'EMAIL', 'MEETING', 'FOLLOW_UP', 'DOCUMENT', 'STATUS_CHANGE');

-- CreateTable
CREATE TABLE "public"."LeadActivity" (
    "id" TEXT NOT NULL,
    "leadId" TEXT NOT NULL,
    "userId" TEXT,
    "type" "public"."ActivityType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "nextFollowUp" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LeadActivity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."LeadActivity" ADD CONSTRAINT "LeadActivity_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "public"."Lead"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."LeadActivity" ADD CONSTRAINT "LeadActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
