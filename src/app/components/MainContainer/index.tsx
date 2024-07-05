"use client";

import React from "react";
import SocialButton from "../SocialButton";

export default function MainContainer() {
  const socialMedia = [
    {
      title: "Threads",
      link: "https://www.threads.net/@neo.coders?igshid=MzRlODBiNWFlZA==",
    },
    {
      title: "LinkedIn - Neo Coders",
      link: "https://www.linkedin.com/company/neo-coders/",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/neo.coders/",
    },
    {
      title: "LinkedIn - Ana",
      link: "https://www.linkedin.com/in/anabmagalhaes/",
    },
    {
      title: "LinkedIn - Pedro",
      link: "https://www.linkedin.com/in/pedro-antonio-david-914aa1129/",
    },
    {
      title: "Rocketseat",
      link: "https://app.rocketseat.com.br/cart/rocketseat-one?referral=anacbortolini&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one",
    },
  ];

  return (
    <div className="w-full h-full sm:w-auto sm:h-auto sm:px-6 sm:py-32 lg:px-8 sm:m-5 lg:max-w-7xl flex overflow-hidden">
      <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:border sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 bg-purple-400 backdrop-filter backdrop-blur-sm bg-opacity-10">
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
          {/* Habilitate this Get Started button after blog is completed */}
          {/* <button
            onClick={() => {}}
            className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mb-8 lg:mb-0"
          >
            Get started
          </button> */}
        </div>

        <div className="mt-8 grid gap-x-4 gap-y-4 lg:py-16 lg:min-w-80 sm:grid-cols-2 sm:mb-10 lg:grid-cols-1">
          {socialMedia.map((account) => (
            <SocialButton account={account} key={account.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
