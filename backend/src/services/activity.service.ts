import { prisma } from "../lib/prisma";

export async function createActivity(data: any) {
  console.log("Incoming:", data);

  return prisma.leadActivity.create({
    data: {
      leadId: data.leadId,
      title: data.title,
      type: data.type,
      description: data.description,

      // sirf tab userId bhejna jab actually ho
      ...(data.userId ? { userId: data.userId } : {}),
    },
  });
}

export async function getLeadActivities(leadId: string) {
  return prisma.leadActivity.findMany({
    where: {
      leadId,
    },
    include: {
      user: {
        select: {
          id: true,
          fullName: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}