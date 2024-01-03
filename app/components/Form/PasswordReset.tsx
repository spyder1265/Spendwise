import { yupResolver } from "@hookform/resolvers/yup";
import { Statistic } from "antd";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiArrowBack } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import * as yup from "yup";
import OTPInput from "./Otp";

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 2; // 2 minutes in milliseconds

interface IPasswordReset {
  onSubmit: () => void;
}

const schema = yup
  .object({
    email: yup.string().required().email(),
  })
  .required();

// eslint-disable-next-line react/prop-types
const PasswordReset: React.FC<IPasswordReset> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [countdown, setCountdown] = useState(true);
  const [secureEmail, setSecureEmail] = useState("");

  const submit = async () => {
    setIsLoading(true);
    if (errors) {
      //   check if email exists in database
      //   if yes, send email and setStep to code
      //   if no, setStep to email and show error

      if (step === "email") {
        const email = getValues("email");
        // only show first and last letter of email and everything else after @ symbol
        const secureEmail = `${email[0]}*****${email[email.indexOf("@") - 1]}@${
          email.split("@")[1]
        }`;
        setSecureEmail(secureEmail);

        setStep("code");
      } else if (step === "code") {
        if (otp) {
          //   check if otp is correct
          //   if yes, setStep to password
          //   if no, show error

          console.log(otp);

          if (otp === "1234") {
            toast.success("Verified");
          } else {
            toast.error("Invalid OTP");
          }
        } else {
          toast.error("Invalid OTP");
        }
      }
    }

    setIsLoading(false);
  };

  const onFinish = () => {
    setCountdown(false);
  };

  return (
    <>
      {step === "email" ? (
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

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              Reset Password
            </button>
          </div>
        </form>
      ) : (
        step === "code" && (
          <form
            onSubmit={handleSubmit(submit)}
            className=" flex w-full flex-col gap-4"
          >
            <div className="flex w-full items-center justify-center text-gray-900">
              <OTPInput
                numInputs={4}
                onChange={(otp) => setOtp(otp.toString())}
                inputStyle="w-12 h-12 rounded-lg border-2 disabled:opacity-40 text-center border-blue-500 focus:border-4 focus:border-blue-600 focus:ring-blue-600"
                containerStyle="flex w-full items-center justify-center gap-4"
                inputType="number"
                value={otp}
                shouldAutoFocus
                skipDefaultStyles
                renderInput={(props, index) => (
                  <input
                    disabled={isLoading}
                    id={"otp-field" + (index + 1).toString()}
                    required
                    {...props}
                  />
                )}
              />
            </div>
            <div className="flex w-full items-center justify-center">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Enter the 4-digit code sent to your
                <span className="font-medium"> {secureEmail}</span>
              </p>
            </div>
            <div className="flex w-full items-center justify-center">
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-300">
                <span>Didn't recieve the code? </span>
                {countdown ? (
                  <Countdown
                    value={deadline}
                    onFinish={onFinish}
                    valueStyle={{
                      color: "rgb(107 114 128 / var(--tw-text-opacity))",
                      fontSize: "0.875rem",
                      lineHeight: "0.75rem",
                    }}
                  />
                ) : (
                  <a
                    href="auth?register"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Resend
                  </a>
                )}
              </span>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 disabled:opacity-70 "
              >
                Verify
              </button>
            </div>
            <div className="flex w-full items-center justify-center">
              <button
                type="button"
                onClick={() => setStep("email")}
                disabled={isLoading}
                className="inline-flex items-center justify-center justify-self-center rounded-lg  text-center text-base font-medium text-primary-500 hover:text-primary-600 focus:ring-0 disabled:opacity-70 "
              >
                <BiArrowBack className="mr-1" />
                <span>Go back</span>
              </button>
            </div>
          </form>
        )
      )}
    </>
  );
};
export default PasswordReset;
