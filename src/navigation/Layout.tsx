import { Link, Outlet } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { useAppDispatch } from 'src/stores/stores';

const Layout = () => {
  const { logout } = useAuth();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await logout();
      dispatch({ type: 'RESET' });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="h-screen">
      <div className="h-[5%] bg-red-700">
        <h1>Hello</h1>
      </div>
      <div className="flex h-[95%]">
        <div className="bg-red-400">
          <ul>
            <li>
              <Link to={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
              <Link to={'/chat'}>Chat</Link>
            </li>
            <li>
              <Link to={'/profile'}>Profile</Link>
            </li>
            <li onClick={handleLogout} aria-hidden>
              Log out
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
