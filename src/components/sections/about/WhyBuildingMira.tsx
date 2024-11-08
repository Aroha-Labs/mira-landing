"use client";

import Link from "next/link";
import React from "react";

const WhyBuildingMira = () => {
  return (
    <div className="grid max-sm:h-fit max-sm:grid-flow-row max-sm:grid-cols-1 max-sm:grid-rows-[auto_auto_auto_12px_110px_110px_110px] sm:h-fit xl:h-[232px] w-full sm:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1.22fr_1.22fr_1.22fr_12px_2fr] sm:grid-rows-[auto_12px_40px_40px_40px_40px_40px_40px] xl:grid-rows-3 px-[30px] md:px-12">
      <div
        className="sm:col-span-1 sm:row-span-1 xl:row-span-3"
        data-aos="custom-fade"
        data-aos-offset="0"
        data-aos-distance="10"
        data-aos-anchor-placement="center-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <div
          className={`h-full w-full backdrop-blur-sm flex flex-col items-start p-[32px] gap-y-[11px] justify-start border border-solid border-[#072A1F] transition-opacity duration-500`}
        >
          <p className="text-white text-[14px] leading-[150%] md:max-w-[188px]">
            {
              "The true potential of Artificial Intelligence is bottlenecked by the need for human verification. Errors, hallucinations, and bias make AI risky when unchecked."
            }
          </p>
        </div>
      </div>
      <div
        className="sm:col-span-1 sm:row-span-1 xl:row-span-3"
        data-aos="custom-fade"
        data-aos-offset="0"
        data-aos-distance="10"
        data-aos-anchor-placement="center-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <div
          className={`h-full w-full backdrop-blur-sm flex flex-col items-start p-[32px] gap-y-[11px] justify-start border border-solid border-[#072A1F] md:-ml-[1px] transition-opacity duration-500`}
        >
          <p className="text-white text-[14px] leading-[150%] md:max-w-[188px]">
            {
              "Mira is building the infrastructure to replace human oversight with diverse AI ensembles, anchored by the same trustless, decentralized principles that power modern blockchains. "
            }
          </p>
        </div>
      </div>
      <div
        className="sm:col-span-1 sm:row-span-1 xl:row-span-3"
        data-aos="custom-fade"
        data-aos-offset="0"
        data-aos-distance="10"
        data-aos-anchor-placement="center-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <div
          className={`h-full w-full backdrop-blur-sm flex flex-col items-start p-[32px] gap-y-[11px] justify-start border border-solid border-[#072A1F] md:-ml-[2px] transition-opacity duration-500`}
        >
          <p className="text-white text-[14px] leading-[150%] md:max-w-[188px]">
            {
              "Our goal: to unlock the exponential potential of truly autonomous AI, secured by cryptoeconomic safeguards that ensure trust without human intervention."
            }
          </p>
        </div>
      </div>
      <div className="sm:col-span-3 xl:col-span-1 sm:row-span-1 xl:row-span-3"></div>
      <Link
        href={"/"}
        className="sm:col-span-3 xl:col-span-1 sm:row-span-2 xl:row-span-1 flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-between border border-solid border-[#072A1F] xl:py-[23px] px-[32px] max-xl:gap-y-[12px] group"
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-offset="0"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="flex flex-row justify-start items-center xl:h-full gap-x-1.5">
          <p className="text-white text-[14px] leading-[120%] group-hover:text-[#105C43] transition-colors duration-500">
            Go to careers
          </p>
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52699 9.75L5.76136 8.99432L8.91335 5.84233H0.75V4.74858H8.91335L5.76136 1.60653L6.52699 0.840909L10.9815 5.29545L6.52699 9.75Z"
              className="fill-white group-hover:fill-[#105C43] transition-colors duration-500"
            />
          </svg>
        </div>
        <p className="text-white/40 text-[14px] leading-[120%] group-hover:text-[#105C43] transition-colors duration-500">
          Join our team.
        </p>
      </Link>
      <Link
        href={"/"}
        className="sm:col-span-3 xl:col-span-1 sm:row-span-2 xl:row-span-1 flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-between border border-solid border-[#072A1F] xl:py-[23px] px-[32px] max-xl:gap-y-[12px] group"
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-offset="0"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="flex flex-row justify-start items-center xl:h-full gap-x-1.5">
          <p className="text-white text-[14px] leading-[120%] group-hover:text-[#105C43] transition-colors duration-500">
            Start Building
          </p>
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52699 9.75L5.76136 8.99432L8.91335 5.84233H0.75V4.74858H8.91335L5.76136 1.60653L6.52699 0.840909L10.9815 5.29545L6.52699 9.75Z"
              className="fill-white group-hover:fill-[#105C43] transition-colors duration-500"
            />
          </svg>
        </div>
        <p className="text-white/40 text-[14px] leading-[120%] group-hover:text-[#105C43] transition-colors duration-500">
          Mira Factory — live in beta.
        </p>
      </Link>
      <Link
        href={"/"}
        className="sm:col-span-3 xl:col-span-1 sm:row-span-2 xl:row-span-1 flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-between border border-solid border-[#072A1F] xl:py-[23px] px-[32px] max-xl:gap-y-[12px] group"
        data-aos="fade-in"
        data-aos-offset="0"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="flex flex-row justify-start items-center xl:h-full gap-x-1.5">
          <p className="text-white text-[14px] leading-[120%] group-hover:text-[#105C43] transition-colors duration-500">
            Read Whitepaper
          </p>
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52699 9.75L5.76136 8.99432L8.91335 5.84233H0.75V4.74858H8.91335L5.76136 1.60653L6.52699 0.840909L10.9815 5.29545L6.52699 9.75Z"
              className="fill-white group-hover:fill-[#105C43] transition-colors duration-500"
            />
          </svg>
        </div>
        <p className="text-white/40 text-[14px] leading-[120%] group-hover:text-[#105C43] transition-colors duration-500">
          Our Vision, our Mssion.
        </p>
      </Link>
    </div>
  );
};

export default WhyBuildingMira;
