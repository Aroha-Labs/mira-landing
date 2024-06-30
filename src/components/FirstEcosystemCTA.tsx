import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import FirstEcosystemSVG from "./FirstEcosystemSVG";
import { IBM_Plex_Serif } from "next/font/google";
import FirstEcosystemPhone from "./FirstEcosystemPhone";

const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: "600" });

const FirstEcosystemCTA = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActivePhone, setIsActivePhone] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const { ref: refPhone, inView: inViewPhone } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    }
  }, [inView]);

  useEffect(() => {
    if (inViewPhone) {
      console.log("inViewPhone");
      setIsActivePhone(true);
    }
  }, [inViewPhone]);

  return (
    <div className="w-full md:pl-[73px] mt-[141px] flex max-md:flex-col-reverse max-md:w-full justify-start md:justify-between items-center md:items-start relative">
      <div className={`md:pl-[37px] relative z-[1] flex flex-col max-md:items-center gap-[24px] md:flex-1 mt-[32px] md:mt-[86px] md:absolute ${isActive || isActivePhone ? "fade-in-normal" : "opacity-0"}`}>
        <p
          className={`text-[20px] font-semibold leading-[19px] text-[#464C55] w-[167px] text-left max-md:text-center  ${ibmPlexSerif.className}`}
        >
          Klok: Our First ecosystem App
        </p>
        <p className="text-[14px] font-normal tracking-[-2%] leading-[17px] text-[#455164] w-[254px] text-left max-md:text-center">
          A novel AI ecosystem designed for collaboration, openness, and
          unparalleled scalability
        </p>
        <button className="rounded-full w-fit px-[16px] py-[8px] text-[#FBFDFF] text-[14px] font-medium tracking-[-2%] leading-[17px] bg-[#4F95FF]">
          Try it out now
        </button>
      </div>
      <div ref={ref} className="max-md:hidden">
        <FirstEcosystemSVG isActive={isActive} />
      </div>
      <div ref={refPhone} className="md:hidden">
        <FirstEcosystemPhone isActive={isActivePhone} />
      </div>
    </div>
  );
};

export default FirstEcosystemCTA;
