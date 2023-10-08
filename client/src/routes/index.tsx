import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import SignupForm from '../pages/Signup';
import SigninForm from '../pages/Signin';
import OnlyUser from '../pages/OnlyUser';
import Main from '../pages/Main';

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
      {
        path: '/onlyuser',
        element: <OnlyUser />,
      },
    ],
  },
]);

export default router;
