import { useState } from 'react';

export default function SubscribePage({ data }) {
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject) {
      window.location.href = `mailto:your-email@example.com?subject=${subject}&body=Email: langchat@outlook.com`;
    }
  };

  return (
    <section className="mx-auto py-14">
      <div className="relative overflow-hidden rounded-2xl border border-[#ffffff33] bg-[#101010] px-4 py-14 md:px-8">
        <div className="relative z-10 mx-auto max-w-2xl sm:text-center">
          <div className="space-y-5">
            <h3 className="text-4xl font-bold italic text-white">
              {data.subscribe.title}
            </h3>
            <p className="text-xl leading-relaxed text-[#999999]">
              {data.subscribe.des}
            </p>
          </div>
          <div className="mt-6">
            <form
              className="flex items-center justify-center rounded-lg border border-gray-800 p-1 sm:mx-auto sm:max-w-md"
              onSubmit={handleSubmit}
            >
              <input
                className="!focus:outline-none w-full bg-transparent p-2 text-white outline-none dark:text-gray-500 "
                placeholder="Enter your email"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <button className="min-w-[5rem] rounded-lg bg-[#eeeeee] p-2 px-3 font-medium shadow-md outline-none duration-150 hover:bg-gray-400  dark:text-black sm:px-4">
                {data.subscribe.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
