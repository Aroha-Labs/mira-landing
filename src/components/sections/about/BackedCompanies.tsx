import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { supporterImages } from "./BackedCompaniesExported";

const BackedCompanies = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-[30px] md:px-12 h-fit w-full">
      {supporterImages.map((supporter, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1 }}
          className="relative w-full backdrop-blur-sm flex flex-col justify-center items-center h-[128px] border border-solid border-[#072A1F] group"
          data-aos="custom-fade"
        >
          <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity duration-200">
            <div className="overflow-hidden absolute inset-0">
              <div className="absolute top-[-50%] inset-[1px] bg-[#53C599]/25 w-[110%] h-full rounded-b-full left-1/2 -translate-x-1/2 blur-[80px] opacity-0 group-hover:opacity-100" />
            </div>
            <div className="absolute left-[-1px] top-[-1px] w-[10px] h-[10px] border-l-[1px] border-t-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
            <div className="absolute right-[-1px] top-[-1px] w-[10px] h-[10px] border-r-[1px] border-t-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
            <div className="absolute left-[-1px] bottom-[-1px] w-[10px] h-[10px] border-l-[1px] border-b-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
            <div className="absolute right-[-1px] bottom-[-1px] w-[10px] h-[10px] border-r-[1px] border-b-[1px] border-[#063725] group-hover:border-[#205F47] transition-colors duration-200" />
          </div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="relative z-[1] overflow-hidden"
          >
            <Image
              src={supporter.image}
              alt={supporter.name}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default BackedCompanies;
