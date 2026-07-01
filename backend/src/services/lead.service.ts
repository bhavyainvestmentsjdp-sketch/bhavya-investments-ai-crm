import { prisma } from "../lib/prisma";

export async function createLead(data: {
  fullName: string;
  mobile: string;
  email?: string;
  city?: string;
  source: any;
  serviceInterested: any;
  notes?: string;
  assignedToId?: string;
}) {
  return prisma.lead.create({
    data,
  });
}

export async function getAllLeads() {
  return prisma.lead.findMany({
    include: {
      assignedTo: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getLeadById(id: string) {
  return prisma.lead.findUnique({
    where: { id },
    include: {
      assignedTo: true,
    },
  });
}

export async function updateLead(id: string, data: any) {
  return prisma.lead.update({
    where: { id },
    data,
  });
}

export async function deleteLead(id: string) {
  return prisma.lead.delete({
    where: { id },
  });
}