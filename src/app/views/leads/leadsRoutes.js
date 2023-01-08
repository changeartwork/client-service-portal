import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Analytics')));
const CreateQuote = Loadable(lazy(() => import('./CreateQuote')));

const leadsRoutes = [
  { path: '/csp/leads/list', element: <Analytics />, auth: authRoles.admin },
  { path: '/csp/quote/create', element: <CreateQuote />, auth: authRoles.admin },
];

export default leadsRoutes;
