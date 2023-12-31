import { yupResolver } from "@hookform/resolvers/yup";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HiMail } from "react-icons/hi";
import OTPInput from "react-otp-input";
import * as yup from "yup";

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
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");

  const submit = async () => {
    setIsLoading(true);
    if (errors) {
      //   check if email exists in database
      //   if yes, send email and setStep to code
      //   if no, setStep to email and show error

      if (otp) {
        console.log(otp);
      }
      setStep("code");
    }
    setIsLoading(false);
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
          <form className=" flex w-full flex-col gap-4">
            <div className="flex w-full items-center justify-center text-gray-900">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputType="text"
                placeholder="*"
                inputStyle={
                  "w-[40px] h-[50px] rounded-lg border-2 transition-all duration-300 border-gray-300 outline-none mx-1"
                }
                shouldAutoFocus
                skipDefaultStyles
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
              >
                Verify
              </button>
            </div>
          </form>
        )
      )}
    </>
  );
};
export default PasswordReset;
