import leadRoutes from "./lead.routes";
import { Router } from "express";

import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import dashboardRoutes from "./dashboard.routes";
import activityRoutes from "./activity.routes";
const router = Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Bhavya Investments AI CRM API V1",
  });
});

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/leads", leadRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/activities", activityRoutes);
export default router;