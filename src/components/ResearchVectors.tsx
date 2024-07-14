import React, { useEffect, useState, useRef, useMemo } from "react";
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

    const spansRef = useRef<HTMLSpanElement[]>([]);
    const [animationIndex, setAnimationIndex] = useState(0);
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);
    const activeIndex = useMemo(() => {
        return clickedIndex ?? animationIndex;
    }, [animationIndex, clickedIndex]);

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        }
    }, [inView]);

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setAnimationIndex(
                    (prevIndex) => (prevIndex + 1) % spansRef.current.length
                );
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isInView]);

    const svgs = [
        <svg
            key="svg1"
            width="31"
            height="27"
            viewBox="0 0 31 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.3757 9.13538L15.5126 17.712M20.3757 9.13538L25.2713 17.712M20.3757 9.13538L10.6602 9.11342M20.3757 9.13538L15.5126 1L10.6602 9.11342M15.5126 17.712L20.3757 26.2556M15.5126 17.712L5.81855 17.712M20.3757 26.2556L25.2713 17.712M20.3757 26.2556L10.6817 26.2776M20.3757 26.2556L30 26.2556L25.2713 17.712M10.6602 9.11342L5.81855 17.712M5.81855 17.712L10.6817 26.2776M5.81855 17.712L1.12404 26.2776L10.6817 26.2776"
                stroke="#4F95FF"
            />
        </svg>,
        <svg
            key="svg2"
            width="30"
            height="24"
            viewBox="0 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.765381 17.6939V6.61118M0.765381 17.6939L9.71286 12.7117M0.765381 17.6939L9.71286 23.4894M0.765381 6.61118L9.71286 12.7117M0.765381 6.61118L9.71286 0.51062M9.71286 12.7117V0.51062M9.71286 12.7117H20.2872M9.71286 12.7117V23.4894M9.71286 0.51062H20.2872M20.2872 12.7117V0.51062M20.2872 12.7117L29.2346 7.01788M20.2872 12.7117L29.2346 17.6939M20.2872 12.7117V23.4894M20.2872 0.51062L29.2346 7.01788M29.2346 7.01788V17.6939M9.71286 23.4894H20.2872M29.2346 17.6939L20.2872 23.4894"
                stroke="#4F95FF"
            />
        </svg>,
        <svg
            key="svg3"
            width="30"
            height="34"
            viewBox="0 0 30 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14.9981 0.999757L1.12109 9.00228L1.12173 25.0158L14.9981 32.9998L28.8791 25.0158V8.99274L14.9981 0.999757Z"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
            <path
                d="M15.002 1.02363V32.9685"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
            <path
                d="M28.8372 9.0147L1.16602 24.9768"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
            <path
                d="M1.16602 9.0147L28.8372 24.9768"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
        </svg>,
        <svg
            key="svg4"
            width="30"
            height="34"
            viewBox="0 0 30 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M28.8759 24.9927L14.995 17.0002L1.66699 25.016L14.995 33L28.8764 25.016L28.8759 16.996"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
            <path
                d="M1.12402 8.99747L15.0012 17L28.8821 9.00701L15.0012 0.999717L1.12402 9.00224L1.12456 16.9958"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
            <path
                d="M1.11856 17.0007L14.9873 24.9629C14.9931 24.9629 14.9979 24.9629 15.0037 24.9629L28.8756 16.9996C28.8756 16.9975 28.8756 16.9969 28.8756 16.9948L14.9952 9.03205L1.11856 16.9991C1.11803 16.9996 1.11803 17.0001 1.11856 17.0007Z"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
            <path
                d="M14.9963 1.00682V9.02155"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
            <path
                d="M14.9963 24.9782V32.9934"
                stroke="#4F95FF"
                strokeMiterlimit="10"
            />
        </svg>,
    ];

    const titles = [
        "Game theoretic ML systems",
        "Verifiable inference",
        "Stake-based model evaluation",
        "on-chain AI resource markets",
    ];

    const descriptions = [
        "Getting the best out of leveraging model ensembels and adversarial systems using economic primitives.",
        "Striking a balance between multiple truth systems for high performance verifiability of AI operations.",
        "Building robust, trusted & self improving eval systems for a multi-model.",
        "novel attribution systems for collaboration of AI resources at scale.",
    ];

    return (
        <div
            ref={ref}
            className={`w-full flex flex-col relative justify-start items-center mt-[157px] md:pl-[20px] ${
                isInView ? "fade-in-normal" : "opacity-0"
            }`}
        >
            <p
                className={`w-[102px] text-[#4F95FF] text-center font-semibold text-[20px] leading-[19px] ${ibmPlexSerif.className}`}
            >
                Research Vectors
            </p>
            <div className="w-full flex flex-row justify-center items-center gap-x-1 mt-[26px]">
                {svgs.map((svg, index) => (
                    <span
                        key={index}
                        ref={(el) => {
                            if (el) spansRef.current[index] = el;
                        }}
                        className={`w-16 h-16 rounded-full bg-[#EBF4FF] flex justify-center items-center cursor-pointer ${
                            activeIndex === index
                                ? "border border-[#4F95FF] bg-[#F5F9FF]"
                                : "border-2 border-transparent"
                        } transition-all duration-300`}
                        onClick={() => setClickedIndex(index)}
                    >
                        {svg}
                    </span>
                ))}
            </div>
            <p className="mt-[35px] text-center text-[#4F95FF] font-medium text-[14px] leading-[13px]">
                {titles[activeIndex]}
            </p>
            <p className="mt-[13px] max-w-[224px] min-h-[68px] tracking-[-2%] text-center text-[#455164] font-normal text-[14px] leading-[17px]">
                {descriptions[activeIndex]}
            </p>
            <div className="absolute w-full top-[282px] left-[36px] max-md:hidden">
                <LineSVGBottom />
            </div>
        </div>
    );
};

export default ResearchVectors;
