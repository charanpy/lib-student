import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PageTransition from "./PageTransition";
import FullPageLoader from "../components/shared/loader/FullPageLoader.component";
import Home from "../pages/home/Home.page";
import ForgetPasswordComponent from "../components/forget-password/ForgetPassword.component";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard.page"));
const Login = lazy(() => import("../pages/login/Login.page"));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<FullPageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/login"
            element={
              <PageTransition>
                <Login />
              </PageTransition>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              </PrivateRoute>
            }
          />
          <Route path="/forgetpassword" element={<ForgetPasswordComponent />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
