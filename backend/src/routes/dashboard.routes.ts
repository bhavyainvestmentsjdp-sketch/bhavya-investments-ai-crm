import { Router } from "express";

import {
  dashboardStats,
  recentLeads,
  leadStatusSummary,
  leadSourceSummary,
} from "../controllers/dashboard.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.use(authenticate);

router.get(
  "/stats",
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  dashboardStats
);

router.get(
  "/recent",
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  recentLeads
);

router.get(
  "/status-summary",
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  leadStatusSummary
);

router.get(
  "/source-summary",
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  leadSourceSummary
);

export default router;