import { Router } from "express";
import { listUsers } from "../controllers/user.controller";
import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  listUsers
);

export default router;