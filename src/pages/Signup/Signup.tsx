import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { FormValue } from 'src/models/form';

const Signup = () => {
  const { register, handleSubmit } = useForm<FormValue>({ mode: 'onChange' });
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSignup: SubmitHandler<FormValue> = async (data) => {
    try {
      await signup(data.email, data.password, data.adminRole);
      navigate('/dashboard');
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(handleSignup)}>
        <input className="border-2 border-red-100" {...register('email')} />
        <input className="border-2 border-red-100" {...register('password')} />
        <input type="checkbox" {...register('adminRole')} />
        <input type="submit" className="block bg-red-500 p-2 text-white" title="Sign Up" />
      </form>
      <Link to="/">Already have an account?</Link>
    </div>
  );
};

export { Signup };
