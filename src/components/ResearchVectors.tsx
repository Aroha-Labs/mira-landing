import React, { useEffect, useState } from "react";
import { IBM_Plex_Serif } from "next/font/google";
import { useInView } from "react-intersection-observer";
import LineSVGBottom from "./LineSVGBottom";

const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: "600" });

const ResearchVectors = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`w-full flex flex-col relative justify-start items-center mt-[157px] pr-[46px] ${
        isInView ? "fade-in-normal" : "opacity-0"
      }`}
    >
      <p
        className={`w-[102px] text-[#337FF1] text-center font-semibold text-[20px] leading-[19px] ${ibmPlexSerif.className}`}
      >
        Research Vectors
      </p>
      <div className="w-full flex flex-row justify-center items-center gap-x-1 mt-[26px]">
        <span className="w-16 h-16 rounded-full bg-[#EBF4FF] border border-solid border-transparent hover:border-[#337FF1] hover:bg-[#F5F9FF] hover:rotate-45 transition-all duration-300 flex justify-center items-center cursor-pointer">
          <svg
            width="41"
            height="39"
            viewBox="0 0 41 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8982 27.5L1.39818 19.5L16.8982 12.5M13.8982 27.5L16.8982 12.5M13.8982 27.5L5.89818 38.5H21.8982M13.8982 27.5L21.8982 38.5M13.8982 27.5L27.8982 24.5M16.8982 12.5L27.8982 24.5M16.8982 12.5L27.8982 1.5L39.3982 12.5L27.8982 24.5M21.8982 38.5L27.8982 24.5"
              stroke="#337FF1"
            />
          </svg>
        </span>
        <span className="w-16 h-16 rounded-full bg-[#EBF4FF] border border-solid border-transparent hover:border-[#337FF1] hover:bg-[#F5F9FF] hover:rotate-45 transition-all duration-300 flex justify-center items-center cursor-pointer">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8982 13.25V26.25M13.8982 13.25H27.8982M13.8982 13.25L20.8982 1.25L27.8982 13.25M13.8982 13.25L1.39818 19.75L13.8982 26.25M13.8982 26.25H27.8982M13.8982 26.25L20.3982 38.75L27.8982 26.25M27.8982 26.25V13.25M27.8982 26.25L39.3982 19.75L27.8982 13.25"
              stroke="#337FF1"
            />
          </svg>
        </span>
        <span className="w-16 h-16 rounded-full bg-[#EBF4FF] border border-solid border-transparent hover:border-[#337FF1] hover:bg-[#F5F9FF] hover:rotate-45 transition-all duration-300 flex justify-center items-center cursor-pointer">
          <svg
            width="45"
            height="30"
            viewBox="0 0 45 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.89818 14.75L0.898178 28.75L14.3982 22.25M3.89818 14.75L14.3982 22.25M3.89818 14.75L14.8982 7.25M14.3982 22.25L14.8982 7.25M14.3982 22.25H29.8982M14.8982 7.25H29.8982M29.8982 22.25V7.25M29.8982 22.25L40.8982 15.25M29.8982 7.25L40.8982 15.25M29.8982 7.25L43.8982 1.25L40.8982 15.25"
              stroke="#337FF1"
            />
          </svg>
        </span>
        <span className="w-16 h-16 rounded-full bg-[#EBF4FF] border border-solid border-transparent hover:border-[#337FF1] hover:bg-[#F5F9FF] hover:rotate-45 transition-all duration-300 flex justify-center items-center cursor-pointer">
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3779 14.2454L20.1392 1.59573L27.4322 16.96M12.3779 14.2454L27.4322 16.96M12.3779 14.2454L1.22802 6.45568L1.53181 22.4528M12.3779 14.2454L1.53181 22.4528M12.3779 14.2454L15.6432 28.1859M27.4322 16.96L15.6432 28.1859M27.4322 16.96L38.6391 27.7492L27.8594 39.456L15.6432 28.1859M1.53181 22.4528L15.6432 28.1859"
              stroke="#337FF1"
            />
          </svg>
        </span>
        <span className="w-16 h-16 rounded-full bg-[#EBF4FF] border border-solid border-transparent hover:border-solid hover:border-[#337FF1] hover:bg-[#F5F9FF] hover:rotate-45 transition-all duration-300 flex justify-center items-center cursor-pointer">
          <svg
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7786 5.63085L5.58621 14.8232M14.7786 5.63085L24.6781 15.5303M14.7786 5.63085L28.2136 2.09531L24.6781 15.5303M14.7786 5.63085L1.34357 1.38821L5.58621 14.8232M5.58621 14.8232L15.4857 24.7227M5.58621 14.8232L1.34357 28.2583L15.4857 24.7227M15.4857 24.7227L24.6781 15.5303M15.4857 24.7227L28.2136 28.2583L24.6781 15.5303"
              stroke="#337FF1"
            />
          </svg>
        </span>
      </div>
      <p className="mt-[35px] text-center text-[#337FF1] font-medium text-[14px] leading-[13px]">
        blockchain substrate
      </p>
      <p className="mt-[13px] max-w-[224px] tracking-[-2%] text-center text-[#455164] font-normal text-[14px] leading-[17px]">
        A novel AI ecosystem designed for collaboration, openness, and
        unparalleled scalability
      </p>
      <div className="absolute w-full top-[282px] left-[35px]">
        <LineSVGBottom />
      </div>
    </div>
  );
};

export default ResearchVectors;
