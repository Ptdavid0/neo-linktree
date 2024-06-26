import React from "react";

interface SocialButtonProps {
  account: {
    title: string;
    link: string;
  };
}

export default function SocialButton({ account }: SocialButtonProps) {
  return (
    <div className="flex justify-center items-center" key={account.title}>
      <a
        href={account.link}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md bg-transparent w-full text-sm py-4 text-center font-semibold text-white shadow-sm border hover:bg-gray-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {account.title}
      </a>
    </div>
  );
}
