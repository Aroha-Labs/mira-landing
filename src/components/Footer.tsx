import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <div className="mt-[90px] mb-[47px] md:mb-[122px] md:pl-[108px] flex flex-col justify-start items-center max-md:w-full md:items-start">
            <p className="text-[#697383] text-[14px] leading-[13.3px]">
                © 2024 Mira. All rights reserved.
            </p>
            <div className="flex flex-row gap-x-[12px] text-[#4F95FF] text-[14px] leading-[17px] mt-[12px]">
                <Link href="https://x.com/Mira_Network" target="_blank">
                    <p className="cursor-pointer hover:text-[#464C55] transition-all duration-300">
                        +twitter
                    </p>
                </Link>
                <Link
                    href="https://discord.com/invite/2PpMdXhehv"
                    target="_blank"
                >
                    <p className="cursor-pointer hover:text-[#464C55] transition-all duration-300">
                        +discord
                    </p>
                </Link>
                <Link
                    href="https://www.linkedin.com/company/mira-aroha-labs/about/"
                    target="_blank"
                >
                    <p className="cursor-pointer hover:text-[#464C55] transition-all duration-300">
                        +linkedin
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
