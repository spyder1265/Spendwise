"use client";
import { resolveValue, Toaster, ToastIcon } from "react-hot-toast";

interface IToastProvider {}

const ToastProvider: React.FC<IToastProvider> = () => {
  return (
    <Toaster>
      {(t) => (
        <div
          className={`
          toast 
          animate__animated 
          ${
            t.visible
              ? "animate__fadeInDown animate__fast"
              : "animate__fadeOutUp"
          }
          flex
          items-center
          justify-center
          rounded-lg
          bg-white
          px-4
          py-3
          text-lg
          font-medium
          shadow-lg  
          dark:bg-gray-800
          dark:text-white 
          dark:shadow-black
          dark:ring-4
          dark:ring-gray-500
          `}
        >
          <ToastIcon toast={t} />
          <div className="ml-2 mr-6">{resolveValue(t.message, t)}</div>
        </div>
      )}
    </Toaster>
  );
};
export default ToastProvider;
