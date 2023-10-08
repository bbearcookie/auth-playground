import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import SignupForm from '../pages/Signup';
import SigninForm from '../pages/Signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <div>Hello Main Page</div>,
      },
      {
        path: '/signup',
        element: <SignupForm />,
      },
      {
        path: '/signin',
        element: <SigninForm />,
      },
    ],
  },
]);

export default router;
