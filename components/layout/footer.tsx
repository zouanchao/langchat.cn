import React from 'react';

export const Footer = () => {
  const list = [
    {
      title: 'Open Source',
      children: [
        {
          label: 'Github',
          link: 'https://github.com/tycoding/langchat'
        },
        {
          label: 'LangChat',
          link: 'https://langchat.cn'
        },
        {
          label: 'TyCoding Blog',
          link: 'http://tycoding.cn'
        },
        {
          label: 'LangChat organization',
          link: 'https://github.com/langchat'
        }
      ]
    },
    {
      title: 'Preview',
      children: [
        {
          label: 'Front Preview',
          link: 'https://front.langchat.cn/'
        },
        {
          label: 'Backend Preview',
          link: 'https://backend.langchat.cn/'
        }
      ]
    },
    {
      title: 'Resources',
      children: [
        {
          label: 'Open AI',
          link: 'https://openai.com/'
        },
        {
          label: 'Ollama',
          link: 'https://ollama.ai/'
        },
        {
          label: '阿里通义千问',
          link: 'https://tongyi.aliyun.com/'
        },
        {
          label: '百度千帆大模型',
          link: 'https://cloud.baidu.com/product/wenxinworkshop.html'
        },
        {
          label: '智谱AI',
          link: 'https://www.zhipuai.cn/'
        }
      ]
    },
    {
      title: 'Stack',
      children: [
        {
          label: 'LangChat',
          link: 'https://github.com/tycoding/langchat'
        },
        {
          label: 'Langchain4j',
          link: 'https://github.com/langchain4j/langchain4j/'
        },
        {
          label: 'Langchain',
          link: 'https://www.langchain.com/'
        }
      ]
    }
  ];

  return (
    <footer>
      <div className="mx-auto my-4 !mb-14 !mt-10 max-w-7xl p-6">
        <div className="lg:flex">
          <div className="-mx-6 w-full lg:w-1/4">
            <div className="mx-6 space-y-4">
              <div className="mb-1 flex items-center gap-2 space-x-1.5">
                <img
                  alt="logo"
                  className="text-sm"
                  height={40}
                  src="/logo.png"
                  width={40}
                />
                <div className="cursor-pointer text-2xl">LangChat</div>
              </div>

              <p className="mt-2 max-w-sm text-gray-200">
                Empowering your AI dreams
              </p>

              <p className="mt-2 max-w-sm text-sm text-gray-400">
                © 2023-2024 LangChat, LLC
              </p>

              <div className="-mx-2 !mt-7 flex">
                <a
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                  href="http://tycoding.cn"
                >
                  <svg
                    className="h-7 w-7 fill-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.1 11.35q.35-.7.725-1.35t.825-1.3l-1.4-.275l-2.1 2.1zm12.05-6.875q-1.75.05-3.737 1.025T11.8 8.1q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225t2.25-1.875q1.625-1.625 2.6-3.6T19.675 5q0-.1-.038-.2t-.112-.175t-.175-.112t-.2-.038m-5.5 6q-.575-.575-.575-1.412t.575-1.413t1.425-.575t1.425.575t.575 1.413t-.575 1.412t-1.425.575t-1.425-.575m-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.813t-1.35.712m8.775-13.35q.2 2.75-.9 5.363T17.2 14.025l.5 2.475q.1.5-.05.975t-.5.825L14 21.45q-.375.375-.9.288t-.725-.588l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725t.275-.9L5.825 7q.35-.35.837-.5t.988-.05l2.475.5q2.375-2.375 4.988-3.475t5.362-.9q.2.025.4.113t.35.237t.238.35t.112.4m-17.65 12.3q.875-.875 2.138-.887t2.137.862t.863 2.138t-.888 2.137q-1.2 1.2-2.838 1.425t-3.287.45l.45-3.287q.225-1.637 1.425-2.838m1.425 1.4q-.425.425-.587 1.025T4.5 19.625q.625-.1 1.225-.25T6.75 18.8q.3-.3.325-.725T6.8 17.35t-.725-.288t-.725.313"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  className="mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                  href="https://github.com/tycoding"
                >
                  <svg
                    className="h-7 w-7 fill-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {list.map((item, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-lg font-bold uppercase text-gray-700 dark:text-white">
                    {item.title}
                  </h3>
                  {item.children.map((child, idx) => (
                    <a
                      key={idx}
                      className="mt-2 block text-sm text-gray-600 no-underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
                      href={child.link}
                      target="_blank"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
