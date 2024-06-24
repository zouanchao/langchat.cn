import React from 'react';

import ModelsLogo from '@components/home/models';
import Features from '@components/home/features';
import SubscribePage from '@components/home/subscribe';
import HeroPage from '@components/home/hero';
import FooterPage from '@components/layout/footer';
import Parts from '@components/home/parts';

export default function HomePage({ data }) {
  return (
    <section className="mx-auto h-full max-w-6xl">
      <div className="pb-10 pt-20 dark:text-white">
        <HeroPage data={data} />

        <div className="mt-10">
          <div className="bottom-0 z-0 w-full bg-[url('/looper-pattern.svg')] bg-left bg-no-repeat">
            <div className="flex w-full items-center justify-center">
              <div className="max-w-4xl">
                <img
                  alt=""
                  className="w-full rounded-lg"
                  src="/page/banner.png"
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

        <Parts data={data} />

        <SubscribePage data={data} />

        <FooterPage data={data} />
      </div>
    </section>
  );
}
