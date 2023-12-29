//disable eslint for entire file

import Image from "next/image";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="animate__animated animate__fadeInLeft my-10 flex w-full items-start md:hidden lg:col-span-5 lg:mt-0"
        >
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            width="500"
            height="500"
            priority
            className="h-auto w-auto"
          />
        </div>

        {/* mobile text */}

        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="animate__animated animate__fadeInUp  mr-auto block place-self-center md:hidden lg:col-span-7"
        >
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Payments tool for software companies
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#start"
            className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          >
            Get started
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#sales"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>

        {/* desktop text */}
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="animate__animated animate__fadeInLeft mr-auto hidden place-self-center md:block lg:col-span-7"
        >
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Payments tool for software companies
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="auth?register"
            className="mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
          >
            Get started
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#sales"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="animate__animated animate__fadeInRight hidden lg:col-span-5 lg:mt-0 lg:flex"
        >
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            width="500"
            height="500"
            priority
            className="h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
