"use client";
import BGComponent from "@/components/BGComponent";
import HeroText from "@/components/HeroText";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MiraBrief from "@/components/sections/main/MiraBrief";

export default function Home() {
  const [background, setBackground] = useState<0 | 1 | 2 | 3>(0);
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);

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
    <div className="h-screen min-h-screen max-w-screen w-screen xl:!overflow-hidden bg-black relative">
      <div className="min-w-screen min-h-screen w-screen h-[calc(100vh+64px)] absolute top-[-64px] left-0 !overflow-hidden">
        <BGComponent highlightedBg={background} />
      </div>
      <div className="relative flex flex-col flex-1 justify-between items-start w-full h-fit xl:h-full pb-12 pt-[64px]">
        <HeroText
          title="Trustless, verified intelligence."
          subtitle="Mira empowers truly reliable AI — by trustlessly verifying outputs and actions at every step."
        />
        <div className="flex w-full items-center justify-between max-xl:mt-[45vh]">
          <MiraBrief
            hoveredBox={hoveredBox}
            setHoveredBox={setHoveredBox}
            setBackground={setBackground}
          />
        </div>
      </div>
    </div>
  );
}
