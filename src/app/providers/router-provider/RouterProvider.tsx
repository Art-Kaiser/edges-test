import { RouterProvider as ReactRouterProvider } from 'react-router-dom';

import { router } from './router.tsx';

const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};

export { RouterProvider };
