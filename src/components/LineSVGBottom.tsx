import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const LineSVGBottom = () => {
  return (
    <svg
      width="260"
      height="725"
      viewBox="0 0 260 725"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M259 0L259 54.1058C259 62.9423 251.837 70.1058 243 70.1058L17 70.1058C8.16344 70.1058 0.999998 77.2692 0.999998 86.1058L1 708C1 716.837 8.16344 724 17 724L57.4078 724"
        stroke="#4F95FF"
        stroke-width="0.75"
      />
    </svg>
  );
};

export default LineSVGBottom;
