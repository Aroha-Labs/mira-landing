"use client";
import BGComponent from "@/components/BGComponent";
import HeroText from "@/components/HeroText";
import { useEffect } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyBuildingMira from "@/components/sections/about/WhyBuildingMira";
import AboutPageSVG from "@/components/AboutPageSVG";
import TeamGrid from "@/components/sections/about/TeamGrid";
import BackedCompanies from "@/components/sections/about/BackedCompanies";
import BackedPeople from "@/components/sections/about/BackedPeople";
import Footer from "@/components/Footer";

const gtSuperText = localFont({
  src: "../../app/fonts/GT-Super-Text-Book.woff2",
  variable: "--font-gt-super",
  display: "swap",
});

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="h-screen min-h-screen max-w-screen w-screen bg-black relative">
      <div className="min-w-screen min-h-screen w-screen h-[calc(100vh+64px)] absolute top-[-64px] left-0 !overflow-hidden">
        <BGComponent highlightedBg={0} />
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="w-[100%] h-[100%] sm:w-[53%] sm:h-[53%] xl:w-[53%] xl:h-[53%]">
            <AboutPageSVG />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col flex-1 justify-start items-start w-screen h-fit xl:h-full pb-12 pt-[64px]">
        <HeroText
          title="Trustless, verified intelligence."
          subtitle="Mira empowers truly reliable AI — by trustlessly verifying outputs and actions at every step."
        />
        <div className="flex flex-col w-full items-center justify-start max-xl:mt-[45vh] mt-[55vh]">
          <p
            className={`text-white text-[20px] leading-[104%] tracking-[-2%] w-full text-left px-[30px] md:px-12 mb-[32px] md:mb-[44px] ${gtSuperText.className}`}
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            {"Why we are building Mira"}
          </p>
          <WhyBuildingMira />
          <p
            className={`text-white text-[20px] leading-[104%] tracking-[-2%] w-full text-left px-[30px] md:px-12 mb-[32px] md:mb-[44px] mt-[88px] ${gtSuperText.className}`}
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            {"Team"}
          </p>
          <TeamGrid />
          <div
            className={`flex md:justify-between md:items-center flex-col md:flex-row text-white text-[20px] leading-[104%] tracking-[-2%] w-full text-left px-[30px] md:px-12 mb-[32px] md:mb-[44px] mt-[88px] gap-2`}
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <div className={`${gtSuperText.className}`}>
              {"Backed by the best"}
            </div>
            <a
              className="flex flex-row justify-start items-center xl:h-full gap-x-1.5 border-b border-[#cccccc] hover:border-white transition-all self-start"
              href="https://www.theblock.co/post/305596/crypto-ai-startup-mira-seed-funding"
              target="_blank"
            >
              <div className="text-[14px] text-[#cccccc] hover:text-white transition-all duration-500">
                Read about our fundraise
              </div>
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.52699 9.75L5.76136 8.99432L8.91335 5.84233H0.75V4.74858H8.91335L5.76136 1.60653L6.52699 0.840909L10.9815 5.29545L6.52699 9.75Z"
                  className="fill-[#cccccc] group-hover:fill-[#ffffff] transition-colors duration-500"
                />
              </svg>
            </a>
          </div>
          <BackedCompanies />
          <BackedPeople />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
