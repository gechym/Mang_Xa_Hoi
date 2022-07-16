import { LogoHeader } from '~/components/icons';
import { Button, Input } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '~/redux/thunk/userThunk';
import { userSelecter } from '~/redux/selecter';
import toast from 'react-hot-toast';

function Login() {
  const [email, setEmail] = useState('nguyenducbao166@gmail.com  ');
  const [password, setPassword] = useState('123456789');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector(userSelecter);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      loginUser({ email, password }, () => {
        toast.success('Đăng nhập thành công , bạn sẽ được chuyển đến trang bản tin 😘');
        setTimeout(() => {
          toast.dismiss();
          navigate('/');
        }, 2000);
      }),
    );
  };

  const handleKeyPress = (event) => {
    toast(event.key);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <div
            className="
                  flex items-center h-full px-20 
                  animate-bgGradient
                  bg-gradient-to-r from-cyan-500 to-primary"
          >
            <div className="flex items-center gap-2">
              <p className="text-4xl font-bold dark:text-textPrimaryDark text-textPrimaryLight">
                <LogoHeader className={'rounded-full w-[200px] h-[200px]'} />
              </p>

              <p className="max-w-xl  text-4xl mt-3 font-bold text-white">Unlimited Connections With FaceKe</p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-8 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center flex flex-col items-center">
              <LogoHeader className={'rounded-full text-primary h-[100px] w-[100px]'} />

              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <>
                <div>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11"
                    color="blue"
                    label="Email"
                    type="email"
                  />
                </div>

                <div className="mt-6">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    color="blue"
                    label="password"
                    type={'password'}
                  />
                </div>

                <span className="text-[#E41E3F] text-center text-sm">{error}</span>

                <div className="mt-2">
                  <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    onKeyPress={handleKeyPress}
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
              </>
              <div className="flex justify-center mt-2">
                <span className="text-base text-gray-400 focus:text-primary hover:text-primary hover:underline">
                  Forgot password?
                </span>
              </div>
              <p className="mt-6 text-base text-center text-gray-400">
                Don&#x27;t have an account yet?{' '}
                <Link to="/register" className="text-primary focus:outline-none focus:underline hover:underline">
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
