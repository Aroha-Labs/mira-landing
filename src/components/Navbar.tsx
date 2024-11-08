"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MiraLogo from "@/assets/images/logos/nav_logo.svg";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import NavbarPhone from "./NavbarPhone";
import { usePathname } from "next/navigation";

interface NavbarProps {
  pageName?: "main" | "writing" | "docs" | "showcase" | "about" | "social";
}

const Ellipse = ({
  color = "#5D5D5D",
  size = 3,
  className,
}: {
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 3 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="1.5" cy="1.5" r="1.5" fill={color} />
    </svg>
  );
};

const Navbar = ({ pageName = "main" }: NavbarProps) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    if (
      pathname.startsWith("/writing/") &&
      (path === "/" || path === "/about")
    ) {
      window.location.href = path; // Force page reload
    }
    setIsOpen(false);
  };

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="flex justify-between items-center w-full pt-12 px-12 max-sm:px-[30px]">
      <Link
        href="/"
        onClick={() => handleNavigation("/")}
        {...(pageName === "main" ? { "data-aos": "fade-in" } : {})}
        className="max-md:z-50 relative"
      >
        <Image src={MiraLogo} alt="logo" className="cursor-pointer" />
      </Link>
      <div
        className={`flex flex-row justify-end items-center gap-x-4 text-[13px] leading-[97%] max-md:hidden`}
        {...(pageName === "main"
          ? { "data-aos": "fade-in", "data-aos-delay": "100" }
          : {})}
      >
        <div className="relative">
          <Link
            href="/writing"
            className={`relative flex flex-row items-center transition-all duration-500 ${
              hoveredLink && hoveredLink !== "writing" ? "blur-[2px]" : ""
            } ${
              pageName === "main" ||
              pageName === "writing" ||
              pathname.startsWith("/writing/")
                ? "text-white"
                : "text-white/40"
            }`}
            onMouseEnter={() => setHoveredLink("writing")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Ellipse
              color="#105C43"
              size={6}
              className="absolute top-[-5px] right-[-10px]"
            />
            <p>Writing</p>
          </Link>
          <div
            className={`absolute top-full p-6 gap-y-1.5 flex flex-col justify-between items-start left-0 w-[382px] h-[133px] bg-[#000D05]/15 backdrop-blur-sm border border-[#072A1F] mt-4 transition-opacity duration-300 ${
              hoveredLink === "writing"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-[12px] leading-[150%] text-[#506057]">
              Introducing Mira
            </p>
            <p className="text-[14px] leading-[150%] text-white">
              {`The future of AI isn't just about more powerful models - it's about building systems we can actually trust.`}
            </p>
          </div>
        </div>
        <Ellipse
          className={`${hoveredLink ? "blur-[2px]" : ""} ${
            pageName === "main" || pathname.startsWith("/writing/")
              ? "text-white"
              : "text-white/40"
          }`}
        />
        <div className="relative">
          <div
            className={`relative flex flex-row items-center transition-all duration-500 cursor-pointer ${
              hoveredLink && hoveredLink !== "docs" ? "blur-[2px]" : ""
            } ${
              pageName === "main" ||
              pageName === "docs" ||
              pathname.startsWith("/writing/")
                ? "text-white"
                : "text-white/40"
            }`}
            onMouseEnter={() => setHoveredLink("docs")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <p>Docs</p>
          </div>
          <div
            className={`absolute top-full p-6 flex flex-col gap-y-1.5 justify-between items-start left-[-80px] w-[382px] h-[133px] bg-[#000D05]/15 backdrop-blur-sm border border-[#072A1F] mt-4 transition-opacity duration-300 ${
              hoveredLink === "docs"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-[12px] leading-[150%] text-[#506057]">Docs</p>
            <p className="text-[14px] leading-[150%] text-white">
              Get to know and use the most efficient way to implement and deploy
              AI workflows. Coming soon.
            </p>
          </div>
        </div>
        <Ellipse
          className={`${hoveredLink ? "blur-[2px]" : ""} ${
            pageName === "main" || pathname.startsWith("/writing/")
              ? "text-white"
              : "text-white/40"
          }`}
        />
        <div className="relative">
          <div
            className={`relative flex flex-row items-center transition-all duration-500 cursor-pointer ${
              hoveredLink && hoveredLink !== "showcase" ? "blur-[2px]" : ""
            } ${
              pageName === "main" ||
              pageName === "showcase" ||
              pathname.startsWith("/writing/")
                ? "text-white"
                : "text-white/40"
            }`}
            onMouseEnter={() => setHoveredLink("showcase")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <p>Showcase</p>
          </div>
          <div
            className={`absolute top-full p-6 flex flex-col gap-y-1.5 justify-between items-start left-[-150px] w-[382px] h-[133px] bg-[#000D05]/15 backdrop-blur-sm border border-[#072A1F] mt-4 transition-opacity duration-300 ${
              hoveredLink === "showcase"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-[12px] leading-[150%] text-[#506057]">
              Showcase
            </p>
            <p className="text-[14px] leading-[150%] text-white">
              A flourishing ecosystem of user centric AI apps, with thousands of
              users and millions of inferences— Revealing soon.
            </p>
          </div>
        </div>
        <Ellipse
          className={`${hoveredLink ? "blur-[2px]" : ""} ${
            pageName === "main" || pathname.startsWith("/writing/")
              ? "text-white"
              : "text-white/40"
          }`}
        />
        <Link
          href="/about"
          onClick={() => handleNavigation("/about")}
          className={`transition-all duration-500 ${
            hoveredLink && hoveredLink !== "about" ? "blur-[2px]" : ""
          } ${
            pageName === "main" ||
            pageName === "about" ||
            pathname.startsWith("/writing/")
              ? "text-white"
              : "text-white/40"
          }`}
          onMouseEnter={() => setHoveredLink("about")}
          onMouseLeave={() => setHoveredLink(null)}
        >
          About
        </Link>
        <Ellipse
          className={`${hoveredLink ? "blur-[2px]" : ""} ${
            pageName === "main" || pathname.startsWith("/writing/")
              ? "text-white"
              : "text-white/40"
          }`}
        />
        <div className="relative">
          <div
            className={`transition-all cursor-pointer flex flex-row items-center gap-x-1 duration-500 ${
              hoveredLink && hoveredLink !== "social" ? "blur-[2px]" : ""
            } ${
              pageName === "main" ||
              pageName === "social" ||
              pathname.startsWith("/writing/")
                ? "text-white"
                : "text-white/40"
            }`}
            onMouseEnter={() => setHoveredLink("social")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <p>Social</p>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-500 ${
                hoveredLink === "social" ? "rotate-0" : "rotate-180"
              }`}
            >
              <path
                d="M9.75 8L6 4.25L2.25 8"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`absolute top-full pt-3 flex flex-col justify-between items-start left-0 w-[80px] bg-[#000D05]/15 backdrop-blur-sm mt-0 transition-opacity duration-300 ${
              hoveredLink === "social"
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            onMouseEnter={() => setHoveredLink("social")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              href="https://x.com/Mira_Network"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#105C43] transition-colors duration-300 py-2"
            >
              X
            </Link>
            <Link
              href="https://github.com/Aroha-Labs"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#105C43] transition-colors duration-300 py-2"
            >
              GitHub
            </Link>
            <Link
              href="https://discord.com/invite/mira-network"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-[#105C43] transition-colors duration-300 py-2"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <NavbarPhone isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;
