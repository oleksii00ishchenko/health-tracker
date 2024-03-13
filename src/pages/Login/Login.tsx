import { Link } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = async () => {
    await login();
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input type="text" name="" id="" className="border-2 border-red-100" />
        <input type="password" name="" id="" className="border-2 border-red-100" />
      </div>
      <button onClick={handleLogin} className="block bg-red-500 p-2 text-white">
        Login
      </button>
      <Link to="/signup">New? Go signup</Link>
    </div>
  );
};

export { Login };
