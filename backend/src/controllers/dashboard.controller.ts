import { Request, Response } from "express";

import {
  getDashboardStats,
  getRecentLeads,
  getLeadStatusSummary,
  getLeadSourceSummary,
} from "../services/dashboard.service";

export async function dashboardStats(req: Request, res: Response) {
  try {
    const stats = await getDashboardStats();

    res.json({
      success: true,
      stats,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function recentLeads(req: Request, res: Response) {
  try {
    const leads = await getRecentLeads();

    res.json({
      success: true,
      leads,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function leadStatusSummary(req: Request, res: Response) {
  try {
    const data = await getLeadStatusSummary();

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function leadSourceSummary(req: Request, res: Response) {
  try {
    const data = await getLeadSourceSummary();

    res.json({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}