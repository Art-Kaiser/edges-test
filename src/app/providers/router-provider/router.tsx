import { createBrowserRouter } from 'react-router-dom';
import { APP_ROUTER } from '../../../shared/router/app-router.tsx';
import { EdgesPage } from '../../../pages/edges/edges-page/EdgesPage.tsx';
import { CurrentsPage } from '../../../pages/currents/currents-page/CurrentsPage.tsx';
import { HistoriesPage } from '../../../pages/histories/histories-page/HistoriesPage.tsx';

export const router = createBrowserRouter([
  {
    path: APP_ROUTER.EDGES.path,
    element: <EdgesPage />,
    errorElement: <div>ERROR</div>,
    children: [
      {
        path: APP_ROUTER.CURRENTS.path,
        element: <CurrentsPage />,
        children: [
          {
            path: APP_ROUTER.CURRENTS_TAG.path,
            element: <CurrentsPage />,
          },
        ],
      },
      {
        path: APP_ROUTER.HISTORIES.path,
        element: <HistoriesPage />,
        children: [
          {
            path: APP_ROUTER.HISTORIES_TAG.path,
            element: <HistoriesPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div>ERROR 404</div>,
  },
]);
