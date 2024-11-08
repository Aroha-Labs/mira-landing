"use client";

import React from "react";

export const EmptyCellsWrapper = ({ children, itemCount }: { children: React.ReactNode, itemCount: number }) => {
  const [emptyCells, setEmptyCells] = React.useState(0);

  const getEmptyCells = (totalItems: number) => {
    if (window.innerWidth >= 1280) {
      const remainder = totalItems % 3;
      return remainder ? 3 - remainder : 0;
    } else if (window.innerWidth >= 1024) {
      const remainder = totalItems % 2;
      return remainder ? 2 - remainder : 0;
    }
    return 0;
  };

  React.useEffect(() => {
    const updateEmptyCells = () => {
      setEmptyCells(getEmptyCells(itemCount));
    };

    updateEmptyCells();
    window.addEventListener("resize", updateEmptyCells);
    return () => window.removeEventListener("resize", updateEmptyCells);
  }, [itemCount]);

  return (
    <div className="w-full h-fit grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[1px] bg-[#072A1F] p-[1px] lg:[grid-auto-rows:1fr]">
      {children}
      {[...Array(emptyCells)].map((_, index) => (
        <div
          key={`empty-${index}`}
          className="backdrop-blur-sm p-[44px] xl:p-[32px] bg-black grid-rows-1"
        />
      ))}
    </div>
  );
};