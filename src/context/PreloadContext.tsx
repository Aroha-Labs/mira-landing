"use client";

import { createContext, useContext, useState, useEffect } from "react";
import main_bg from "@/assets/images/bg/main_bg.webp";
import bg_1 from "@/assets/images/bg/bg_1.webp";
import bg_2 from "@/assets/images/bg/bg_2.webp";
import bg_3 from "@/assets/images/bg/bg_3.webp";
import main_dither from "@/assets/images/bg/main_dither.webp";
import dither_1 from "@/assets/images/bg/dither_1.webp";
import dither_2 from "@/assets/images/bg/dither_2.webp";
import dither_3 from "@/assets/images/bg/dither_3.webp";
import { motion } from "framer-motion";
import { loaderSVGs } from "./loaderSVGs";
import { isMobile } from "react-device-detect";

const PreloadContext = createContext<{ isLoaded: boolean }>({
  isLoaded: false,
});

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(() => {
    try {
      return window.sessionStorage.getItem("assetsLoaded") === "true";
    } catch {
      return false;
    }
  });

  const preloadVideo = async (src: string): Promise<void> => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "auto";
      video.playsInline = true;
      video.muted = true;
      
      const handleLoad = async () => {
        if (isMobile) {
          resolve();
          return;
        }

        try {
          await video.play();
          video.pause();
          video.currentTime = 0;
          resolve();
        } catch {
          resolve();
        }
      };

      video.addEventListener("canplaythrough", handleLoad, { once: true });
      video.addEventListener("error", () => resolve(), { once: true });
      video.src = src;
      video.load();
    });
  };

  useEffect(() => {
    if (isLoaded) return;

    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.height = "100vh";
    };

    const unlockScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.height = "";
    };

    lockScroll();

    const mediaToPreload = [
      main_bg.src,
      bg_1.src,
      bg_2.src,
      bg_3.src,
      main_dither.src,
      dither_1.src,
      dither_2.src,
      dither_3.src,
    ];

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });
    };

    const loadAssets = async () => {
      try {
        await Promise.all([
          ...mediaToPreload.map(preloadImage),
          preloadVideo("./bg_animation.mp4"),
        ]);
        
        sessionStorage.setItem("assetsLoaded", "true");
        setIsLoaded(true);
        unlockScroll();
      } catch (error) {
        console.error("Error preloading media:", error);
        setIsLoaded(true);
        unlockScroll();
      }
    };

    loadAssets();

    return unlockScroll;
  }, [isLoaded]);

  useEffect(() => {
    if (!isLoaded) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % 6);
      }, 1000); // Change SVG every second

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="w-screen h-screen bg-black fixed top-0 left-0 z-[999] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Current SVG */}
          <motion.div
            key={`current-${currentIndex}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute"
          >
            {loaderSVGs[currentIndex]}
          </motion.div>

          {/* Next SVG */}
          <motion.div
            key={`next-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute"
          >
            {loaderSVGs[(currentIndex + 1) % 6]}
          </motion.div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export const usePreload = () => useContext(PreloadContext);
