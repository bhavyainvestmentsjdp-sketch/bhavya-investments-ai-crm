import { prisma } from "../lib/prisma";

export async function getAllUsers() {
  return prisma.user.findMany({
    orderBy: {
      fullName: "asc",
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
    },
  });
}