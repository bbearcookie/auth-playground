import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import router from '@/routes/router';

function App() {
  return (
    <AuthProvider>
      {import.meta.env.VITE_A}
      {import.meta.env.VITE_B}
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
