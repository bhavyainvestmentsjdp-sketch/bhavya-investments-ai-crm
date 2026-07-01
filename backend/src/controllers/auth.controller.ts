import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  registerUser,
  loginUser,
} from "../services/auth.service";

export async function register(req: Request, res: Response) {
  try {
    const result = await registerUser(req.body);

    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
export async function login(req: Request, res: Response) {
  try {
    const result = await loginUser(req.body);

    res.json({
      success: true,
      ...result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}


export async function me(req: AuthRequest, res: Response) {
  res.json({
    success: true,
    user: req.user,
  });
}
export async function admin(req: AuthRequest, res: Response) {
  res.json({
    success: true,
    message: "Welcome Admin",
    user: req.user,
  });
}