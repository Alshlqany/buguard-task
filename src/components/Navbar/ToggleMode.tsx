"use client";
import { useTheme } from "next-themes";
import React from "react";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="cursor-pointer px-12 py-5 md:flex lg:p-0"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleMode;
