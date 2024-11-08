import React from "react";
import Image from "next/image";
import { teamImages } from "./TeamImagesExported";

const TeamGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 px-[30px] md:px-12 h-fit">
      {teamImages.map((member, index) => (
        <div
          key={index}
          className="backdrop-blur-sm flex flex-col justify-start items-start gap-4 p-[32px] border border-solid border-[#072A1F]"
          data-aos="fade-in"
        >
          <div className="relative aspect-square h-[80px] w-[80px]">
            <Image
              src={member.image}
              alt={member.name}
              className="object-contain h-[80px] w-[80px]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[#CCCCCC] text-[16px] leading-[104%]">
              {member.name}
            </h3>
            <p className="text-[#999999] text-[14px] leading-[150%]">
              {member.position.includes("Co-Founder") ? (
                <>
                  <span className="text-[#CCCCCC]">Co-Founder</span>
                  <span>, {member.position.split("Co-Founder, ")[1]}</span>
                </>
              ) : (
                member.position
              )}
            </p>
            <p className="text-[#506057] text-[14px] leading-[150%] mt-[10px] whitespace-pre-line">
              {member.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;
