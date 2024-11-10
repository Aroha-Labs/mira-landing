import React from "react";
import { motion } from "framer-motion";

const people = [
  { name: "Balaji Srinivasan", company: "Network State" },
  { name: "Sandeep Naliwal", company: "Polygon" },
  { name: "Sameer Pitalwalla", company: "Google" },
  { name: "Jose Maria Macedo", company: "Delphi Digital" },
  { name: "Alex Svanevik", company: "Nansen" },
  { name: "Saneel Srini", company: "Ritual" },
  { name: "Ajit Tripathi", company: "Hadron" },
  { name: "Prabhakar Reddy", company: "FalconX" },
  { name: "Tekin Salimi", company: "DaoS" },
  { name: "Kushagra Shrivastava", company: "Xoogler Ventures" },
];

const BackedPeople = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-[30px] md:px-12 h-fit w-full mt-[64px] mb-[128px]">
      {people.map((person, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1 }}
          className="relative w-full backdrop-blur-sm flex flex-col justify-center items-center h-[69px] border border-solid border-[#072A1F] group"
          data-aos="custom-fade"
        >
          <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-200">
            <div className="absolute left-[-1px] top-[-1px] w-[10px] h-[10px] border-l-[1px] border-t-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
            <div className="absolute right-[-1px] top-[-1px] w-[10px] h-[10px] border-r-[1px] border-t-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
            <div className="absolute left-[-1px] bottom-[-1px] w-[10px] h-[10px] border-l-[1px] border-b-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
            <div className="absolute right-[-1px] bottom-[-1px] w-[10px] h-[10px] border-r-[1px] border-b-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
          </div>
          <motion.div
            initial={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="relative z-[1] overflow-hidden flex flex-col justify-center items-center w-full px-[46px] gap-y-[10px]"
          >
            <p className="text-[#999999] group-hover:text-[#CCCCCC] font-semibold text-[12px] leading-[100%] text-left w-full transition-colors duration-200">
              {person.name}
            </p>
            <p className="text-[#506057] group-hover:text-[#999999] text-[12px] leading-[100%] text-left w-full transition-colors duration-200">
              {person.company}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default BackedPeople;
