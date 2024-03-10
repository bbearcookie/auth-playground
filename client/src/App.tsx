import { RouterProvider } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';
import router from '@/routes/router';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Auth Playground</title>
      </Helmet>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
