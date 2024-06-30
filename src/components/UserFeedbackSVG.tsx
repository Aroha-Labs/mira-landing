import React, { useEffect, useState } from "react";
import styles from "./userFeedbackSVG.module.css";

const UserFeedbackSVG = ({ isActive }: { isActive: boolean }) => {
  const [isActiveSVG, setIsActiveSVG] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActiveSVG(isActive);
    }, 100);
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
      <g clip-path="url(#clip0_807_407)">
        <rect
          y="0.800018"
          width="201.63"
          height="201.63"
          rx="100.815"
          fill="#F9FCFF"
          className={styles["svg-elem-1"]}
        ></rect>
        <g opacity="0.67">
          <path
            d="M49.4874 0.800018V485.892"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-2"]}
          ></path>
          <path
            d="M97.824 0.800018V485.892"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-3"]}
          ></path>
          <path
            d="M146.161 0.800018V485.892"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-4"]}
          ></path>
          <path
            d="M194.497 0.800018V485.892"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-5"]}
          ></path>
        </g>
        <g opacity="0.67">
          <path
            d="M485.38 49.9997L0.287797 49.9997"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-6"]}
          ></path>
          <path
            d="M485.38 98.3363L0.287797 98.3363"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-7"]}
          ></path>
          <path
            d="M485.38 146.673L0.287797 146.673"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-8"]}
          ></path>
          <path
            d="M485.38 195.009L0.287797 195.009"
            stroke="#E3EEFF"
            stroke-width="1.15087"
            className={styles["svg-elem-9"]}
          ></path>
        </g>
        <path
          d="M232 97.8C232 98.9046 232.895 99.8 234 99.8C235.105 99.8 236 98.9046 236 97.8C236 96.6954 235.105 95.8 234 95.8C232.895 95.8 232 96.6954 232 97.8ZM110 98.1753L111.938 98.1753L111.937 97.4253L110 97.4253L110 98.1753ZM115.813 98.1753L119.688 98.1753L119.687 97.4253L115.812 97.4253L115.813 98.1753ZM123.563 98.1753L127.438 98.1753L127.437 97.4253L123.562 97.4253L123.563 98.1753ZM131.313 98.1753L135.188 98.1753L135.187 97.4253L131.312 97.4253L131.313 98.1753ZM139.063 98.1753L142.937 98.1753L142.938 97.4253L139.062 97.4253L139.063 98.1753ZM146.812 98.1752L150.687 98.1752L150.688 97.4252L146.813 97.4252L146.812 98.1752ZM154.562 98.1752L158.437 98.1752L158.438 97.4252L154.563 97.4252L154.562 98.1752ZM162.312 98.1752L166.187 98.1752L166.188 97.4252L162.313 97.4252L162.312 98.1752ZM170.062 98.1752L173.937 98.1752L173.938 97.4252L170.063 97.4252L170.062 98.1752ZM177.812 98.1752L181.687 98.1752L181.688 97.4252L177.813 97.4252L177.812 98.1752ZM185.562 98.1751L189.437 98.1751L189.438 97.4251L185.563 97.4251L185.562 98.1751ZM193.312 98.1751L197.187 98.1751L197.188 97.4251L193.313 97.4251L193.312 98.1751ZM201.062 98.1751L204.937 98.1751L204.938 97.4251L201.063 97.4251L201.062 98.1751ZM208.812 98.1751L212.687 98.1751L212.688 97.4251L208.813 97.4251L208.812 98.1751ZM216.562 98.1751L220.437 98.175L220.438 97.425L216.563 97.4251L216.562 98.1751ZM224.312 98.175L228.187 98.175L228.188 97.425L224.313 97.425L224.312 98.175ZM232.062 98.175L234 98.175L234 97.425L232.063 97.425L232.062 98.175Z"
          fill="#4F95FF"
          className={styles["svg-elem-10"]}
        ></path>
        <path
          d="M96 97.8C96 98.9046 96.8954 99.8 98 99.8C99.1046 99.8 100 98.9046 100 97.8C100 96.6954 99.1046 95.8 98 95.8C96.8954 95.8 96 96.6954 96 97.8ZM-26 98.1753L-24.0625 98.1753L-24.0625 97.4253L-26 97.4253L-26 98.1753ZM-20.1875 98.1753L-16.3125 98.1753L-16.3125 97.4253L-20.1875 97.4253L-20.1875 98.1753ZM-12.4375 98.1753L-8.5625 98.1753L-8.5625 97.4253L-12.4375 97.4253L-12.4375 98.1753ZM-4.6875 98.1753L-0.812498 98.1753L-0.812502 97.4253L-4.6875 97.4253L-4.6875 98.1753ZM3.0625 98.1753L6.9375 98.1753L6.9375 97.4253L3.0625 97.4253L3.0625 98.1753ZM10.8125 98.1752L14.6875 98.1752L14.6875 97.4252L10.8125 97.4252L10.8125 98.1752ZM18.5625 98.1752L22.4375 98.1752L22.4375 97.4252L18.5625 97.4252L18.5625 98.1752ZM26.3125 98.1752L30.1875 98.1752L30.1875 97.4252L26.3125 97.4252L26.3125 98.1752ZM34.0625 98.1752L37.9375 98.1752L37.9375 97.4252L34.0625 97.4252L34.0625 98.1752ZM41.8125 98.1752L45.6875 98.1752L45.6875 97.4252L41.8125 97.4252L41.8125 98.1752ZM49.5625 98.1751L53.4375 98.1751L53.4375 97.4251L49.5625 97.4251L49.5625 98.1751ZM57.3125 98.1751L61.1875 98.1751L61.1875 97.4251L57.3125 97.4251L57.3125 98.1751ZM65.0625 98.1751L68.9375 98.1751L68.9375 97.4251L65.0625 97.4251L65.0625 98.1751ZM72.8125 98.1751L76.6875 98.1751L76.6875 97.4251L72.8125 97.4251L72.8125 98.1751ZM80.5625 98.1751L84.4375 98.175L84.4375 97.425L80.5625 97.4251L80.5625 98.1751ZM88.3125 98.175L92.1875 98.175L92.1875 97.425L88.3125 97.425L88.3125 98.175ZM96.0625 98.175L98 98.175L98 97.425L96.0625 97.425L96.0625 98.175Z"
          fill="#4F95FF"
          className={styles["svg-elem-11"]}
        ></path>
        <path
          d="M89.5472 90.7036L8.45296 -3.1032"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="4 4"
          className={styles["svg-elem-12"]}
        ></path>
        <path
          d="M97.9986 230.188L97.9996 -15.2"
          stroke="#4F95FF"
          stroke-width="0.75"
          stroke-dasharray="4 4"
          className={styles["svg-elem-13"]}
        ></path>
        <circle
          cx="98"
          cy="96.8"
          r="9.25"
          fill="#79ABF6"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-14"]}
        ></circle>
        <circle
          cx="153.829"
          cy="97.3"
          r="7.75"
          transform="rotate(59.629 153.829 97.3)"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-15"]}
        ></circle>
        <circle
          cx="129.093"
          cy="97.0889"
          r="4.25"
          transform="rotate(59.629 129.093 97.0889)"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-16"]}
        ></circle>
        <circle
          cx="45.0927"
          cy="39.0889"
          r="4.25"
          transform="rotate(59.629 45.0927 39.0889)"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-17"]}
        ></circle>
        <circle
          cx="178.565"
          cy="97.5112"
          r="4.25"
          transform="rotate(59.629 178.565 97.5112)"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-18"]}
        ></circle>
        <rect
          x="52.25"
          y="88.05"
          width="6.5"
          height="19.5"
          rx="1.75"
          fill="#E2EEFF"
          className={styles["svg-elem-19"]}
        ></rect>
        <rect
          x="52.25"
          y="88.05"
          width="6.5"
          height="19.5"
          rx="1.75"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-20"]}
        ></rect>
        <circle
          cx="97.9735"
          cy="121.773"
          r="4.25"
          transform="rotate(59.629 97.9735 121.773)"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-21"]}
        ></circle>
        <circle
          cx="97.9735"
          cy="136.72"
          r="4.25"
          transform="rotate(59.629 97.9735 136.72)"
          fill="#E2EEFF"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-22"]}
        ></circle>
        <rect
          x="64.6285"
          y="45.2174"
          width="6.5"
          height="19.5"
          rx="1.75"
          transform="rotate(49.1573 64.6285 45.2174)"
          fill="#E2EEFF"
          className={styles["svg-elem-23"]}
        ></rect>
        <rect
          x="64.6285"
          y="45.2174"
          width="6.5"
          height="19.5"
          rx="1.75"
          transform="rotate(49.1573 64.6285 45.2174)"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-24"]}
        ></rect>
        <rect
          x="40.25"
          y="94.55"
          width="6.5"
          height="19.5"
          rx="1.75"
          transform="rotate(90 40.25 94.55)"
          fill="#E2EEFF"
          className={styles["svg-elem-25"]}
        ></rect>
        <rect
          x="40.25"
          y="94.55"
          width="6.5"
          height="19.5"
          rx="1.75"
          transform="rotate(90 40.25 94.55)"
          stroke="#4F95FF"
          stroke-width="0.5"
          className={styles["svg-elem-26"]}
        ></rect>
      </g>
      <rect
        x="0.25"
        y="1.05002"
        width="201.13"
        height="201.13"
        rx="100.565"
        stroke="#4F95FF"
        stroke-width="0.5"
        className={styles["svg-elem-27"]}
      ></rect>
      <defs>
        <clipPath id="clip0_807_407">
          <rect
            y="0.800018"
            width="201.63"
            height="201.63"
            rx="100.815"
            fill="white"
            className={styles["svg-elem-28"]}
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserFeedbackSVG;
