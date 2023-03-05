import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const ListJobs = Loadable(lazy(() => import('./ListJobs')));
const CreateJob = Loadable(lazy(() => import('./CreateJob')));

const quotesRoutes = [
  { path: '/csp/job/list', element: <ListJobs />, auth: authRoles.admin },
  { path: '/csp/job/create', element: <CreateJob />, auth: authRoles.admin },
];

export default quotesRoutes;
