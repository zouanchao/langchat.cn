import { PhotoProvider, PhotoView } from 'react-photo-view';
import React from 'react';

export default function Parts({ data }) {
  return (
    <div className="mt-28 flex flex-col gap-28">
      <section>
        <div className="mx-auto">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <PhotoProvider>
                <PhotoView src="/page/part4.png">
                  <img
                    alt=""
                    className="max-w-xl !rounded-lg"
                    src="/page/part4.png"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
            <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">
                {data.parts.part4.title}
              </p>
              <p className="mt-3 text-gray-500">{data.parts.part4.des}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto gap-8 overflow-hidden text-gray-600 md:flex">
          <div className="flex max-w-xl !flex-col justify-center space-y-5">
            <div className="text-4xl font-extrabold  text-gray-800 dark:text-white">
              {data.parts.part1.title}
            </div>
            <p>{data.parts.part1.des}</p>
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <PhotoProvider>
              <PhotoView src="/page/part1.png">
                <img
                  alt=""
                  className="max-w-xl !rounded-lg"
                  src="/page/part1.png"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <PhotoProvider>
                <PhotoView src="/page/part2.png">
                  <img
                    alt=""
                    className="max-w-xl !rounded-lg"
                    src="/page/part2.png"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
            <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
              <p className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">
                {data.parts.part2.title}
              </p>
              <p className="mt-3 text-gray-500">{data.parts.part2.des}</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto gap-8 overflow-hidden text-gray-600 md:flex">
          <div className="flex max-w-xl !flex-col justify-center space-y-5">
            <div className="text-4xl font-extrabold  text-gray-800 dark:text-white">
              {data.parts.part3.title}
            </div>
            <p>{data.parts.part3.des}</p>
          </div>
          <div className="flex-1 sm:hidden lg:block">
            <PhotoProvider>
              <PhotoView src="/page/part3.png">
                <img
                  alt=""
                  className="max-w-xl !rounded-lg"
                  src="/page/part3.png"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mx-auto max-w-xl sm:text-center">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white sm:text-4xl">
              {data.parts.mores.title}
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-500">
              {data.parts.mores.des}
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid cursor-pointer gap-8 sm:grid-cols-2 md:grid-cols-3">
              {data.parts.mores.items.map((item, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl border border-gray-800 p-4 transition duration-300 ease-in-out hover:border-gray-600"
                >
                  <div className="h-60 w-full sm:h-56 md:h-56">
                    <PhotoProvider>
                      <PhotoView src={item.cover}>
                        <img
                          alt=""
                          className="h-full w-full rounded-xl object-cover object-center"
                          src={item.cover}
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-500">
                      {item.des}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
