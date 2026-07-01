import { hashPassword, comparePassword } from "../utils/password";
import { generateToken } from "../utils/jwt";
import { UserRole } from "../types/auth.types";
import { prisma } from "../lib/prisma";



export async function registerUser(data: {
  fullName: string;
  email: string;
  password: string;
  role?: UserRole;
}) {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const passwordHash = await hashPassword(data.password);

  const user = await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      passwordHash,
      role: data.role || UserRole.ADVISOR,
    },
  });
  
  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role as UserRole,
  });

  return {
    user,
    token,
  };
}
export async function loginUser(data: {
  email: string;
  password: string;
}) {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isValid = await comparePassword(
    data.password,
    user.passwordHash
  );

  if (!isValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken({
    userId: user.id,
    email: user.email,
    role: user.role as UserRole,
  });

  return {
    token,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
}