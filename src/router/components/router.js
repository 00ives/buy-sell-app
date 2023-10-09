import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Root } from '../pages/Root/Root';
import { About } from '../pages/About';
import { ErrorPage } from './ErrorPage';
import { Components } from '../pages/Components';

/**https://reactrouter.com/en/main/utils/create-routes-from-elements */
export const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route path='/' element={<Root />}>
  //     <Route path='buy-sell' element={<About />} />
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
          path: 'about',
          element: <About />,
        },
      ],
    },

    {
      path: '/components',
      element: <Components />,
      children: [
        {
          // path: 'buy-sell/:test',
          path: 'buy-sell',
          element: <About />,
        },
      ],
    },
  ]
);
