import React, { useEffect, useState } from "react";
import styles from "./EvaluatorNetworkSVG.module.css";

const EvaluatorNetworkSVG = ({ isActive }: { isActive: boolean }) => {
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
      className={`${isActiveSVG ? styles["active"] : ""}`}
    >
      <g clipPath="url(#clip0_807_332)">
        <rect
          y="0.600006"
          width="201.63"
          height="201.63"
          rx="100.815"
          fill="#F9FCFF"
          className={styles["svg-elem-1"]}
        ></rect>
        <g opacity="0.67">
          <path
            d="M49.4874 0.600037V485.692"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-2"]}
          ></path>
          <path
            d="M97.824 0.600067V485.692"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-3"]}
          ></path>
          <path
            d="M146.161 0.600067V485.692"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-4"]}
          ></path>
          <path
            d="M194.497 0.600067V485.692"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-5"]}
          ></path>
        </g>
        <g opacity="0.67">
          <path
            d="M485.38 49.7997L0.287797 49.7997"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-6"]}
          ></path>
          <path
            d="M485.38 98.1363L0.287797 98.1363"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-7"]}
          ></path>
          <path
            d="M485.38 146.473L0.287797 146.473"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-8"]}
          ></path>
          <path
            d="M485.38 194.809L0.287797 194.809"
            stroke="#E3EEFF"
            strokeWidth="1.15087"
            className={styles["svg-elem-9"]}
          ></path>
        </g>
        <path
          d="M76.8838 90.4423L98.0981 81.3877L120.295 90.4423V115.052L98.0981 123.875L76.8838 115.052V90.4423Z"
          fill="#E2EEFF"
          className={styles["svg-elem-10"]}
        ></path>
        <path
          d="M76.8838 90.4423L98.0981 81.3877L120.295 90.4423M76.8838 90.4423V115.052L98.0981 123.875M76.8838 90.4423L98.0981 98.8005M98.0981 123.875L120.295 115.052V90.4423M98.0981 123.875V98.8005M120.295 90.4423L98.0981 98.8005"
          stroke="#4F95FF"
          strokeWidth="0.5"
          className={styles["svg-elem-11"]}
        ></path>
        <path
          d="M42.1735 130.178L42 105.568L63.2727 113.777L63.4495 138.85L42.1735 130.178Z"
          fill="#79ABF6"
          stroke="#4F95FF"
          strokeWidth="0.775194"
          className={styles["svg-elem-12"]}
        ></path>
        <path
          d="M154.749 130.178L154.922 105.568L133.65 113.777L133.473 138.85L154.749 130.178Z"
          fill="#79ABF6"
          stroke="#4F95FF"
          strokeWidth="0.775194"
          className={styles["svg-elem-13"]}
        ></path>
        <path
          d="M98.3471 60.125L119.519 51.1551L98.3676 43.5461L78.4341 51.9303L98.3471 60.125Z"
          fill="#79ABF6"
          stroke="#4F95FF"
          strokeWidth="0.775194"
          className={styles["svg-elem-14"]}
        ></path>
        <path
          d="M77.659 89.1396L77.6587 51.9303"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-15"]}
        ></path>
        <path
          d="M97.9497 124.1L63.7992 138.874"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-16"]}
        ></path>
        <path
          d="M98.0336 124.1L132.184 138.874"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-17"]}
        ></path>
        <path
          d="M120.295 89.1396L120.295 51.9303"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-18"]}
        ></path>
        <path
          d="M77.1453 90.3957L42.9947 105.17"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-19"]}
        ></path>
        <path
          d="M120.388 90.3957L154.539 105.17"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-20"]}
        ></path>
        <path
          d="M98 -5.99997L98 208.5"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-21"]}
        ></path>
        <path
          d="M98.177 98.8713L64.0265 113.645"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-22"]}
        ></path>
        <path
          d="M97.8063 98.8713L131.957 113.645"
          stroke="#4F95FF"
          strokeWidth="0.75"
          strokeDasharray="3.1 3.1"
          className={styles["svg-elem-23"]}
        ></path>
      </g>
      <rect
        x="0.25"
        y="0.850006"
        width="201.13"
        height="201.13"
        rx="100.565"
        stroke="#4F95FF"
        strokeWidth="0.5"
        className={styles["svg-elem-24"]}
      ></rect>
      <defs>
        <clipPath id="clip0_807_332">
          <rect
            y="0.600006"
            width="201.63"
            height="201.63"
            rx="100.815"
            fill="white"
            className={styles["svg-elem-25"]}
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default EvaluatorNetworkSVG;
