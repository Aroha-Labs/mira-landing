import React from "react";

const Navbar = () => {
  return (
    <div className="fade-in-first relative z-[1] flex w-full justify-start items-center pl-[34px] md:pl-[79px] gap-x-8 text-[#455164] text-[14px] leading-[17px] pb-3 pt-[39px] md:pt-[37px]">
      <p className="cursor-pointer hover:text-[#3284FF] transition-all duration-300">
        +home
      </p>
      <p className="cursor-pointer hover:text-[#3284FF] transition-all duration-300">
        +about
      </p>
      <p className="cursor-pointer hover:text-[#3284FF] transition-all duration-300">
        +research
      </p>
      <p className="cursor-pointer hover:text-[#3284FF] transition-all duration-300">
        +careers
      </p>
    </div>
  );
};

export default Navbar;
