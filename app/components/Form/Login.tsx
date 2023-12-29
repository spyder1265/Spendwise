"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Label, TextInput, Tooltip } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff, HiKey, HiMail } from "react-icons/hi";
import * as yup from "yup";

interface ILogin {
  onSubmit: () => void;
}

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  })
  .required();

// eslint-disable-next-line react/prop-types
const Login: React.FC<ILogin> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    setIsLoading(true);
    if (!errors) {
      await onSubmit();
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex w-full flex-col gap-4"
    >
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email"
            color={errors.email && "failure"}
            value="Email"
          />
        </div>
        <TextInput
          id="email"
          icon={HiMail}
          disabled={isLoading}
          required
          autoComplete="email"
          className="relative w-full"
          placeholder="name@company.com"
          color={errors.email && "failure"}
          {...register("email")}
          helperText={
            errors.email && (
              <>
                <span className="font-medium">invalid</span> Email!
              </>
            )
          }
        />
      </div>

      {/* password input */}

      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
            color={errors.password && "failure"}
            value="Password"
          />
        </div>
        <div className="relative flex w-full flex-col gap-4">
          <TextInput
            id="password"
            icon={HiKey}
            disabled={isLoading}
            type={show ? "text" : "password"}
            className="w-full outline-none focus:border-cyan-900 focus:ring-cyan-900"
            placeholder="* * * * * * * *"
            color={errors.email ? "failure" : "gray"}
            {...register("password")}
            helperText={
              errors.password ? (
                <span className="text-red-500">
                  <span className="font-medium">invalid</span> Password!
                </span>
              ) : (
                <span className="text-sm text-gray-500">
                  Password must be at least 8 characters long
                </span>
              )
            }
          />
          <div className="absolute right-2 mt-3 place-self-center justify-self-center">
            <Tooltip
              content={show ? "Hide" : "Show"}
              placement="right"
              className="ml-1"
            >
              <button
                type="button"
                disabled={isLoading}
                className="text-gray-900 focus:outline-none dark:text-gray-400"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <HiEyeOff className="h-5 w-5" />
                ) : (
                  <HiEye className="h-5 w-5" />
                )}
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      {/* dont have an account and forgot password */}
      <div className="flex w-full">
        <div className="flex w-full items-center justify-center">
          <a
            href="auth?forgot-password"
            className="place-self-start text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex w-full items-center justify-center">
          <a
            href="auth?register"
            className="text-sm font-medium  text-blue-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Don't have an account?
          </a>
        </div>
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
        >
          Login
        </button>
      </div>

      {/* divider  */}
      <div className="flex items-center justify-center">
        <div className="h-px w-full bg-gray-300 dark:bg-gray-500"></div>
        <div className="mx-2 text-sm text-gray-400 dark:text-gray-500">Or</div>
        <div className="h-px w-full bg-gray-300 dark:bg-gray-500"></div>
      </div>

      {/* Oauth buttons */}
      <div className="flex w-full flex-col gap-4 md:flex-row md:gap-2">
        <Button
          color="dark"
          disabled={isLoading}
          className="inline-flex w-full items-center"
        >
          <FaApple className="h-5 w-5" />
          <span className=" ml-2 text-sm font-medium text-white dark:text-gray-400">
            Apple
          </span>
        </Button>
        <Button
          color="dark"
          disabled={isLoading}
          className="inline-flex w-full items-center"
        >
          <FcGoogle className="h-5 w-5" />
          <span className=" ml-2 text-sm font-medium text-white dark:text-gray-400">
            Google
          </span>
        </Button>
      </div>
    </form>
  );
};
export default Login;
