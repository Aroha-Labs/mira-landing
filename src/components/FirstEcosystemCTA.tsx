import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FirstEcosystemSVG from "./FirstEcosystemSVG";
import { IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: "600" });

const FirstEcosystemCTA = () => {
  const [isActive, setIsActive] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    }
  }, [inView]);

  return (
    <div className="w-full pl-[73px] mt-[141px] flex justify-between items-start relative">
      <div className={`flex flex-col gap-[24px] flex-1 mt-[86px] absolute ${isActive ? "fade-in-normal" : "opacity-0"}`}>
        <p
          className={`text-[20px] font-semibold leading-[19px] text-[#464C55] w-[167px] text-left ${ibmPlexSerif.className}`}
        >
          Our First ecosystem App
        </p>
        <p className="text-[14px] font-normal tracking-[-2%] leading-[17px] text-[#455164] w-[254px] text-left">
          A novel AI ecosystem designed for collaboration, openness, and
          unparalleled scalability
        </p>
        <button className="rounded-full w-fit px-[12px] py-[5px] text-[#FBFDFF] text-[14px] font-bold tracking-[-2%] leading-[17px] bg-[#464C55]">
          Try it out now
        </button>
      </div>
      <div ref={ref}>
        <FirstEcosystemSVG isActive={isActive} />
      </div>
    </div>
  );
};

export default FirstEcosystemCTA;
