import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Dashboard from '../pages/dashboard/Dashboard.page';
import Home from '../pages/home/Home.page';
import Login from '../pages/login/Login.page';
import PrivateRoute from './PrivateRoute';
import PageTransition from './PageTransition';

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path='/'
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path='/login'
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <PageTransition>
                <Dashboard />
              </PageTransition>
            </PrivateRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
