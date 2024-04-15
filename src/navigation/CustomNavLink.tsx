import { useResolvedPath, useMatch, NavLink, NavLinkProps } from 'react-router-dom';

const CustomNavLink = ({ children, to, ...props }: NavLinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={`rounded-lg text-gray-200 hover:text-white ${match ? 'bg-light-blue text-white' : ''}`}>
      <NavLink className="flex items-center p-2" to={to} {...props}>
        {children}
      </NavLink>
    </div>
  );
};

export { CustomNavLink };
