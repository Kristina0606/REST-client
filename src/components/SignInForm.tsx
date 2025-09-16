import { useCallback, type FC } from 'react';
import { useForm } from 'react-hook-form';
import type { FormValues } from '../types/interfaces';
import { useDispatch } from 'react-redux';
import { isSignUpToggle } from '../store/slices/isSignUpSlice';

const SignInForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: 'onBlur' });

  const onSubmit = useCallback(async (data: any) => {
    console.log(data);
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <hr className="border-[#665f50] border-t h-px my-2 opacity-50"></hr>
        <legend className="font-sans text-center font-bold text-2xl text-[#9977fb] hover:text-[#9977fb] transition">
          Sign In
        </legend>
        <fieldset className="flex flex-col gap-2 ">
          <div>
            <legend className="text-[#665f50]">Enter your info:</legend>
          </div>
          <label htmlFor="email" className="text-[#665f50]">
            Email:
            <input
              type="text"
              placeholder="example@domain.com"
              {...register('email', {
                required: '*The field must be filled in.',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: '*invalid email format',
                },
              })}
              className="border m-1 p-1 w-70 rounded-lg border-[#a89c83] focus:border-[#9977fb] focus:outline-none duration-300"
            />
            <div>
              {errors?.email && (
                <p className="text-wrap text-[#9977fb] text-xs">
                  {errors.email.message || 'error!'}
                </p>
              )}
            </div>
          </label>
          <label htmlFor="password" className="text-[#665f50]">
            Password:
            <input
              type="password"
              id="password"
              {...register('password', {
                required: '*The field must be filled in.',
                validate: (value) => {
                  if (
                    !/[A-Z]/.test(value) ||
                    !/[a-z]/.test(value) ||
                    !/\d/.test(value) ||
                    !/[!@#$%^&*()]/.test(value)
                  ) {
                    return '*the password should consist of 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character';
                  }
                },
              })}
              placeholder="Enter the password..."
              className="border m-1 p-1 rounded-lg border-[#a89c83] focus:border-[#9977fb] focus:outline-none duration-300"
            />
            {errors?.password && (
              <p className="text-wrap text-[#9977fb] text-xs">
                {errors?.password?.message}
              </p>
            )}
          </label>
        </fieldset>
        <hr className="border-[#665f50] border-t h-px my-4 opacity-50"></hr>
        <input
          type="submit"
          value="Submit"
          className="bg-[#9977fb] m-1 cursor-pointer hover:bg-[#523f8a] text-white font-medium py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        />
      </form>
      <div className="mt-2 text-[#665f50] flex gap-1">
        <p>Don't have an account?</p>
        <div
          className="cursor-pointer text-[#9977fb]"
          onClick={() => dispatch(isSignUpToggle())}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
