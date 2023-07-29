import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { lazy } from "react";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { userRoutes } from "./routes/index";
import NoMatch from "./pages/noMatch";

const SignIn = lazy(() => import("./pages/signIn"));
const SignUp = lazy(() => import("./pages/signUp"));
const ChatBot = lazy(() => import("./pages/chatBot"));

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          {userRoutes?.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={route.component}
              />
            );
          })}
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route
          path="/sign-in"
          element={<PublicRoute component={SignIn} restricted={true} />}
        />

        <Route
          path="sign-up"
          element={<PublicRoute component={SignUp} restricted={true} />}
        />

        <Route
          path="chat-bot"
          element={<PublicRoute component={ChatBot} restricted={true} />}
        />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
