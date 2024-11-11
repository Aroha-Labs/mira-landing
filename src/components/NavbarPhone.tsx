"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const NavbarPhone = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="relative z-50">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          } absolute`}
        >
          <path
            d="M3.75 12H20.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 6H20.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.75 18H20.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <path
            d="M18.75 5.25L5.25 18.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.75 18.75L5.25 5.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-auto ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } flex flex-col justify-start items-start px-[32px] pt-[111px]`}
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.9) 20%, rgba(0,0,0,0) 50%), radial-gradient(circle at 60% 100%, black 10%, transparent 100%)`,
        }}
      >
        <Link
          href="/writing"
          className="text-white text-[16px] leading-[97%] relative"
          onClick={handleLinkClick}
        >
          <p>Writing</p>
          <div className="absolute top-[-4px] right-[-4px] w-[6px] h-[6px] bg-[#105C43] rounded-full"></div>
        </Link>
        <div
          className={`p-6 flex flex-col gap-y-1.5 justify-between items-start w-full h-fit bg-[#000D05]/15 backdrop-blur-sm border border-[#072A1F] mt-4 transition-opacity duration-300`}
        >
          <p className="text-[12px] leading-[150%] text-[#506057]">
            Introducing Mira
          </p>
          <p className="text-[14px] leading-[150%] text-white">
            {`The future of AI isn't just about more powerful models - it's about building systems we can actually trust.`}
          </p>
        </div>
        <div className="text-white/40 text-[16px] leading-[97%] relative mt-6">
          <p>Docs</p>
        </div>
        <div className="text-white/40 text-[16px] leading-[97%] relative mt-6">
          <p>Showcase</p>
        </div>
        <Link
          href="/about"
          className="text-white text-[16px] leading-[97%] relative mt-6"
          onClick={handleLinkClick}
        >
          <p>About</p>
        </Link>
        <Link
          href="https://x.com/Mira_Network"
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] leading-[97%] relative mt-6"
          onClick={handleLinkClick}
        >
          <p>X<span className="inline md:hidden"> (prev. Twitter)</span></p>
        </Link>
        <Link
          href="https://discord.com/invite/mira-network"
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] leading-[97%] relative mt-6"
          onClick={handleLinkClick}
        >
          <p>Discord</p>
        </Link>
      </div>
    </>
  );
};

export default NavbarPhone;
