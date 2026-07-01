import { Request, Response } from "express";

import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
} from "../services/lead.service";

export async function createLeadHandler(req: Request, res: Response) {
  try {
    const lead = await createLead(req.body);

    res.status(201).json({
      success: true,
      lead,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function listLeads(req: Request, res: Response) {
  try {
    const leads = await getAllLeads();

    res.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getLead(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const lead = await getLeadById(id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.json({
      success: true,
      lead,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function updateLeadHandler(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    const lead = await updateLead(id, req.body);

    res.json({
      success: true,
      lead,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function deleteLeadHandler(req: Request, res: Response) {
  try {
    const id = String(req.params.id);

    await deleteLead(id);

    res.json({
      success: true,
      message: "Lead deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}