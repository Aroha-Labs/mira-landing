"use client";

import Link from "next/link";
import React from "react";
import local from "next/font/local";

const gtSuperText = local({
  src: "../../../app/fonts/GT-Super-Text-Book.woff2",
  weight: "400",
  style: "normal",
});

const MiraBrief = ({
  hoveredBox,
  setHoveredBox,
  setBackground,
}: {
  hoveredBox: number | null;
  setHoveredBox: (hoveredBox: number | null) => void;
  setBackground: (background: 0 | 1 | 2 | 3) => void;
}) => {
  return (
    <div className="grid max-sm:h-fit max-sm:grid-flow-row max-sm:grid-cols-1 max-sm:grid-rows-[129px_129px_129px_12px_110px_110px] sm:h-[354px] xl:h-[128px] w-full sm:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[1.22fr_1.22fr_1.22fr_12px_2fr] sm:grid-rows-[1fr_1fr_1fr_12px_1fr_1fr_1fr_1fr] xl:grid-rows-2 px-[30px] md:px-12">
      <div
        className="sm:col-span-1 sm:row-span-3 xl:row-span-2"
        data-aos="custom-fade"
        data-aos-offset="0"
        data-aos-distance="10"
        data-aos-anchor-placement="center-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <div
          className={`h-full w-full backdrop-blur-sm flex flex-col items-start p-[32px] gap-y-[11px] justify-center border border-solid border-[#072A1F] transition-opacity duration-500 ${
            hoveredBox !== null && hoveredBox !== 0
              ? "opacity-20"
              : "opacity-100"
          }`}
          onMouseEnter={() => {
            setHoveredBox(0);
            setBackground(1);
          }}
          onMouseLeave={() => {
            setHoveredBox(null);
            setBackground(0);
          }}
        >
          <p
            className={`${gtSuperText.className} text-white text-[18px] leading-[104%]`}
          >
            Collective Wisdom.
          </p>
          <p className="text-[#506057] text-[14px] leading-[120%]">
            Evaluate AI output using other diverse LLMs.
          </p>
        </div>
      </div>
      <div
        className="sm:col-span-1 sm:row-span-3 xl:row-span-2"
        data-aos="custom-fade"
        data-aos-offset="0"
        data-aos-distance="10"
        data-aos-anchor-placement="center-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <div
          className={`h-full w-full backdrop-blur-sm flex flex-col items-start p-[32px] gap-y-[11px] justify-center border border-solid border-[#072A1F] md:-ml-[1px] transition-opacity duration-500 ${
            hoveredBox !== null && hoveredBox !== 1
              ? "opacity-20"
              : "opacity-100"
          }`}
          onMouseEnter={() => {
            setHoveredBox(1);
            setBackground(2);
          }}
          onMouseLeave={() => {
            setHoveredBox(null);
            setBackground(0);
          }}
        >
          <p
            className={`${gtSuperText.className} text-white text-[18px] leading-[104%]`}
          >
            Resilient systems.
          </p>
          <p className="text-[#506057] text-[14px] leading-[120%]">
            Secured with battle-tested cryptoeconomic primitives.
          </p>
        </div>
      </div>
      <div
        className="sm:col-span-1 sm:row-span-3 xl:row-span-2"
        data-aos="custom-fade"
        data-aos-offset="0"
        data-aos-distance="10"
        data-aos-anchor-placement="center-left"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
      >
        <div
          className={`h-full w-full backdrop-blur-sm flex flex-col items-start p-[32px] gap-y-[11px] justify-center border border-solid border-[#072A1F] md:-ml-[2px] transition-opacity duration-500 ${
            hoveredBox !== null && hoveredBox !== 2
              ? "opacity-20"
              : "opacity-100"
          }`}
          onMouseEnter={() => {
            setHoveredBox(2);
            setBackground(3);
          }}
          onMouseLeave={() => {
            setHoveredBox(null);
            setBackground(0);
          }}
        >
          <p
            className={`${gtSuperText.className} text-white text-[18px] leading-[104%]`}
          >
            Fully autonomous.
          </p>
          <p className="text-[#506057] text-[14px] leading-[120%]">
            {"Remove 'humans in the loop' from your AI."}
          </p>
        </div>
      </div>
      <div className="sm:col-span-3 xl:col-span-1 sm:row-span-1 xl:row-span-2"></div>
      <Link
        href={"/research/mira-whitepaper.pdf"}
        target="_blank"
        className="sm:col-span-3 xl:col-span-1 sm:row-span-2 xl:row-span-1 flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-between bg-[#105C43] hover:bg-[#146E51] transition-all duration-500 xl:py-[23px] px-[32px] max-xl:gap-y-[12px]"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        <div className="flex flex-row justify-start items-center xl:h-full gap-x-1.5">
          <p className="text-white text-[14px] leading-[120%]">
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
              fill="white"
            />
          </svg>
        </div>
        <p className="text-white/40 text-[14px] leading-[120%]">
          The next frontier of AI.
        </p>
      </Link>
      <Link
        href={"https://flows.mira.network/"}
        className="sm:col-span-3 xl:col-span-1 sm:row-span-2 xl:row-span-1 flex flex-col xl:flex-row items-start xl:items-center justify-center xl:justify-between border border-solid border-[#072A1F] xl:py-[23px] px-[32px] max-xl:gap-y-[12px] group"
        data-aos="fade-in"
        data-aos-delay="500"
        data-aos-offset="0"
        data-aos-duration="500"
        data-aos-once="true"
        target="_blank"
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
          Mira Flows - early access
        </p>
      </Link>
    </div>
  );
};

export default MiraBrief;
