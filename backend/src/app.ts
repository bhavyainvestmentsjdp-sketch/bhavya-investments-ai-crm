import express from "express";
import cors from "cors";

import routes from "./routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import leadRoutes from "./routes/lead.routes";

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/leads", leadRoutes);

// Root API
app.use("/api", routes);

// Health Check
app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Bhavya Investments AI CRM Backend Running",
  });
});

export default app;