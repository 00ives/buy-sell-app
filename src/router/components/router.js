import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Root } from '../pages/Root/Root';
import { BuySell } from '../pages/BuySell';
import { ErrorPage } from './ErrorPage';

/**https://reactrouter.com/en/main/utils/create-routes-from-elements */
export const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route path='/' element={<Root />}>
  //     <Route path='buy-sell' element={<BuySell />} />
  //     <Route path='*' errorElement={<ErrorPage />} />
  //   </Route>
  // )
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          // path: 'buy-sell/:test',
          path: 'buy-sell',
          element: <BuySell />,
        },
      ],
    },
  ]
);
