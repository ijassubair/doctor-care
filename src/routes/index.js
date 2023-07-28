import loadable from "@loadable/component";

const Dashboard = loadable(() => import("../pages/doctor/dashboard"));

export const userRoutes = [
  {
    id: "dashboard",
    path: "/dashboard/*",
    component: <Dashboard />,
  },
];
