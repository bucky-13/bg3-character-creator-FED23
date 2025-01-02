import { createHashRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Creator } from './pages/Creator';
import { ViewCharacters } from './pages/ViewCharacters';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/creator', element: <Creator></Creator> },
      { path: '/view', element: <ViewCharacters></ViewCharacters> },
    ],
  },
]);