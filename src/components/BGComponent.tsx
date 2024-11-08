"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import main_bg from "@/assets/images/bg/main_bg.webp";
import bg_1 from "@/assets/images/bg/bg_1.webp";
import bg_2 from "@/assets/images/bg/bg_2.webp";
import bg_3 from "@/assets/images/bg/bg_3.webp";
import main_dither from "@/assets/images/bg/main_dither.webp";
import dither_1 from "@/assets/images/bg/dither_1.webp";
import dither_2 from "@/assets/images/bg/dither_2.webp";
import dither_3 from "@/assets/images/bg/dither_3.webp";
import { usePathname } from "next/navigation";

interface BGComponentProps {
  highlightedBg: 0 | 1 | 2 | 3;
}

const BGComponent = ({ highlightedBg = 0 }: BGComponentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const checkLowPowerMode = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
          setIsLowPowerMode(false);
        } catch {
          setIsLowPowerMode(true);
          setVideoEnded(true);
        }
      }
    };

    if (isHomePage && !videoEnded) {
      checkLowPowerMode();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isHomePage, videoEnded]);

  const bgImage =
    highlightedBg === 0
      ? main_bg
      : highlightedBg === 1
      ? bg_1
      : highlightedBg === 2
      ? bg_2
      : bg_3;

  const ditherImage =
    highlightedBg === 0
      ? main_dither
      : highlightedBg === 1
      ? dither_1
      : highlightedBg === 2
      ? dither_2
      : dither_3;

  return (
    <div className="relative w-screen h-full scale-[0.93] mt-[34px]">
      {isHomePage && !videoEnded && !isLowPowerMode && (
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: `radial-gradient(circle at center, transparent 10%, rgba(0, 0, 0, 0.95) 55%)`,
            }}
          />
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            onEnded={() => setVideoEnded(true)}
            className="w-full h-full object-cover xl:object-contain"
          >
            <source src="./bg_animation.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <div
        style={{ opacity: !isHomePage || videoEnded || isLowPowerMode ? 1 : 0 }}
      >
        <AnimatePresence>
          <motion.div
            key={highlightedBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full bg-black bg-cover xl:bg-contain"
            style={{
              backgroundImage: `radial-gradient(circle at center, transparent 10%, rgba(0, 0, 0, 0.95) 55%), url(${bgImage.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            key={`dither-${highlightedBg}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.33 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full bg-cover xl:bg-contain"
            style={{
              backgroundImage: `url(${ditherImage.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              mixBlendMode: "soft-light",
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BGComponent;
