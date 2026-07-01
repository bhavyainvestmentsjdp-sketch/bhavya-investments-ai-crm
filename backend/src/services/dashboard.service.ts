import { prisma } from "../lib/prisma";

export async function getDashboardStats() {
  const [
    totalLeads,
    newLeads,
    contacted,
    followUp,
    interested,
    closedWon,
    closedLost,
  ] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "NEW" } }),
    prisma.lead.count({ where: { status: "CONTACTED" } }),
    prisma.lead.count({ where: { status: "FOLLOW_UP" } }),
    prisma.lead.count({ where: { status: "INTERESTED" } }),
    prisma.lead.count({ where: { status: "CLOSED_WON" } }),
    prisma.lead.count({ where: { status: "CLOSED_LOST" } }),
  ]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayLeads = await prisma.lead.count({
    where: {
      createdAt: {
        gte: today,
      },
    },
  });

  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);

  const monthLeads = await prisma.lead.count({
    where: {
      createdAt: {
        gte: monthStart,
      },
    },
  });

  const conversionRate =
    totalLeads === 0
      ? 0
      : Number(((closedWon / totalLeads) * 100).toFixed(2));

  return {
    totalLeads,
    newLeads,
    contacted,
    followUp,
    interested,
    closedWon,
    closedLost,
    todayLeads,
    monthLeads,
    conversionRate,
  };
}

export async function getRecentLeads() {
  return prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    include: {
      assignedTo: {
        select: {
          id: true,
          fullName: true,
        },
      },
    },
  });
}

export async function getLeadStatusSummary() {
  const result = await prisma.lead.groupBy({
    by: ["status"],
    _count: {
      status: true,
    },
  });

  return result;
}

export async function getLeadSourceSummary() {
  const result = await prisma.lead.groupBy({
    by: ["source"],
    _count: {
      source: true,
    },
  });

  return result;
}