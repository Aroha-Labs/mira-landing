import React, { useEffect, useState } from "react";
import styles from "./FlowSVGFirst.module.css";

const FlowSVGFirst = ({ isActive }: { isActive: boolean }) => {
  const [isActiveSVG, setIsActiveSVG] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsActiveSVG(isActive);
    }, 200);
  }, [isActive]);
  return (
    <svg
      width="202"
      height="202"
      viewBox="0 0 202 202"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isActiveSVG ? styles["active"] : ""}
    >
      <g clip-path="url(#clip0_807_286)">
        <rect
          width="201.63"
          height="201.63"
          rx="100.815"
          fill="#F9FCFF"
          className={styles["svg-elem-1"]}
        ></rect>
        <g opacity="0.67">
          <path
            d="M49.4874 0V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-2"]}
          ></path>
          <path
            d="M97.824 0V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-3"]}
          ></path>
          <path
            d="M146.161 0V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-4"]}
          ></path>
          <path
            d="M194.497 0V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-5"]}
          ></path>
        </g>
        <g opacity="0.67">
          <path
            d="M485.38 49.1997L0.287797 49.1997"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-6"]}
          ></path>
          <path
            d="M485.38 97.5363L0.287797 97.5362"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-7"]}
          ></path>
          <path
            d="M485.38 145.873L0.287797 145.873"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-8"]}
          ></path>
          <path
            d="M485.38 194.209L0.287797 194.209"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-9"]}
          ></path>
        </g>
        <path
          d="M154.618 61.2819L154.618 134.282"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-10"]}
        ></path>
        <path
          d="M156.618 65.7819L60.5 115.5"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-11"]}
        ></path>
        <path
          d="M97.394 36.5L97.394 173"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-12"]}
        ></path>
        <path
          d="M60.5 74L154.5 134"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-13"]}
        ></path>
        <path
          d="M57.6184 76.7819L57.6182 114.282"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-14"]}
        ></path>
        <circle
          cx="155.618"
          cy="62.7819"
          r="8.25"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-15"]}
        ></circle>
        <circle
          cx="155.618"
          cy="97.7819"
          r="8.25"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-16"]}
        ></circle>
        <circle
          cx="154.618"
          cy="132.782"
          r="8.25"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-17"]}
        ></circle>
        <rect
          x="49.8682"
          y="67.0319"
          width="15.5"
          height="15.5"
          rx="3.75"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-18"]}
        ></rect>
        <rect
          x="49.8682"
          y="107.032"
          width="15.5"
          height="15.5"
          rx="3.75"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-19"]}
        ></rect>
        <circle
          cx="98"
          cy="32"
          r="8.25"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-20"]}
        ></circle>
      </g>
      <rect
        x="0.25"
        y="0.25"
        width="201.13"
        height="201.13"
        rx="100.565"
        stroke="#4F95FF"
        stroke-width="0.5"
        className={styles["svg-elem-21"]}
      ></rect>
      <defs>
        <clipPath id="clip0_807_286">
          <rect
            width="201.63"
            height="201.63"
            rx="100.815"
            fill="white"
            className={styles["svg-elem-22"]}
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default FlowSVGFirst;

