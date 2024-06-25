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
        className="rounded-md bg-white px-10 py-6 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {account.title}
      </a>
    </div>
  );
}
