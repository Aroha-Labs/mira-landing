import { useEffect, useState } from "react";

const usePreloadMedia = (sources: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    const preloadImages = async () => {
      const imagePromises = sources.map((src) => {
        return new Promise((resolve, reject) => {
          if (src.endsWith(".mp4")) {
            const video = document.createElement("video");
            video.src = src;
            video.onloadeddata = () => resolve(src);
            video.onerror = reject;
          } else {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(src);
            img.onerror = reject;
          }
        });
      });

      try {
        await Promise.all(imagePromises);
        if (mounted) setLoaded(true);
      } catch (err) {
        console.error("Error preloading media:", err);
      }
    };

    preloadImages();
    return () => {
      mounted = false;
    };
  }, [sources]);

  return loaded;
};

export default usePreloadMedia;
