import Image from "next/image";
import { Work_Sans } from "next/font/google";
import { IBM_Plex_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import LineSVG from "@/components/LineSVG";
import MainDiagramSVG from "@/components/MainDiagramSVG";
import CommonAboutComponent from "@/components/CommonAboutComponent";
import FlowSVGFirst from "@/components/FlowSVGFirst";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import EvaluatorNetworkSVG from "@/components/EvaluatorNetworkSVG";
import KnowledgeGraphSVG from "@/components/KnowledgeGraphSVG";
import UserFeedbackSVG from "@/components/UserFeedbackSVG";
import MiraChainSVG from "@/components/MiraChainSVG";
import ResearchVectors from "@/components/ResearchVectors";
import FirstEcosystemCTA from "@/components/FirstEcosystemCTA";
import ComingSoonSVG from "@/components/ComingSoonSVG";
import Footer from "@/components/Footer";
import MainDiagramPhone from "@/components/MainDiagramPhone";
import Link from "next/link";
import MiraSvg from "@/images/mira.svg";

const workSans = Work_Sans({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: "600" });

export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const [isSecondActive, setIsSecondActive] = useState(false);
    const [isThirdActive, setIsThirdActive] = useState(false);
    const [isFourthActive, setIsFourthActive] = useState(false);
    const [isFifthActive, setIsFifthActive] = useState(false);
    const [isComingSoonActive, setIsComingSoonActive] = useState(false);
    const [isComingSoonPhoneActive, setIsComingSoonPhoneActive] =
        useState(false);

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

    const { ref: comingSoonPhoneRef, inView: comingSoonPhoneInView } =
        useInView({
            triggerOnce: true,
            threshold: 0.2,
        });

    const researchVectorsRef = useRef<HTMLDivElement>(null);

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

    const handleResearchClick = () => {
        if (researchVectorsRef.current) {
            researchVectorsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main
            className={`flex h-screen overflow-y-scroll overflow-x-hidden flex-col bg-white items-center justify-start ${workSans.className}`}
        >
            <div className="w-full md:max-w-[574px] flex flex-col justify-start items-start relative">
                <div className="absolute w-full top-0 left-[83px] max-md:hidden">
                    <LineSVG />
                </div>
                <Navbar onResearchClick={handleResearchClick} />
                <div className="flex flex-col justify-start max-md:w-full min-[450px]:max-md:items-center max-md:items-start items-start pl-[30px] md:pl-[129px] mt-[76px] fade-in-second relative z-[1]">
                    <div className="flex flex-row justify-start items-center w-full max-md:max-w-[307px] gap-2">
                        <MiraSvg className="h-6 w-[72px]" />{" "}
                    </div>

                    <p
                        className={`max-w-[345px] max-md:max-w-[307px] ${ibmPlexSerif.className} text-[#1E2024] text-[24px] leading-[23px] mt-6 font-semibold`}
                    >
                        Decentralised Infrastructure to Universalise AI
                    </p>
                    <p className="mt-[28px] text-[#455164] text-[14px] leading-[17px] max-w-[307px]">
                        Build complex AI products.
                        <br />
                        Contribute and monetise AI resources.
                        <br />
                        Maintained and advanced by the community.
                    </p>
                    <div className="flex max-md:max-w-[307px] flex-col md:flex-row max-md:w-full justify-start items-start md:items-center mt-7 gap-x-3 max-md:gap-y-3">
                        <Link
                            href="https://kmbzgfz2ocz.typeform.com/to/mPIvyopO"
                            target="_blank"
                            className="max-md:w-full"
                        >
                            <button className="rounded-full max-md:w-full text-white font-medium text-[14px] leading-[17px] tracking-[-2%] px-4 py-2 bg-[#4F95FF] hover:bg-[#4F88DD] transition-all duration-300">
                                Build on Mira
                            </button>
                        </Link>
                        <Link
                            href={"https://klokapp.ai/login"}
                            target="_blank"
                            className="max-md:w-full"
                        >
                            <button className="rounded-full max-md:w-full text-[#4F95FF] font-medium text-[14px] leading-[17px] tracking-[-2%] px-4 py-2 bg-[#EDF4FF] border border-solid border-[#CDE1FF] hover:bg-[#DAE9FF] transition-all duration-300">
                                Try <b>Klok</b> — Our first ecosystem app
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="relative z-[1] mt-[62px] max-md:hidden">
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
                            title="Flow market"
                            description="Community-sourced & maintained workflows to elevate the AI developer experience"
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
                            title="Evaluator network"
                            description="Independant, incentivised & accountable evaluators to enable trusted discovery & rating of Flows"
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
                            title="Knowledge graph"
                            description="Framework for community-sourcing structured knowledge graphs for ML operations"
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
                            title="User insights system"
                            description="Real-time Feedback framework to constantly adapt ML models to your users' preferences"
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
                            title="Mira chain"
                            description="Trusted blockchain layer for sovereign ownership of AI resources & attribution of value creation"
                        />
                        <MiraChainSVG isActive={isFifthActive} />
                    </div>
                </div>
                <div
                    ref={researchVectorsRef}
                    className="relative z-[1] flex justify-center w-full items-start"
                    id="research"
                >
                    <ResearchVectors />
                </div>
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
