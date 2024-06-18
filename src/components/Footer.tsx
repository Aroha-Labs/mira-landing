import React from "react";

const Footer = () => {
  return (
    <div className="mt-[110px] mb-[122px] pl-[108px] flex flex-col justify-start items-start">
      <p className="text-[#697383] text-[14px] leading-[13.3px]">
        © 2024 Mira. All rights reserved.
      </p>
      <div className="flex flex-row gap-x-[12px] text-[#337FF1] text-[14px] leading-[17px] mt-[12px]">
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
