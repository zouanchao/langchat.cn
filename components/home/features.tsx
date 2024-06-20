import {
  CodeDocumentIcon,
  FlashIcon,
  MagicIcon,
  ServerIcon
} from '@components/icons';
import { card } from '@components/elements';

export const features = [
  {
    name: 'Quick Access',
    description:
      'Integrated with dozens of LLM models, supports visual dynamic configuration, and seamless updates.',
    icon: <FlashIcon className="text-pink-500" />
  },
  {
    name: 'Java Stack',
    description:
      'A full suite of Java technology stacks to help Java enterprise applications quickly develop LLM model projects.',
    icon: <CodeDocumentIcon className="text-pink-500" />
  },
  {
    name: 'Advanced',
    description:
      'Integrated with various AI use cases, incorporating multiple RAG solutions such as Agent FunctionCall.',
    icon: <MagicIcon className="text-pink-500" />
  },
  {
    name: 'Flow',
    description:
      'Supports workflow editing of large model applications, and customizes dedicated enterprise AI robots.',
    icon: <ServerIcon className="text-pink-500" />
  }
];

export default function Features() {
  return (
    <section className="z-10 my-10 gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
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
