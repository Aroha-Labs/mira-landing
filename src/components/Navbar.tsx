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
                href="https://changeable-bowler-611.notion.site/49451efaffa340a59c0c9a52d8073d63?v=73f64d108b004fc5ae47ba408589c38a"
                target="_blank"
            >
                <p className="cursor-pointer hover:text-[#4F95FF] transition-all duration-300">
                    +careers
                </p>
            </Link>
        </div>
    );
};

export default Navbar;
