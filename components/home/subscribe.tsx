import { useState } from 'react';

export default function SubscribePage() {
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
              Cooperation, Customization, Contact
            </h3>
            <p className="text-xl leading-relaxed text-[#999999]">
              For project cooperation or custom development, please feel free to
              send us an email.
            </p>
          </div>
          <div className="mt-6">
            <form
              className="flex items-center justify-center rounded-lg border border-gray-800 p-1 sm:mx-auto sm:max-w-md"
              onSubmit={handleSubmit}
            >
              <input
                className="!focus:outline-none w-full p-2 text-gray-500 outline-none"
                placeholder="Enter your email"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <button className="rounded-lg bg-[#eeeeee] p-2 px-3 font-medium shadow-md outline-none duration-150 hover:bg-gray-400  dark:text-black sm:px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
