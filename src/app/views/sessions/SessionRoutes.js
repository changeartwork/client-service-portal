import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFound = Loadable(lazy(() => import('./NotFound')));
const ForgotPassword = Loadable(lazy(() => import('./ForgotPassword')));
const JwtLogin = Loadable(lazy(() => import('./JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('./JwtRegister')));

const sessionRoutes = [
  { path: '/csp/session/signup', element: <JwtRegister /> },
  { path: '/csp/session/signin', element: <JwtLogin /> },
  { path: '/csp/session/forgot-password', element: <ForgotPassword /> },
  { path: '/csp/session/404', element: <NotFound /> },
];

export default sessionRoutes;
