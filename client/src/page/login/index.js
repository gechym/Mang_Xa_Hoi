import { LogoHeader } from '~/components/icons';
import { Input } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3">
          <div
            className="
                  flex items-center h-full px-20 
                  bg-gradient-to-r from-cyan-500 to-primary 
                  hover:bg-gradient-to-l 
                  transition duration-[10000]"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-4xl font-bold dark:text-textPrimaryDark text-textPrimaryLight">
                <LogoHeader className={'rounded-full w-[200px] h-[200px]'} />
              </h2>

              <p className="max-w-xl  text-4xl mt-3 font-bold text-white">
                Unlimited Connections With FaceKe
              </p>
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
                  <Input className="h-11" color="blue" label="Email" type="email" />
                </div>

                <div className="mt-6">
                  <Input color="blue" label="password" type={'password'} />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign in
                  </button>
                </div>
              </>
              <div className="flex justify-center mt-2">
                <span className="text-base text-gray-400 focus:text-primary hover:text-primary hover:underline">
                  Forgot password?
                </span>
              </div>
              <p className="mt-6 text-base text-center text-gray-400">
                Don&#x27;t have an account yet?{' '}
                <Link
                  to="/register"
                  className="text-primary focus:outline-none focus:underline hover:underline"
                >
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
