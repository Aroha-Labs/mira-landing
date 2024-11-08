import React from "react";
import HeroText from "@/components/HeroText";
import WritingBg from "@/components/WritingBg";
import WritingGrid from "@/components/sections/writing/WritingGrid";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Mira",
  description: "",
};

const WritingPage = () => {
  return (
    <div className="h-screen min-h-screen max-w-screen w-screen bg-black relative">
      <div className="min-w-screen min-h-screen w-screen h-[calc(100vh+64px)] absolute top-[-64px] left-0 !overflow-hidden">
        <WritingBg />
      </div>
      <div className="relative flex flex-col flex-1 justify-start items-start w-screen h-fit xl:h-full pb-12 pt-[64px]">
        <HeroText
          title="Writing."
          subtitle="Our work on the philosophy and technology behind AI, autonomous systems and cryptographic primitives"
        />
        <WritingGrid />
        <div className="w-full mt-[35px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default WritingPage;
