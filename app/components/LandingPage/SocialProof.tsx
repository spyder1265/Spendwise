"use client";
import CountUp from "react-countup";

interface ISocialProof {}

const SocialProof: React.FC<ISocialProof> = () => {
  return (
    <div className=" border-b bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <dl className="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 inline-flex items-center text-3xl font-extrabold md:text-4xl">
              <CountUp end={73} duration={3} />
              M+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              developers
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
              <CountUp end={1} duration={5} />
              B+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              contributors
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl font-extrabold md:text-4xl">
              <CountUp end={4} duration={6} />
              M+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              organizations
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
export default SocialProof;
