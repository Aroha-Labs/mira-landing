import React from "react";

const CommonAboutComponent = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-start items-center md:items-start md:pl-[83px] max-md:w-full max-md:mt-[36px]">
      <span className="w-4 h-4 rounded-full bg-[#79ABF6] max-md:hidden"></span>
      <p className="mt-[19px] font-medium text-[14px] leading-[13px] text-[#337FF1] max-md:text-center">
        {title}
      </p>
      <p className="max-w-[214px] text-[#455164] text-[14px] leading-[17px] font-normal mt-[7px] max-md:text-center">
        {description}
      </p>
    </div>
  );
};

export default CommonAboutComponent;
