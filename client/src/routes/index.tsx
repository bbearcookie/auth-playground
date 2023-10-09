import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Root from '../layouts/Root';
import Authorization from '../layouts/Authorization';
import SignupForm from '../pages/Signup';
import SigninForm from '../pages/Signin';
import OnlyUser from '../pages/OnlyUser';
import Main from '../pages/Main';

const authorization: RouteObject[] = [
  {
    path: '/',
    element: <Authorization />,
    children: [
      {
        path: '/onlyuser',
        element: <OnlyUser />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/signup',
        element: <SignupForm />,
      },
      {
        path: '/signin',
        element: <SigninForm />,
      },
      ...authorization,
    ],
  },
]);

export default router;
