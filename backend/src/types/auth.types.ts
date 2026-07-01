export enum UserRole {
  ADMIN = "ADMIN",
  ADVISOR = "ADVISOR",
  EMPLOYEE = "EMPLOYEE",
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
}