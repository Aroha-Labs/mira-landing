"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const gtSuperText = localFont({
  src: "../app/fonts/GT-Super-Text-Book.woff2",
  variable: "--font-gt-super",
  display: "swap",
});

const HeroText = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="max-sm:w-[90%] sm:min-w-[398px] sm:max-w-[398px] flex flex-col justify-start items-start mt-[24px] relative z-2 pl-[30px] sm:pl-[48px]">
      <h1
        className={`${gtSuperText.className} text-[32px] leading-[104%] tracking-[-2%] text-white`}
        {...(pathname === "/" || pathname === "/writing"
          ? {
              "data-aos": "custom-fade-up",
              "data-aos-offset": "0",
              "data-aos-distance": "10",
              "data-aos-duration": "500",
            }
          : {})}
      >
        {title}
      </h1>
      <p
        className="mt-4 text-[#506057] text-[14px] leading-[130%] pr-[97px]"
        {...(pathname === "/" || pathname === "/writing"
          ? { "data-aos": "fade-in" }
          : {})}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default HeroText;
