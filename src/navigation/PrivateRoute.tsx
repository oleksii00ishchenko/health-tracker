import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

export const PrivateRoute = () => {
  const { checkAuth } = useAuth();
  return checkAuth() ? <Outlet /> : <Navigate to="" replace />;
};
