import { Link, useNavigate } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { userSelecter } from '~/redux/selecter';
import { useCallback, useEffect, useState } from 'react';
import { registerUser } from '~/redux/thunk/userThunk';
import { AiOutlineLoading } from 'react-icons/ai';
import toast from 'react-hot-toast';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfig, setPasswordConfig] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector(userSelecter);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  const handleRegiser = useCallback(() => {
    dispatch(
      registerUser(
        { name, email, password, passwordConfig },
        () => {
          toast.success('Đăng ký thành công!, bạn sẽ được chuyển hướng đến kênh bản tin ngay 🥰🥰🥰');
          setTimeout(() => {
            navigate('/');
          }, 3000);
        },
        () => {
          toast(error); //FIXME: no sync error message
        },
      ),
    );
  }, [dispatch, error, email, name, password, passwordConfig]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-primary ">
      <div
        className="
      flex flex-col
      bg-white
      shadow-md
      px-4
      sm:px-6
      md:px-8
      lg:px-10
      py-8
      rounded-3xl
      w-50
      max-w-md
    "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us <span className="text-primary">FaceKe</span>
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-6">
          <div>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="h-11"
              color="blue"
              label="Name"
              type="text"
            />
          </div>

          <div className="mt-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="h-11"
              color="blue"
              label="Email"
              type="email"
            />
          </div>

          <div className="mt-4">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              color="blue"
              label="password"
              type={'password'}
            />
          </div>

          <div className="mt-4">
            <Input
              onChange={(e) => setPasswordConfig(e.target.value)}
              value={passwordConfig}
              color="blue"
              label="password configuration"
              type={'password'}
            />
          </div>
        </div>

        <span className="text-[#E41E3F] my-2 text-sm">{error}</span>

        <Button
          disabled={loading}
          onClick={handleRegiser}
          tabIndex="0"
          className={`cursor-pointer 
                    flex justify-center gap-2 
                    items-center w-full  px-4 
                    py-2 tracking-wide text-white 
                    transition-colors 
                    duration-200 transform 
                    bg-primary rounded-md ${loading ? 'opacity-70' : ''}`}
        >
          {loading ? <AiOutlineLoading className="animate-spin w-5 h-5" /> : ''}
          <span>Sign in</span>
        </Button>
      </div>
      <div className="flex justify-center items-center mt-6">
        <span
          className="
        inline-flex
        items-center
        text-gray-700
        font-medium
        text-xs text-center
      "
        >
          <span className="ml-2">
            You have an account?
            <Link to={'/login'} className="text-xs  ml-2 text-white font-semibold">
              Login here
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Register;
