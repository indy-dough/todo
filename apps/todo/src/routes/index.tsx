import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootRoute from './root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
