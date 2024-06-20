import {
  CodeDocumentIcon,
  FlashIcon,
  MagicIcon,
  ServerIcon
} from '@components/icons';

export const EnData = {
  hero: {
    slogan: 'Empowering your AI dreams',
    title1: 'Quick Build of Enterprise Knowledge Base and',
    title2: 'AI Large Model Project',
    des: 'Multimodal, Advanced RAG, Function Call, Enterprise Knowledge Base,RBAC Platform, and AI Large Model Solutions in the Java Ecosystem',
    frontBtn: 'Preview Front',
    clientBtn: 'Preview Client Front'
  },
  features: [
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
  ],
  models: {
    title: 'Supports large AI models'
  },
  subscribe: {
    title: 'Cooperation, Customization, Contact',
    des: 'For project cooperation or custom development, please feel free to send us an email.',
    send: 'Contact'
  }
};

export const ZhData = {};
