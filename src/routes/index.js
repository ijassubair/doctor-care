import loadable from "@loadable/component";
import Dashboard from "../pages/patient/dashboard";
const DoctorDashboard = loadable(() => import("../pages/doctor/dashboard"));
const Home = loadable(() => import("../pages/doctor/Home/Home"));

export const userRoutes = [
  {
    id: "home",
    path: "/home",
    component: <Home />,
  },
  {
    id: "dashboard",
    path: "/dashboard/*",
    component: <DoctorDashboard />,
  },
  {
    id: "p_dashboard",
    path: "patient/dashboard",
    component: <Dashboard />,
  },
];
