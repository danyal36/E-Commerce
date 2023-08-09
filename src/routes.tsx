// import { Navigate } from 'react-router-dom';
import LandingPage from './routes/home';
import NotFoundPage from './components/errorPages/NotFoundPage';

const routes = (user: boolean) => [
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <LandingPage />,
      }
    ],
  },
  { path: '*', element: <NotFoundPage /> },
];

export default routes;
