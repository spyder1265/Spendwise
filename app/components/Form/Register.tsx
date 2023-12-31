"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Checkbox, Label, TextInput, Tooltip } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiEye, HiEyeOff, HiKey, HiMail } from "react-icons/hi";
import * as yup from "yup";

interface IRegister {
  onSubmit: () => void;
}

const schema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
    verifyPassword: yup
      .string()
      .required()
      .min(8)
      .oneOf([yup.ref("password"), ""]),
    agree: yup
      .boolean()
      .oneOf([true], "Please agree to the terms and conditions"),
    // promotional offers checkbox
    promotion: yup.boolean(),
  })
  .required();

// eslint-disable-next-line react/prop-types
const Register: React.FC<IRegister> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [show, setShow] = useState(false);
  const [showVerified, setShowVerified] = useState(false);
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
      <div className="inline-flex items-center gap-4">
        {/* first name */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="firstname"
              color={errors.firstname && "failure"}
              value="First Name"
            />
          </div>
          <TextInput
            id="firstname"
            icon={HiMail}
            disabled={isLoading}
            required
            autoComplete="firstname"
            className="w-full outline-none focus:border-cyan-900 focus:ring-cyan-900"
            placeholder="John"
            color={errors.firstname && "failure"}
            {...register("firstname")}
            helperText={
              errors.firstname && (
                <>
                  <span className="font-medium">
                    {errors?.firstname?.message}
                  </span>
                </>
              )
            }
          />
        </div>

        {/* last name */}
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="lastname"
              color={errors.lastname && "failure"}
              value="Last Name"
            />
          </div>
          <TextInput
            id="lastname"
            icon={HiMail}
            disabled={isLoading}
            required
            autoComplete="lastname"
            className="w-full outline-none focus:border-cyan-900 focus:ring-cyan-900"
            placeholder="Doe"
            color={errors.lastname && "failure"}
            {...register("lastname")}
            helperText={
              errors.lastname && (
                <>
                  <span className="font-medium">
                    {errors?.lastname?.message}
                  </span>
                </>
              )
            }
          />
        </div>
      </div>

      {/* email */}
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
          className="w-full outline-none focus:border-cyan-900 focus:ring-cyan-900"
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
              errors.password && (
                <span className="text-red-500">
                  <span className="font-medium">invalid</span> Password!
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

      {/* verify password input */}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="verifyPassword"
            color={errors.verifyPassword && "failure"}
            value="Verify Password"
          />
        </div>
        <div className="relative flex w-full flex-col gap-4">
          <TextInput
            id="verifyPassword"
            icon={HiKey}
            disabled={isLoading}
            type={showVerified ? "text" : "password"}
            className="w-full outline-none focus:border-cyan-900 focus:ring-cyan-900"
            placeholder="* * * * * * * *"
            color={errors.email ? "failure" : "gray"}
            {...register("verifyPassword")}
            helperText={
              errors.verifyPassword ? (
                <span className="text-red-500">
                  <span className="font-medium">Passwords do not match!</span>
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
                onClick={() => setShowVerified(!show)}
              >
                {showVerified ? (
                  <HiEyeOff className="h-5 w-5" />
                ) : (
                  <HiEye className="h-5 w-5" />
                )}
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* terms and conditions */}
      <div className="mt-2 flex flex-col gap-2">
        <div className="mt-2 flex items-center gap-2">
          <Checkbox
            id="agree"
            color={"blue"}
            {...register("agree")}
            className={
              errors.agree && "ring-1 ring-red-500 focus:outline-red-500"
            }
          />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#terms&conditions"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        {/* error msg */}
        {errors.agree && (
          <span className="text-red-500">
            <span className="text-sm">
              Please agree to the terms and conditions
            </span>
          </span>
        )}
      </div>

      {/* Promotional offer mails */}
      <div className="flex items-center gap-2">
        <Checkbox id="promotion" color={"blue"} {...register("promotion")} />
        <Label htmlFor="promotion">I want to get promotional offers</Label>
      </div>

      {/* already have an account*/}
      <div className="flex w-full items-center justify-end">
        <span className="text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="auth?login"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Sign in
          </a>
        </span>
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
        >
          Register
        </button>
      </div>
    </form>
  );
};
export default Register;
