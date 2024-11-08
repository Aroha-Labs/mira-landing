import React from "react";
import writing_bg from "@/assets/images/bg/writing_bg.webp";

const WritingBg = () => {
  return (
    <div
      className="relative w-screen h-full scale-[0.93] mt-[34px] xl:bg-contain bg-cover"
      style={{
        backgroundImage: `radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.9) 65%), url(${writing_bg.src})`,
        backgroundPosition: "center",
      }}
    />
  );
};

export default WritingBg;
