import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Root from '@/layouts/Root';
import Authorization from '@/layouts/Authorization';
import NotAuthorization from '@/layouts/NotAuthorization';
import SignupForm from '@/pages/Signup';
import SigninForm from '@/pages/Signin';
import OnlyUser from '@/pages/OnlyUser';
import OnlyGuest from '@/pages/OnlyGuest';
import Main from '@/pages/Main';
import S3 from '@/pages/S3';
import { getAnalytics, logEvent } from 'firebase/analytics';

const defaultRoute: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/s3',
    element: <S3 />,
  },
  {
    path: '/signup',
    element: <SignupForm />,
  },
  {
    path: '/signin',
    element: <SigninForm />,
  },
];

const authorizationRoute: RouteObject[] = [
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

const notAuthorizationRoute: RouteObject[] = [
  {
    path: '/',
    element: <NotAuthorization />,
    children: [
      {
        path: '/onlyguest',
        element: <OnlyGuest />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      ...defaultRoute,
      ...authorizationRoute,
      ...notAuthorizationRoute,
    ],
  },
]);

// router.subscribe((location) => {
//   const analytics = getAnalytics();
//   // console.log(analytics);

//   logEvent(analytics, 'screen_view', { value: location.location.pathname });

//   console.log('구독:' + location.location.pathname);
// });

export default router;
