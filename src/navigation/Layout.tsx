import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { MdDashboard } from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { useAppDispatch } from 'src/stores/stores';
import { CustomNavLink } from './CustomNavLink';
import { IoChatbox } from 'react-icons/io5';
import { RiTimerFlashFill } from 'react-icons/ri';

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
    <div className="flex h-screen bg-blue pt-3">
      <div className="flex flex-col px-2">
        <div className="mb-5 self-center">
          <div className="size-20 rounded-full bg-red"></div>
          <h2 className="mt-2 text-white">User Name</h2>
        </div>
        <ul className="flex h-full flex-col py-5">
          <li>
            <CustomNavLink to={'/dashboard'}>
              <MdDashboard className="mr-2 size-5" /> Dashboard
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to={'/challenges'}>
              <RiTimerFlashFill className="mr-2 size-5" /> Challenges
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to={'/chat'}>
              <IoChatbox className="mr-2 size-5" /> Chat
            </CustomNavLink>
          </li>
          <li>
            <CustomNavLink to={'/profile'}>
              <CgProfile className="mr-2 size-5" /> Profile
            </CustomNavLink>
          </li>
          <li
            onClick={handleLogout}
            aria-hidden
            className="mt-auto flex cursor-pointer items-center text-gray-200 hover:text-white"
          >
            <CiLogout className="mr-2 size-5" />
            Log out
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export { Layout };
