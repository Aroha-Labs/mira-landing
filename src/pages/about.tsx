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
import SidSvg from "@/images/team/sid.svg";
import NinadSvg from "@/images/team/ninad.svg";
import StoneSvg from "@/images/team/stone.svg";
import DownloadSvg from "@/images/download.svg";
import ArrowRightSVG from "@/images/arrow-right.svg";
import Link from "next/link";

const workSans = Work_Sans({ subsets: ["latin"] });
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"], weight: "600" });

const backedBy = [
    {
        name: "Balaji Srinivasan",
        company: "Network State",
    },
    {
        name: "Sandeep Nailwal",
        company: "Polygon",
    },
    {
        name: "Sameer Pitalwalla",
        company: "Google",
    },
    {
        name: "Jose Maria Macedo",
        company: "Delphi Digital",
    },
    {
        name: "Alex Svanevik",
        company: "Nansen",
    },
    {
        name: "Saneel Srini",
        company: "Ritual",
    },
    {
        name: "Ajit Tripathi",
        company: "Hadron",
    },
    {
        name: "Prabhakar Reddy",
        company: "FalconX",
    },
    {
        name: "Tekin Salimi",
        company: "Dao5",
    },
];
const teamMembers = [
    {
        name: "Karan Sirdesai",
        role: "Co-founder, CEO",
        description: "Crypto, AI & software investing at Accel, ex- BCG.",
        image: <KaranSvg className="w-[38px] h-[38px]" />,
    },
    {
        name: "Sid Doddipalli",
        role: "Co-founder, CTO",
        description:
            "CTO at Stader Labs (grew protocol to $1B+ TVL across 7 chains), chief architect @ Freewheel (acq. by Comcast) Columbia, IIT Madras.",
        image: <SidSvg className="w-[38px] h-[38px]" />,
    },
    {
        name: "Ninad Naik",
        role: "Head of Product",
        description:
            "Global head of marketplace product @ Uber eats, Amazon AI, Columbia , Michigan.",
        image: <NinadSvg className="w-[38px] h-[38px]" />,
    },
    {
        name: "Stone Gettings",
        role: "Head of Growth",
        description:
            "Growth and ecosystem @ Kadena, software, AI and crypto investing at Accel, professional basketball player across Japan, US & Portugal, Cornell.",
        image: <StoneSvg className="w-[38px] h-[38px]" />,
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
                            className={`text-[#1E2024] text-[24px] leading-[28px] font-semibold ${ibmPlexSerif.className}`}
                        >
                            Mira builds decentralised infrastructure with the
                            vision to make truly open AI performantly accessible
                            to every developer, business or community.
                        </h1>
                        {/* <p className=" text-[#455164] text-[14px] leading-[17px] max-w-[307px]">
                            Mira is the result of people who are aligned on a
                            single goal: coming together to achieve something
                            that&apos;s utterly ambitious.
                        </p> */}
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2
                            className={`text-[#3988FE] text-sm font-semibold tracking-[4.2px]`}
                        >
                            BACKED BY
                        </h2>
                        <div className="flex flex-col gap-1.5">
                            <div className="flex gap-1.5 flex-wrap items-center">
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <BitkraftSVG className="w-[107px] h-[18px]" />
                                </div>
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <FrameworkSVG className="w-[121px] h-[60px]" />
                                </div>
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <AccelSVG className="w-[54px] h-[18px]" />
                                </div>
                            </div>
                            <div className="flex gap-1.5 flex-wrap items-center md:flex-nowrap">
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <CrucibleSVG className="w-[37px] h-[37px]" />
                                </div>
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <FoliusSVG className="w-[214px] h-[34px]" />
                                </div>
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <SymbolicCapitalSVG className="w-[72px] h-[34px]" />
                                </div>
                            </div>
                            <div className="flex gap-1.5 flex-wrap items-center">
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <VelocitySVG className="w-[71px] h-[60px]" />
                                </div>
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <SaltSVG className="w-[94px] h-[27px]" />
                                </div>
                                <div className="px-[22.5px] h-[60px] border border-[#D7E7FF] flex items-center justify-center rounded">
                                    <MechanismCapitalSVG className="w-[87px] h-[34px]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {backedBy.map((backer, index) => (
                                <div
                                    key={index}
                                    className="px-[12px] h-[60px] border border-[#D7E7FF] flex flex-col items-start justify-center gap-2.5 rounded"
                                >
                                    <div className="text-xs font-semibold text-[#414141]">
                                        {backer.name}
                                    </div>
                                    <div className="text-xs opacity-60 text-[#414141]">
                                        {backer.company}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="https://www.theblock.co/post/305596/crypto-ai-startup-mira-seed-funding"
                            target="_blank"
                        >
                            <div className="flex w-full px-5 py-3 bg-[#EBF3FF] justify-between rounded-lg">
                                <h2 className={`text-[#3988FE] text-sm`}>
                                    Read about our Seed Raise
                                </h2>
                                <p className="flex items-center gap-2 text-sm text-[#3988FE] font-medium">
                                    <ArrowRightSVG />
                                </p>
                            </div>
                        </Link>
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
                                        {member.image}
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
                            <div className="grid grid-cols-[38px_1fr] gap-7">
                                <div className="w-[38px]">
                                    <div className="w-[38px] h-[38px] bg-[#3988FE] rounded-[100%]"></div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1.5">
                                        <h3 className="text-[#232526] text-[14px] font-semibold leading-[120%]">
                                            You
                                        </h3>
                                        <Link
                                            href="https://changeable-bowler-611.notion.site/49451efaffa340a59c0c9a52d8073d63?v=73f64d108b004fc5ae47ba408589c38a"
                                            target="_blank"
                                        >
                                            <p className="text-[#32353B] text-[14px] leading-[120%] underline">
                                                Visit careers page
                                            </p>
                                        </Link>
                                    </div>
                                    <p className="text-[#455164] text-[14px] opacity-60">
                                        We are looking for ambitious, smart
                                        people who push themselves and uphold
                                        themselves to a high standard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[32px] md:pl-[21px] ">
                    <Footer />
                </div>
            </div>
        </main>
    );
}
