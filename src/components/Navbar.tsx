import React from "react";

const Navbar = ({ onResearchClick }: { onResearchClick: () => void }) => {
  return (
    <div className="fade-in-first relative z-[1] flex w-full justify-start items-center pl-[34px] md:pl-[129px] gap-x-8 text-[#455164] text-[14px] leading-[17px] pb-3 pt-[39px] md:pt-[37px]">
      <p className="cursor-pointer text-[#4F95FF] transition-all duration-300">
        *mira
      </p>
      <p className="cursor-pointer hover:text-[#4F95FF] transition-all duration-300" onClick={onResearchClick}>
        +research
      </p>
      <p className="cursor-pointer hover:text-[#4F95FF] transition-all duration-300">
        +careers
      </p>
    </div>
  );
};

export default Navbar;
