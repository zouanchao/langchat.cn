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
  parts: {
    part1: {
      title: 'Dynamic LLM configuration with seamless refresh',
      des: 'Without needing to restart the service each time, the system supports dynamically configuring different LLM models and adjusting model parameters. The updated model configurations will be seamlessly refreshed.'
    },
    part2: {
      title: 'Support multiple methods of importing enterprise knowledge bases',
      des: "Using multiple channels to import knowledge base documents, the system parses and vectorizes the data into a vector database via the LLM's embedding model. For each conversation, the system automatically matches relevant content from the vector database and assembles it into a prompt to be sent to the LLM."
    },
    part3: {
      title: 'Multiple conversation modes',
      des: 'Supports conversation using any knowledge base, prompt library, or free-form dialogue; you can choose a configured LLM model to start a conversation at any time.'
    },
    part4: {
      title: 'LLM Workflows',
      des: 'Currently developing the LLM workflow functionality, which eliminates cumbersome configurations and offers a visual, highly customizable way to design enterprise chatbot processes.'
    },
    mores: {
      title: 'More Feature Support',
      des: 'LangChat is a product that helps enterprises quickly develop LLM-based applications. It includes more complete LLM practices and RBAC functionality.',
      items: [
        {
          title: 'Billing Statistics',
          des: 'Visualize statistics of LLM request volumes and Token consumption',
          cover: '/page/more1.png'
        },
        {
          title: 'Client-side AI Applications',
          des: 'Provides a client application practice for quickly using pre-released prompts, knowledge bases, and chatbot applications',
          cover: '/page/more2.png'
        },
        {
          title: 'Client-side Chat Window',
          des: 'A more complete AI chat window that supports using pre-released application dialogues',
          cover: '/page/more3.png'
        },
        {
          title: 'Client-side Quick Document Dialogue',
          des: 'Client-side supports quick document uploads and starting a conversation',
          cover: '/page/more4.png'
        },
        {
          title: 'Mind Map Generation',
          des: 'Quickly generate mind map content with Markmap',
          cover: '/page/more5.png'
        },
        {
          title: 'RBAC Permission System',
          des: 'Integrated basic RBAC permission management module',
          cover: '/page/more6.png'
        }
      ]
    }
  },
  models: {
    title: 'Supports large AI models'
  },
  subscribe: {
    title: 'Cooperation, Customization, Contact',
    des: 'For project cooperation or custom development, please feel free to send us an email.',
    send: 'Contact'
  },
  footer: {
    slogan: 'Empowering your AI dreams',
    frontBtn: 'Preview Front',
    clientBtn: 'Preview Client Front',
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
    frontBtn: '服务端预览',
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
  parts: {
    part1: {
      title: '动态配置LLM，无感刷新',
      des: '无需每次重启服务，系统支持动态配置不同的LLM模型和调整模型参数，更新后的模型配置将会实现无感刷新。'
    },
    part2: {
      title: '支持多种方式导入企业知识库',
      des: '通过多种渠道导入知识库文档，系统通过LLM的Embedding模型解析和向量化数据到向量库。每次对话时，系统会自动从向量库中匹配相关内容并组装为Prompt发送给LLM。'
    },
    part3: {
      title: '多种对话模式',
      des: '支持使用任意知识库、Prompts库对话，或是自由对话；可以随时选择配置好的LLM模型开始对话。'
    },
    part4: {
      title: 'LLM 工作流',
      des: '目前正在开发LLM工作流功能，舍弃繁琐的配置，提供一种可视化、高自定义的方式定制企业机器人流程'
    },
    mores: {
      title: '更多的特性支持',
      des: 'LangChat是一个帮助企业快速开发LLM大模型应用的产品，他包含更加完善的LLM实践以及RBAC功能',
      items: [
        {
          title: '账单统计',
          des: '可视化统计LLM请求量和Token消耗量',
          cover: '/page/more1.png'
        },
        {
          title: '客户端AI应用',
          des: '提供一个客户端应用实践，快速使用预发布的Prompts、知识库、机器人应用',
          cover: '/page/more2.png'
        },
        {
          title: '客户端对话窗口',
          des: '更加完善的AI聊天对话窗口，支持使用预发布的应用对话',
          cover: '/page/more3.png'
        },
        {
          title: '客户端快速文档对话',
          des: '客户端支持快速上传文档并开始对话',
          cover: '/page/more4.png'
        },
        {
          title: '思维导图生成',
          des: '借助Markmap快速生成思维导图内容',
          cover: '/page/more5.png'
        },
        {
          title: 'RABC权限体系',
          des: '集成了RBAC基础权限管理模块',
          cover: '/page/more6.png'
        }
      ]
    }
  },
  models: {
    title: '支持的AI大模型'
  },
  subscribe: {
    title: '合作、定制开发、联系我们',
    des: '如需项目合作或定制开发，请随时给我们发邮件.',
    send: '联系'
  },
  footer: {
    slogan: '赋能你的人工智能梦想',
    frontBtn: '服务端预览',
    clientBtn: '客户端预览',
    title1: '开源产品',
    title2: '预览',
    title3: '资源',
    title4: '技术栈'
  }
};
