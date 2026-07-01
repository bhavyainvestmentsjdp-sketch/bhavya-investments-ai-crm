import { Router } from "express";

import {
  register,
  login,
  me,
  admin,
} from "../controllers/auth.controller";

import { authenticate } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", authenticate, me);

router.get(
  "/admin",
  authenticate,
  authorize("ADMIN"),
  admin
);

export default router;