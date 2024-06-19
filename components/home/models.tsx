import type { FC } from 'react';

import React from 'react';

interface ModelsProps {}

export const list = [
  { name: 'OpenAI', url: '' },
  { name: 'Azure OpenAI', url: '' },
  { name: 'Ollama', url: '' },
  { name: 'Gemini', url: '' },
  { name: '百度千帆大模型', url: '' },
  { name: '阿里通义千问', url: '' },
  { name: '智谱AI', url: '' }
];

const ModelsLogo: FC<ModelsProps> = () => {
  return (
    <section className="relative z-10 mt-12 flex w-full flex-col gap-5 text-center">
      <h3 className="text-2xl text-gray-400">Supports large AI models</h3>
      <div className="flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-3">
        {list.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="rounded-full bg-gradient-to-r from-[#4F46E5] to-[#E114E5] px-2.5 py-0.5 text-sm text-white">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModelsLogo;
