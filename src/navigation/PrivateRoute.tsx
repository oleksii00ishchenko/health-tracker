import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { Layout } from 'src/navigation/Layout';

export const PrivateRoute = () => {
  const { checkAuth } = useAuth();
  return checkAuth() ? <Layout /> : <Navigate to="" replace />;
};
