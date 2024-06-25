"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import SocialButton from "../SocialButton";

export default function MainContainer() {
  const [displayLinks, setDisplayLinks] = useState(true);
  const socialMedia = [
    {
      title: "Threads",
      link: "https://www.threads.net/@neo.coders?igshid=MzRlODBiNWFlZA==",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/company/neo-coders/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/neo.coders/",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 sm:m-5">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 bg-opacity-100">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Empowering Minds. Transforming Careers.
          </h2>
          <h2 className="text-2xl font-bold tracking-tight text-[#cccccc] sm:text-2xl">
            One Post at a Time
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our mission is to ignite curiosity, inspire growth, and pave the way
            for your success in this dynamic world.
          </p>
          <button
            onClick={() => setDisplayLinks(!displayLinks)}
            className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mb-8 lg:mb-0"
          >
            Get started
          </button>
        </div>
        {displayLinks && (
          <div className="mx-auto max-w-md  lg:mx-0 lg:flex-auto lg:py-32 text-left grid grid-row-1 sm:grid-rows-2 lg:grid-rows-3 gap-4">
            {socialMedia.map((account) => (
              <SocialButton account={account} key={account.link} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
