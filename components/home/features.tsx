import { card } from '@components/elements';

export default function Features({ data }) {
  return (
    <section className="z-10 my-10 gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className={card({
              class:
                'transition-transform-background dark:bg-default-400/10 gap-2 border-transparent bg-white/5  p-4 text-foreground backdrop-blur '
            })}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center rounded-full bg-[#301050cc] p-2 text-pink-500 ">
                {feature.icon}
              </div>
              <h3 className="mx-3 text-lg font-bold text-black dark:text-white">
                {feature.name}
              </h3>
            </div>
            <p className="pl-1 text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
