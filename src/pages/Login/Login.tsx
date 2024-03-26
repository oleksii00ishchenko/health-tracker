import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { FormValue } from 'src/models/form';

const Login = () => {
  const { register, handleSubmit } = useForm<FormValue>({ mode: 'onChange' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin: SubmitHandler<FormValue> = async (data) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input className="border-2 border-red-100" {...register('email')} />
        <input className="border-2 border-red-100" {...register('password')} />
        <input type="submit" className="block bg-red-500 p-2 text-white" title="Log In" />
      </form>
      <Link to="/signup">New? Go signup</Link>
    </div>
  );
};

export { Login };
