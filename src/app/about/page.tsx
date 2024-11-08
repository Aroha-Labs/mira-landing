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
          <p
            className={`text-white text-[20px] leading-[104%] tracking-[-2%] w-full text-left px-[30px] md:px-12 mb-[32px] md:mb-[44px] mt-[88px] ${gtSuperText.className}`}
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            {"Backed by the best"}
          </p>
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
