import SignUpPage from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';

export default createBrowserRouter([
  {
    path: '/',
    element: <SignUpPage />,
  },
]);
