import React from "react";

const Footer = () => {
  return (
    <div className="mt-[90px] mb-[47px] md:mb-[122px] md:pl-[108px] flex flex-col justify-start items-center max-md:w-full md:items-start">
      <p className="text-[#697383] text-[14px] leading-[13.3px]">
        © 2024 Mira. All rights reserved.
      </p>
      <div className="flex flex-row gap-x-[12px] text-[#4F95FF] text-[14px] leading-[17px] mt-[12px]">
        <p className="cursor-pointer hover:text-[#464C55] transition-all duration-300">
          +twitter
        </p>
        <p className="cursor-pointer hover:text-[#464C55] transition-all duration-3000">
          +discord
        </p>
        <p className="cursor-pointer hover:text-[#464C55] transition-all duration-300">
          +linkedin
        </p>
        <p className="cursor-pointer hover:text-[#464C55] transition-all duration-300">
          +telegram
        </p>
      </div>
    </div>
  );
};

export default Footer;
