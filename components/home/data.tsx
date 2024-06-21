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
  },
  footer: {
    title1: 'Open Source',
    title2: 'Preview',
    title3: 'Resources',
    title4: 'Stack'
  }
};

export const ZhData = {
  hero: {
    slogan: '赋能你的人工智能梦想',
    title1: '快速构建与实现企业知识库的',
    title2: 'AI大模型产品',
    des: '多模态、高级RAG、FunctionCall、企业知识库、Java全生态下的RBAC平台和AI大型模型解决方案',
    frontBtn: '前端预览',
    clientBtn: '客户端预览'
  },
  features: [
    {
      name: '快速接入',
      description: '集成了数十个LLM模型，支持可视化动态配置、快速接入.',
      icon: <FlashIcon className="text-pink-500" />
    },
    {
      name: 'Java技术栈',
      description:
        '一套完整的Java技术栈，可帮助Java企业应用程序快速开发LLM模型产品.',
      icon: <CodeDocumentIcon className="text-pink-500" />
    },
    {
      name: '高级特性',
      description:
        '与各种AI用例集成，结合多种RAG解决方案，如Agent FunctionCall.',
      icon: <MagicIcon className="text-pink-500" />
    },
    {
      name: '工作流',
      description: '支持大型模型应用的工作流编辑，定制专用企业AI机器人.',
      icon: <ServerIcon className="text-pink-500" />
    }
  ],
  models: {
    title: '支持的AI大模型'
  },
  subscribe: {
    title: '合作、定制开发、联系我们',
    des: '如需项目合作或定制开发，请随时给我们发邮件.',
    send: '联系'
  }
};
