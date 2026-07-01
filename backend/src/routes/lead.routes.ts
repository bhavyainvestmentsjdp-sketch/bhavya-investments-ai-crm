import { Router } from "express";

import {
  createLeadHandler,
  listLeads,
  getLead,
  updateLeadHandler,
  deleteLeadHandler,
} from "../controllers/lead.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

// Create Lead
router.post(
  "/",
  authenticate,
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  createLeadHandler
);

// Get All Leads
router.get(
  "/",
  authenticate,
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  listLeads
);

// Get Single Lead
router.get(
  "/:id",
  authenticate,
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  getLead
);

// Update Lead
router.put(
  "/:id",
  authenticate,
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  updateLeadHandler
);

// Delete Lead
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteLeadHandler
);

export default router;