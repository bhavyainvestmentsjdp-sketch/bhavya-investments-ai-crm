import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";

import {
  createActivity,
  getLeadActivities,
} from "../services/activity.service";

export async function createActivityHandler(
  req: AuthRequest,
  res: Response
) {
  try {
    const activity = await createActivity({
      ...req.body,
      userId: req.user?.userId,
    });

    res.status(201).json({
      success: true,
      activity,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function listLeadActivities(
  req: AuthRequest,
  res: Response
) {
  try {
    const activities = await getLeadActivities(
      String(req.params.leadId)
    );

    res.json({
      success: true,
      activities,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}