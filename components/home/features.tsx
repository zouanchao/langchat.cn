import {
  CodeDocumentIcon,
  FlashIcon,
  MagicIcon,
  ServerIcon
} from '@components/icons';
import { card } from '@components/elements';

export const features = [
  {
    name: 'Feature-rich',
    description:
      'Packed with powerful features like, slots, responsive variants, components composition, and more.',
    icon: <FlashIcon className="text-pink-500" />
  },
  {
    name: 'Fully typed',
    description:
      'Auto-completion and type-safety are provided by TypeScript. No need to worry about typos.',
    icon: <CodeDocumentIcon className="text-pink-500" />
  },
  {
    name: 'Safe',
    description:
      'Forget about TailwindCSS style conflicts. Tailwind Variants efficiently merges conflicting styles.',
    icon: <MagicIcon className="text-pink-500" />
  },
  {
    name: 'Framework agnostic',
    description:
      "Tailwind Variants is a utility library that works with any framework. It's not tied to React.",
    icon: <ServerIcon className="text-pink-500" />
  }
];

export default function Features() {
  return (
    <section className="z-10 my-10 gap-6">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {features.map((feature, index) => (
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
