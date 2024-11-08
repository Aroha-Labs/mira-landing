import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-y-[55px] justify-between items-start bg-gradient-to-b from-transparent to-black py-[72px] px-[32px] md:px-12">
      <div className="flex flex-col items-start justify-start">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4827 2.45759L21.611 0L32 15.4442L28.2895 17.6697V22.817H27.5469L17.4827 7.83693V2.45759Z"
            fill="white"
          />
          <path
            d="M8.71817 7.05031L12.8464 4.59272L23.2354 20.0369L19.5249 22.2625V27.4097H18.7823L8.71817 12.4297V7.05031Z"
            fill="white"
          />
          <path
            d="M0 11.6406L4.12824 9.18299L14.5173 24.6272L10.8067 26.8527V32H10.0641L0 17.0199V11.6406Z"
            fill="white"
          />
        </svg>
        <p className="mt-[32px] md:mt-[58px] text-[16px] leading-[22px] text-white/50 tracking-[-1.3%]">
          ©2024 Aroha Labs. All rights reserved.
        </p>
      </div>
      <div className="flex flex-row items-start justify-end gap-x-[32px]">
        <div className="flex flex-col items-start justify-start">
          <p className="text-[16px] leading-[22px] text-white/50 tracking-[-1.3%] font-medium">
            Ecosystem
          </p>
          <Link
            href="/"
            className="text-[16px] leading-[22px] text-white tracking-[-1.3%] font-medium mt-2"
          >
            Flows — Beta
          </Link>
          <Link
            href="/"
            className="text-[16px] leading-[22px] text-white/30 tracking-[-1.3%] font-medium mt-2"
          >
            Evals — Coming Soon
          </Link>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-[16px] leading-[22px] text-white/50 tracking-[-1.3%] font-medium">
            Socials
          </p>
          <Link
            href="https://x.com/Mira_Network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] leading-[22px] text-white tracking-[-1.3%] font-medium mt-2"
          >
            X
          </Link>
          <Link
            href="https://github.com/Aroha-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] leading-[22px] text-white tracking-[-1.3%] font-medium mt-2"
          >
            GitHub
          </Link>
          <Link
            href="https://discord.com/invite/mira-network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] leading-[22px] text-white tracking-[-1.3%] font-medium mt-2"
          >
            Discord
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
