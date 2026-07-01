import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
]);