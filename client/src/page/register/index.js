import { Link } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';

function Register() {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-primary ">
      <div
        class="
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
        <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us <span className="text-primary">FaceKe</span>
        </div>
        <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div class="mt-10">
          <div>
            <Input className="h-11" color="blue" label="Name" type="text" />
          </div>

          <div className="mt-4">
            <Input className="h-11" color="blue" label="Email" type="email" />
          </div>

          <div className="mt-4">
            <Input color="blue" label="password" type={'password'} />
          </div>

          <div className="mt-4">
            <Input color="blue" label="password configuration" type={'password'} />
          </div>
        </div>
        <Button className="mt-4" color="blue">
          Let go
        </Button>
      </div>
      <div class="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          class="
        inline-flex
        items-center
        text-gray-700
        font-medium
        text-xs text-center
      "
        >
          <span class="ml-2">
            You have an account?
            <Link to={'/login'} class="text-xs  ml-2 text-white font-semibold">
              Login here
            </Link>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Register;
