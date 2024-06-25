import Image from "next/image";
import { Work_Sans } from "next/font/google";
import { IBM_Plex_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import LineSVG from "@/components/LineSVG";
import MainDiagramSVG from "@/components/MainDiagramSVG";
import CommonAboutComponent from "@/components/CommonAboutComponent";
import FlowSVGFirst from "@/components/FlowSVGFirst";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import EvaluatorNetworkSVG from "@/components/EvaluatorNetworkSVG";
import KnowledgeGraphSVG from "@/components/KnowledgeGraphSVG";
import UserFeedbackSVG from "@/components/UserFeedbackSVG";
import MiraChainSVG from "@/components/MiraChainSVG";
import ResearchVectors from "@/components/ResearchVectors";
import LineSVGBottom from "@/components/LineSVGBottom";
import FirstEcosystemCTA from "@/components/FirstEcosystemCTA";
import ComingSoonSVG from "@/components/ComingSoonSVG";
import Footer from "@/components/Footer";
import MainDiagramPhone from "@/components/MainDiagramPhone";

const workSans = Work_Sans({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: "600" });

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);
  const [isFourthActive, setIsFourthActive] = useState(false);
  const [isFifthActive, setIsFifthActive] = useState(false);
  const [isComingSoonActive, setIsComingSoonActive] = useState(false);
  const [isComingSoonPhoneActive, setIsComingSoonPhoneActive] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const { ref: fourthRef, inView: fourthInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const { ref: fifthRef, inView: fifthInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const { ref: comingSoonRef, inView: comingSoonInView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const { ref: comingSoonPhoneRef, inView: comingSoonPhoneInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsActive(true);
    }
  }, [inView]);

  useEffect(() => {
    if (secondInView) {
      setIsSecondActive(true);
    }
  }, [secondInView]);

  useEffect(() => {
    if (thirdInView) {
      setIsThirdActive(true);
    }
  }, [thirdInView]);

  useEffect(() => {
    if (fourthInView) {
      setIsFourthActive(true);
    }
  }, [fourthInView]);

  useEffect(() => {
    if (fifthInView) {
      setIsFifthActive(true);
    }
  }, [fifthInView]);

  useEffect(() => {
    if (comingSoonInView) {
      setIsComingSoonActive(true);
    }
  }, [comingSoonInView]);

  useEffect(() => {
    if (comingSoonPhoneInView) {
      setIsComingSoonPhoneActive(true);
    }
  }, [comingSoonPhoneInView]);

  return (
    <main
      className={`flex h-screen overflow-y-scroll overflow-x-hidden flex-col bg-white items-center justify-start ${workSans.className}`}
    >
      <div className="w-full md:max-w-[574px] flex flex-col justify-start items-start relative">
        <div className="absolute w-full top-0 left-[35px] max-md:hidden">
          <LineSVG />
        </div>
        <Navbar />
        <div className="flex flex-col justify-start items-start pl-[30px] md:pl-[79px] mt-[76px] fade-in-second relative z-[1]">
          <p className="text-[#3284FF] font-semibold text-[20px] leading-[19px]">
            *mira
          </p>
          <p
            className={`max-w-[311px] ${ibmPlexSerif.className} text-[#1E2024] text-[24px] leading-[23px] font-semibold mt-3`}
          >
            Decentralised Infrastructure to expand access to advanced AI
          </p>
          <p className="mt-[28px] text-[#455164] text-[14px] leading-[17px] max-w-[307px]">
            Build complex AI products. Contribute and monetise AI resources.
            Maintained and advanced by the community.
          </p>
        </div>
        <div className="relative z-[1] mt-[39px] max-md:hidden">
          <MainDiagramSVG />
        </div>
        <div className="relative z-[1] mt-[68px] md:hidden w-full flex justify-center items-center">
          <MainDiagramPhone />
        </div>
        <div className="flex flex-col w-full justify-start items-start mt-[143px] relative z-[1]">
          <div
            ref={ref}
            className={`flex flex-col-reverse md:flex-row w-full justify-start md:justify-between items-center max-md:px-[36px] md:pr-[21.5px] first-about ${
              isActive ? "fade-in-normal" : "opacity-0"
            }`}
          >
            <CommonAboutComponent
              title="flow market"
              description="A novel AI ecosystem designed for collaboration, openness, and unparalleled scalability"
            />
            <FlowSVGFirst isActive={isActive} />
          </div>
          <div
            ref={secondRef}
            className={`flex flex-col-reverse md:flex-row w-full justify-start md:justify-between items-center max-md:px-[36px] md:pr-[21.5px] second-about ${
              isSecondActive ? "fade-in-normal" : "opacity-0"
            } md:-mt-[40px] mt-[80px]`}
          >
            <CommonAboutComponent
              title="evaluator network"
              description="A novel AI ecosystem designed for collaboration, openness, and unparalleled scalability"
            />
            <EvaluatorNetworkSVG isActive={isSecondActive} />
          </div>
          <div
            ref={thirdRef}
            className={`flex flex-col-reverse md:flex-row w-full justify-start md:justify-between items-center max-md:px-[36px] md:pr-[21.5px] third-about ${
              isThirdActive ? "fade-in-normal" : "opacity-0"
            } md:-mt-[40px] mt-[80px]`}
          >
            <CommonAboutComponent
              title="knowledge graph"
              description="A novel AI ecosystem designed for collaboration, openness, and unparalleled scalability"
            />
            <KnowledgeGraphSVG isActive={isThirdActive} />
          </div>
          <div
            ref={fourthRef}
            className={`flex flex-col-reverse md:flex-row w-full justify-start md:justify-between items-center max-md:px-[36px] md:pr-[21.5px] fourth-about ${
              isFourthActive ? "fade-in-normal" : "opacity-0"
            } md:-mt-[40px] mt-[80px]`}
          >
            <CommonAboutComponent
              title="user feedback loops"
              description="A novel AI ecosystem designed for collaboration, openness, and unparalleled scalability"
            />
            <UserFeedbackSVG isActive={isFourthActive} />
          </div>
          <div
            ref={fifthRef}
            className={`flex flex-col-reverse md:flex-row w-full justify-start md:justify-between items-center max-md:px-[36px] md:pr-[21.5px] fifth-about ${
              isFifthActive ? "fade-in-normal" : "opacity-0"
            } md:-mt-[40px] mt-[80px]`}
          >
            <CommonAboutComponent
              title="mira chain"
              description="A novel AI ecosystem designed for collaboration, openness, and unparalleled scalability"
            />
            <MiraChainSVG isActive={isFifthActive} />
          </div>
        </div>
        <ResearchVectors />
        <FirstEcosystemCTA />
        <div
          ref={comingSoonRef}
          className="mt-[104px] relative z-[1] max-md:hidden"
        >
          <ComingSoonSVG isActive={isComingSoonActive} />
        </div>
        <div
          ref={comingSoonPhoneRef}
          className="mt-[104px] md:hidden relative z-[1] max-md:pl-[28px] max-md:overflow-hidden"
        >
          <ComingSoonSVG isActive={isComingSoonPhoneActive} />
        </div>
        <Footer />
      </div>
    </main>
  );
}
