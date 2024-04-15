import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';
import { FieldType, FormValue } from 'src/models/form';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({ mode: 'onChange' });
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

  const borderStyle = (field: FieldType) => (errors[field] ? 'border-red' : 'border-gray-200');

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(handleSignup)} className="rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-blue text-5xl">Create Account</h1>
        <div className="my-6">
          <div className="min-h-[60px]">
            <div className={`flex items-center border-b-[1px] ${borderStyle(FieldType.email)}`}>
              <MdOutlineEmail className="text-blue mr-2 size-5" />
              <input
                className="w-96 text-lg outline-none"
                placeholder="Email"
                type="email"
                {...register('email', { required: 'Email is required' })}
              />
            </div>
            <p className="text-red">{errors[FieldType.email] ? errors[FieldType.email].message : ''}</p>
          </div>
          <div className="min-h-[60px]">
            <div className={`flex items-center border-b-[1px] ${borderStyle(FieldType.password)}`}>
              <RiLockPasswordLine className="text-blue mr-2 size-5" />
              <input
                className="w-96 text-lg outline-none"
                placeholder="Password"
                type="password"
                {...register('password', { required: 'Password is required' })}
              />
            </div>
            <p className="text-red">{errors[FieldType.password] ? errors[FieldType.password].message : ''}</p>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="adminRole" className="cursor-pointer" {...register('adminRole')} />
            <label htmlFor="adminRole" className="cursor-pointer">
              I&apos;m a coach
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="bg-blue mb-4 block w-full cursor-pointer rounded-3xl px-6 py-3 uppercase text-gray-200 hover:text-white"
          value="Sign Up"
        />
        <Link to="/" className="hover:underline">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export { Signup };
