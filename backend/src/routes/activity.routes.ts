import { Router } from "express";

import {
  createActivityHandler,
  listLeadActivities,
} from "../controllers/activity.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  createActivityHandler
);

router.get(
  "/:leadId",
  authenticate,
  authorize("ADMIN", "ADVISOR", "EMPLOYEE"),
  listLeadActivities
);

export default router;