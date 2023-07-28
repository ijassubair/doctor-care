import loadable from "@loadable/component";
const Dashboard = loadable(() => import("../pages/doctor/dashboard"));
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
    component: <Dashboard />,
  },
];
