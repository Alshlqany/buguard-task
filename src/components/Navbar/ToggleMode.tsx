"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme between light and dark mode"
      className="w-24 h-10 px-4 py-2 flex items-center justify-between gap-4 rounded-full transition-colors duration-300 bg-[#0B0C1A] dark:bg-white"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full dark:hidden" />
        <Sun size={20} color="black" className="hidden dark:block" />
      </div>

      <div className="w-6 h-6 flex items-center justify-center">
        <div className="w-6 h-6 bg-black rounded-full hidden dark:block" />
        <Moon size={20} color="white" className="block dark:hidden" />
      </div>
    </button>
  );
};

export default ToggleMode;
