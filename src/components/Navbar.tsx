import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({ onResearchClick }: { onResearchClick: () => void }) => {
    const pathname = usePathname();

    return (
        <div className="fade-in-first relative z-[1] flex w-full justify-start items-center pl-[34px] md:pl-[129px] gap-x-8 text-[#455164] text-[14px] leading-[17px] pb-3 pt-[39px] md:pt-[37px]">
            <Link href="/">
                <p
                    className={cn(
                        "cursor-pointer transition-all duration-300",
                        pathname === "/"
                            ? "text-[#4F95FF]"
                            : "text-[#455164] hover:text-[#4F95FF]"
                    )}
                >
                    {pathname === "/" ? "*mira" : "+mira"}
                </p>
            </Link>
            {pathname === "/" ? (
                <p
                    className="cursor-pointer hover:text-[#4F95FF] transition-all duration-300"
                    onClick={onResearchClick}
                >
                    +research
                </p>
            ) : (
                <Link href="/#research">
                    <p className="cursor-pointer hover:text-[#4F95FF] transition-all duration-300">
                        +research
                    </p>
                </Link>
            )}

            <Link href="/about">
                <p
                    className={cn(
                        "cursor-pointer transition-all duration-300",
                        pathname === "/about"
                            ? "text-[#4F95FF]"
                            : "text-[#455164] hover:text-[#4F95FF]"
                    )}
                >
                    {pathname === "/about" ? "*about" : "+about"}
                </p>
            </Link>
            <Link
                href="https://blog.mira.network"
                target="_blank"
            >
                <p className="cursor-pointer hover:text-[#4F95FF] transition-all duration-300">
                    +blog
                </p>
            </Link>
        </div>
    );
};

export default Navbar;
