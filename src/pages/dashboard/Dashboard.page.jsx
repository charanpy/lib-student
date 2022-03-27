import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../../components/dashboard/Dashboard.component';
import Container from '../../components/shared/container/Container';

const DashboardPage = () => {
  return (
    <Container header='Dashboard'>
      <Dashboard />
      <Outlet />
    </Container>
  );
};

export default DashboardPage;
