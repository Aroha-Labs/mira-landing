import { Work_Sans } from "next/font/google";
import { IBM_Plex_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BitkraftSVG from "@/images/investors/bitcraft.svg";
import FrameworkSVG from "@/images/investors/framework.svg";
import AccelSVG from "@/images/investors/accel.svg";
import CrucibleSVG from "@/images/investors/crucible.svg";
import FoliusSVG from "@/images/investors/folius.svg";
import MechanismCapitalSVG from "@/images/investors/mechanism-capital.svg";
import SymbolicCapitalSVG from "@/images/investors/symbolic-capital.svg";
import VelocitySVG from "@/images/investors/velocity.svg";
import SaltSVG from "@/images/investors/salt.svg";
import KaranSvg from "@/images/team/karan.svg";
import DownloadSvg from "@/images/download.svg";
import Link from "next/link";

const workSans = Work_Sans({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: "600" });

const teamMembers = [
    {
        name: "Karan Sirdesai",
        role: "Co-founder, CEO",
        description:
            "Crypto, AI & software investing at Accel, ex- BCG. Led crypto seed to series D investing",
        image: "/path/to/karan-image.png",
    },
    {
        name: "Sid",
        role: "Co-founder, CTO",
        description:
            "CTO at Stader (grew protocol to $1B+ TVL across 7 chains), chief architect of 2 AI companies, Columbia, IIT Madras",
        image: "/path/to/sid-image.png",
    },
    {
        name: "Ninad",
        role: "Head of Product",
        description:
            "Global head of marketplace product @ Uber eats, Amazon AI leadership team, Columbia, Michigan",
        image: "/path/to/ninad-image.png",
    },
    {
        name: "Stone",
        role: "Head of Growth",
        description:
            "Global head of marketplace product @ Uber eats, Amazon AI leadership team, Columbia, Michigan",
        image: "/path/to/stone-image.png",
    },
];

export default function About() {
    return (
        <main
            className={`flex h-screen overflow-y-scroll overflow-x-hidden flex-col bg-white items-center justify-start ${workSans.className}`}
        >
            <div className="w-full md:max-w-[574px] flex flex-col gap-[55px] justify-start items-start relative">
                <svg
                    className="absolute top-0 left-[83px] md:block hidden"
                    width="1"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="100%"
                        stroke="#4F95FF"
                        strokeWidth="1"
                    />
                </svg>

                <Navbar onResearchClick={() => {}} />
                <div className="px-[32px] md:pl-[129px] md:pr-0 flex flex-col gap-[72px]">
                    <div className="flex flex-col gap-6">
                        <h1
                            className={`text-[#1E2024] text-[24px] leading-[23px] font-semibold ${ibmPlexSerif.className}`}
                        >
                            We&apos;re a team of believers and pioneers.
                        </h1>
                        <p className=" text-[#455164] text-[14px] leading-[17px] max-w-[307px]">
                            Mira is the result of people who are aligned on a
                            single goal: coming together to achieve something
                            that&apos;s utterly ambitious.
                        </p>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h2
                            className={`text-[#3988FE] text-sm font-semibold tracking-[4.2px]`}
                        >
                            INVESTORS
                        </h2>
                        <div className="flex flex-col gap-8">
                            <div className="flex gap-4 flex-wrap items-center">
                                <BitkraftSVG />
                                <FrameworkSVG />
                            </div>
                            <div className="flex gap-8 flex-wrap items-center">
                                <AccelSVG />
                                <CrucibleSVG />
                                <FoliusSVG />
                            </div>
                            <div className="flex gap-8 flex-wrap items-center">
                                <MechanismCapitalSVG />
                                <SymbolicCapitalSVG />
                                <VelocitySVG />
                                <SaltSVG />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <h2
                            className={`text-[#3988FE] text-sm font-semibold tracking-[4.2px]`}
                        >
                            TEAM
                        </h2>
                        <div className="flex flex-col gap-8">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-[38px_1fr] gap-7"
                                >
                                    <div className="w-[38px]">
                                        <KaranSvg className="w-[38px] h-[38px]" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-1.5">
                                            <h3 className="text-[#232526] text-[14px] font-semibold leading-[120%]">
                                                {member.name}
                                            </h3>
                                            <p className="text-[#32353B] text-[14px] leading-[120%]">
                                                {member.role}
                                            </p>
                                        </div>
                                        <p className="text-[#455164] text-[14px] opacity-60">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-7">
                                <div className="w-[38px]">
                                    <div className="w-[38px] h-[38px] bg-[#3988FE] rounded-[100%]"></div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1.5">
                                        <h3 className="text-[#232526] text-[14px] font-semibold leading-[120%]">
                                            You
                                        </h3>
                                        <Link href="/careers">
                                            <p className="text-[#32353B] text-[14px] leading-[120%] underline">
                                                Visit careers page
                                            </p>
                                        </Link>
                                    </div>
                                    <p className="text-[#455164] text-[14px] opacity-60">
                                        We are looking for ambitious, smart
                                        people who push themselves and uphold
                                        themselves to a standard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/BrandKit.zip">
                        <div className="flex w-full px-5 py-3 bg-[#EBF3FF] justify-between rounded-lg">
                            <h2
                                className={`text-[#3988FE] text-sm font-semibold tracking-[4.2px]`}
                            >
                                BRAND KIT
                            </h2>
                            <p className="flex items-center gap-2 text-sm text-[#3988FE] font-medium">
                                Download <DownloadSvg />
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="px-[32px] md:pl-[21px] ">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
