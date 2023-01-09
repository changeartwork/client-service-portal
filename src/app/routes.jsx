import AuthGuard from 'app/auth/AuthGuard';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import leadsRoutes from 'app/views/leads/leadsRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';
import jobsRoutes from './views/jobs/jobsRoutes';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...leadsRoutes, ...jobsRoutes]
  },
  ...sessionRoutes,
  { path: '/csp', element: <Navigate to="/csp/dashboard/default" /> },
  { path: '/csp/*', element: <NotFound /> },
];

export default routes;
