"use client";
import { useTheme } from "next-themes";
import React from "react";

const ArrowUpRight = () => {
  const { theme } = useTheme();
  const color = theme === "light" ? "#1A1A1A" : "#eee";
  return (
    <div>
      <svg
        className="cursor-pointer"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowUpRight;
