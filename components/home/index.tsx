import React from 'react';

import ModelsLogo from '@components/home/models';
import Features from '@components/home/features';
import SubscribePage from '@components/home/subscribe';
import HeroPage from '@components/home/hero';
import FooterPage from '@components/layout/footer';

export default function HomePage({ data }) {
  return (
    <section className="mx-auto h-full max-w-6xl">
      <div className="pb-10 pt-20 dark:text-white">
        <HeroPage data={data} />

        <div className="mt-14 ">
          <div className="bottom-0 z-0 w-full bg-[url('/looper-pattern.svg')] bg-left bg-no-repeat">
            <div className="flex w-full items-center justify-center">
              <div className="max-w-4xl">
                <img
                  alt=""
                  className="w-full rounded-lg border shadow-lg"
                  src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
                />
              </div>
            </div>
            <div className="flex-1">
              <Features data={data} />
            </div>
            <div className="h-8" />
          </div>
        </div>

        <ModelsLogo data={data} />

        <section>
          <div className="mx-auto gap-12 overflow-hidden py-28 text-gray-600 md:flex">
            <div className="max-w-xl flex-none space-y-5">
              <div className="inline-flex items-center gap-x-6 rounded-full border p-1 pr-6 text-sm font-medium duration-150 dark:border-gray-500 dark:text-white">
                <span className="inline-block rounded-full bg-indigo-600 px-3 py-1 text-white">
                  News
                </span>
                <p className="flex items-center">
                  Read the launch post from here
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      fillRule="evenodd"
                    />
                  </svg>
                </p>
              </div>
              <div className="text-4xl font-extrabold  text-gray-800 dark:text-white sm:text-5xl">
                Build your SaaS
                <h1 className="inline bg-gradient-to-b from-[#5EA2EF] to-[#0072F5] bg-clip-text text-4xl font-semibold tracking-tight text-transparent lg:text-6xl">
                  &nbsp;exactly
                </h1>
                <br />
                how you want
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  className="flex items-center justify-center gap-x-1 rounded-full bg-gray-800 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900 md:inline-flex"
                  href="/"
                >
                  Get started
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="hidden flex-1 md:block">
              <img
                alt=""
                className="max-w-xl"
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/c86a7ae02ac188442548f510b5393c04140515d7/undraw_progressive_app_m-9-ms_oftfv5.svg"
              />
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="mx-auto">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <img
                  alt=""
                  className="sm:rounded-lg md:max-w-lg"
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
              </div>
              <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
                <p className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">
                  Build your SaaS solution with help from our experts
                </p>
                <p className="mt-3 text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum, sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium
                </p>
                <a
                  className="inline-flex items-center gap-x-1 font-medium text-indigo-600 duration-150 hover:text-indigo-500 dark:text-white"
                  href="/"
                >
                  Learn more
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <SubscribePage data={data} />

        <FooterPage data={data} />
      </div>
    </section>
  );
}
