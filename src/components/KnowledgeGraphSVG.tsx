import React, { useEffect, useState } from "react";
import styles from "./KnowledgeGraphSVG.module.css";

const KnowledgeGraphSVG = ({ isActive }: { isActive: boolean }) => {
  const [isActiveSVG, setIsActiveSVG] = useState(false);

  useEffect(() => {
    setIsActiveSVG(isActive);
  }, [isActive]);
  return (
    <svg
      width="202"
      height="203"
      viewBox="0 0 202 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${isActiveSVG ? styles['active'] : ''}`}
    >
      <g clip-path="url(#clip0_807_368)">
        <rect
          y="0.200012"
          width="201.63"
          height="201.63"
          rx="100.815"
          fill="#F9FCFF"
          className={styles["svg-elem-1"]}
        ></rect>
        <g opacity="0.67">
          <path
            d="M49.4874 0.200043V485.292"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-2"]}
          ></path>
          <path
            d="M97.824 0.200073V485.292"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-3"]}
          ></path>
          <path
            d="M146.161 0.200073V485.292"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-4"]}
          ></path>
          <path
            d="M194.497 0.200073V485.292"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-5"]}
          ></path>
        </g>
        <g opacity="0.67">
          <path
            d="M485.38 49.3997L0.287797 49.3997"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-6"]}
          ></path>
          <path
            d="M485.38 97.7363L0.287797 97.7363"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-7"]}
          ></path>
          <path
            d="M485.38 146.073L0.287797 146.073"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-8"]}
          ></path>
          <path
            d="M485.38 194.409L0.287797 194.409"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-9"]}
          ></path>
        </g>
        <path
          opacity="0.3"
          d="M50 10L50 201"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-10"]}
        ></path>
        <path
          d="M98 -11.5L98 146"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-11"]}
        ></path>
        <path
          opacity="0.3"
          d="M146 9L146 189.5"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-12"]}
        ></path>
        <path
          d="M254 98.5L50.5 98.5"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-13"]}
        ></path>
        <path
          opacity="0.3"
          d="M201.5 49.5L0.5 49.5"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-14"]}
        ></path>
        <path
          opacity="0.3"
          d="M201.5 145.5L0.5 145.5"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-15"]}
        ></path>
        <circle
          cx="147"
          cy="48"
          r="4.25"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-16"]}
        ></circle>
        <circle
          cx="147"
          cy="99"
          r="4.25"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-17"]}
        ></circle>
        <circle
          cx="98"
          cy="48"
          r="4.25"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-18"]}
        ></circle>
        <circle
          cx="98"
          cy="98"
          r="4.25"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-19"]}
        ></circle>
        <circle
          cx="98"
          cy="146"
          r="4.25"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-20"]}
        ></circle>
        <circle
          cx="51"
          cy="99"
          r="4.25"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-21"]}
        ></circle>
        <circle
          cx="51"
          cy="146"
          r="4.25"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-22"]}
        ></circle>
      </g>
      <rect
        x="0.25"
        y="0.450012"
        width="201.13"
        height="201.13"
        rx="100.565"
        stroke="#4F95FF"
        stroke-width="0.5"
        className={styles["svg-elem-23"]}
      ></rect>
      <defs>
        <clipPath id="clip0_807_368">
          <rect
            y="0.200012"
            width="201.63"
            height="201.63"
            rx="100.815"
            fill="white"
            className={styles["svg-elem-24"]}
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default KnowledgeGraphSVG;
