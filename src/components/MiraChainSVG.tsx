import React, { useEffect, useState } from "react";
import styles from "./MiraChainSVG.module.css";

const MiraChainSVG = ({ isActive }: { isActive: boolean }) => {
  const [isActiveSVG, setIsActiveSVG] = useState(false);

  useEffect(() => {
    setIsActiveSVG(isActive);
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
      <g clip-path="url(#clip0_807_446)">
        <rect
          width="201.63"
          height="201.63"
          rx="100.815"
          fill="#F9FCFF"
          className={styles["svg-elem-1"]}
        ></rect>
        <g opacity="0.67">
          <path
            d="M485.38 49.1997L0.287797 49.1997"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-2"]}
          ></path>
          <path
            d="M485.38 97.5363L0.287797 97.5362"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-3"]}
          ></path>
          <path
            d="M485.38 145.873L0.287797 145.873"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-4"]}
          ></path>
          <path
            d="M485.38 194.209L0.287797 194.209"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-5"]}
          ></path>
        </g>
        <g opacity="0.67">
          <path
            d="M49.4874 2.47955e-05V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-6"]}
          ></path>
          <path
            d="M97.824 4.95911e-05V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-7"]}
          ></path>
          <path
            d="M146.161 4.95911e-05V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-8"]}
          ></path>
          <path
            d="M194.497 4.95911e-05V485.092"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-9"]}
          ></path>
        </g>
        <path
          d="M98 141V204"
          stroke="#337FF1"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-10"]}
        ></path>
        <path
          d="M98 -2.99997V60"
          stroke="#337FF1"
          stroke-width="0.75"
          stroke-dasharray="3.1 3.1"
          className={styles["svg-elem-11"]}
        ></path>
        <path
          d="M152.251 118.884C152.251 118.884 122.157 108.35 103.15 101.39C108.182 97.3086 116.248 90.9275 116.248 90.9275L164.874 107.955L152.251 118.884Z"
          fill="#79ABF6"
          className={styles["svg-elem-12"]}
        ></path>
        <path
          d="M103.533 52.6846L84.668 46.2925L96.8547 35.9697L115.72 42.3618L103.533 52.6846Z"
          fill="#79ABF6"
          className={styles["svg-elem-13"]}
        ></path>
        <path
          d="M151.689 119.265C151.689 119.265 122.818 108.455 103.811 101.495L103.679 121.314L151.833 137.153L151.689 119.265Z"
          fill="#E2EEFF"
          className={styles["svg-elem-14"]}
        ></path>
        <path
          d="M103.126 168.615L103.534 121.461L84.1624 137.672L83.7767 162.651L103.126 168.615Z"
          fill="#E2EEFF"
          className={styles["svg-elem-15"]}
        ></path>
        <path
          d="M103.86 53.2591L84.7993 46.9464L84.4339 95.1405C84.4339 95.1405 96.0962 98.8862 103.685 101.386C103.761 82.4916 103.86 53.2591 103.86 53.2591Z"
          fill="#E2EEFF"
          className={styles["svg-elem-16"]}
        ></path>
        <path
          d="M53.3087 120.527L83.9069 94.8732C83.9069 94.8732 96.0773 99.1414 103.666 101.641C91.5144 112.04 72.1987 127.907 72.1987 127.907L53.3087 120.527Z"
          fill="#79ABF6"
          className={styles["svg-elem-17"]}
        ></path>
        <path
          d="M72.2937 128.001L71.9782 147.305L52.6212 140.399L52.8419 121.002L72.2937 128.001Z"
          fill="#E2EEFF"
          className={styles["svg-elem-18"]}
        ></path>
        <path
          d="M83.9396 94.9508L35.8573 77.7047L48.3045 67.1124L84.0974 79.2183L83.9396 94.9508Z"
          fill="#79ABF6"
          className={styles["svg-elem-19"]}
        ></path>
        <path
          d="M35.8885 77.6728L83.9709 94.919M35.8885 77.6728L48.3357 67.0805L84.1287 79.1865M35.8885 77.6728L35.8963 96.7628L67.7742 108.182M83.9709 94.919L84.1287 79.1865M83.9709 94.919L52.7001 120.527M83.9709 94.919C83.9709 94.919 95.8148 98.8204 103.404 101.32M84.4561 46.5342L103.598 52.9379M84.4561 46.5342L97.0479 35.795L116.336 42.3432M84.4561 46.5342L84.1287 79.1865M103.598 52.9379C103.598 52.9379 103.48 82.4258 103.404 101.32M103.598 52.9379L116.336 42.3432M103.404 101.32C122.411 108.281 152.074 119.145 152.074 119.145M103.404 101.32C108.436 97.2393 116.289 90.8702 116.289 90.8702M103.404 101.32C91.252 111.719 72.287 127.947 72.287 127.947M103.404 101.32C103.352 109.06 103.272 121.14 103.272 121.14M152.074 119.145L152.077 137.652M152.074 119.145L164.81 108.259M152.077 137.652L164.955 126.327L164.81 108.259M152.077 137.652L116.566 125.259M164.81 108.259L132.748 96.7685M116.289 90.8702L147.845 64.3859M116.289 90.8702L116.311 68.3398M116.289 90.8702L132.748 96.7685M116.336 42.3432L116.311 68.3398M52.7001 120.527L72.287 127.947M52.7001 120.527L52.7149 140.491L72.1502 147.184M72.287 127.947L72.1502 147.184M72.1502 147.184L83.9002 137.351M103.272 121.14L103.218 168.793M103.272 121.14L116.566 125.259M103.272 121.14L83.9002 137.351M103.218 168.793L116.399 158.923L116.566 125.259M103.218 168.793L83.9318 162.536L83.9002 137.351M147.845 64.3859L127.973 57.8423L116.311 68.3398M147.845 64.3859L147.71 83.9142L132.748 96.7685"
          stroke="#5696F5"
          stroke-width="0.408977"
          className={styles["svg-elem-20"]}
        ></path>
      </g>
      <rect
        x="0.25"
        y="0.25"
        width="201.13"
        height="201.13"
        rx="100.565"
        stroke="#337FF1"
        stroke-width="0.5"
        className={styles["svg-elem-21"]}
      ></rect>
      <defs>
        <clipPath id="clip0_807_446">
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

export default MiraChainSVG;
