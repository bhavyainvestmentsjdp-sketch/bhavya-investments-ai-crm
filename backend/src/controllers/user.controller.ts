import { Request, Response } from "express";
import { getAllUsers } from "../services/user.service";

export async function listUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsers();

    res.json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}