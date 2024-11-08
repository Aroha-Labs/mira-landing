"use client";

import React from "react";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

const gtSuperText = localFont({
  src: "../app/fonts/GT-Super-Text-Book.woff2",
  variable: "--font-gt-super",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

interface IndividualWritingProps {
  tag?: string;
  title?: string;
  authors?: string[];
  description?: string;
}

const IndividualWriting = ({
  tag,
  title,
  authors,
  description,
}: IndividualWritingProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-between items-start gap-y-[43px]">
      <div className="w-full flex flex-col justify-start items-start gap-y-5">
        {tag && (
          <span
            className={`${jetBrainsMono.className} w-fit px-[7px] py-[4px] bg-[#34E39B] rounded-full text-[#070B09] text-[11px] font-bold leading-[104%]`}
          >
            {tag}
          </span>
        )}
        {title && (
          <p
            className={`${gtSuperText.className} text-[24px] leading-[120%] text-[#BBBCBC]`}
          >
            {title}
          </p>
        )}
        {authors && (
          <p
            className={`text-[14px] leading-[150%] text-white flex items-center gap-x-[15px]`}
          >
            {authors.map((author, index) => (
              <React.Fragment key={author}>
                {index > 0 && (
                  <svg
                    width="4"
                    height="3"
                    viewBox="0 0 4 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="1.83594" cy="1.5" r="1.5" fill="#5D5D5D" />
                  </svg>
                )}
                {author}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>
      {description && (
        <p className={`text-[14px] leading-[150%] text-white/40`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default IndividualWriting;
