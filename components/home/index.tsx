import { tvs } from '@components/elements';
import ModelsLogo from '@components/home/models';
import Features from '@components/home/features';

export default function HomePage() {
  return (
    <section className="mx-auto h-full max-w-6xl">
      <div className="gap-12 pb-10 pt-20 dark:text-white">
        <div className="mb-2 flex items-center justify-center">
          <span className="rounded-full bg-gradient-to-r from-[#4F46E5] to-[#E114E5] px-3 py-0.5 text-sm text-white">
            Fast build AIGC project
          </span>
        </div>
        <div className="mx-auto space-y-5 text-center">
          <h2 className="mx-auto text-4xl font-extrabold dark:text-white md:text-5xl">
            Quick Build of Enterprise Knowledge Base and <br />
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#E114E5] bg-clip-text text-transparent">
              AI Large Model Project
            </span>
          </h2>
          <p className="mx-auto max-w-2xl">
            Multimodal, Advanced RAG, Function Call, Enterprise Knowledge Base,
            RBAC Platform, and AI Large Model Solutions in the Java Ecosystem
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a className={tvs.button()} href="/docs/introduction">
              Preview Front
            </a>
            <a
              className={tvs.button({
                flat: true,
                color: 'neutral'
              })}
              href="https://github.com/tycoding/langchat"
              rel="noopener noreferrer"
              target="_blank"
              title="github homepage"
            >
              <span className={tvs.box({ row: true })}>
                Preview Client Front
              </span>
            </a>
          </div>
        </div>
        <div className="mt-14 ">
          <div className="bottom-0 z-0 w-full bg-[url('/looper-pattern.svg')] bg-left bg-no-repeat">
            <img
              alt=""
              className="w-full rounded-lg border shadow-lg"
              src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/Safari%20(Big%20Sur)%20-%20Light.png"
            />
            <div className="flex-1">
              <Features />
            </div>
            <div className="h-8" />
          </div>
        </div>

        <ModelsLogo />

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
      </div>
    </section>
  );
}
