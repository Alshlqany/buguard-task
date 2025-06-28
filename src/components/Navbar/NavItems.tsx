"use client";
import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "../../animation";
import ToggleMode from "./ToggleMode";
const NavItems = () => {
  const menuItems: string[] = ["Blog", "Projects", "About", "Newsletter"];

  return (
    <nav className="flex flex-col items-center gap-6 md:flex-row overflow-hidden">
      {menuItems.map((item, i) => (
        <motion.a
          key={item}
          href={`/`}
          className="text-lg p-2"
          variants={itemVariants}
          custom={i + 1}
        >
          {item}
        </motion.a>
      ))}
      <motion.span variants={itemVariants} custom={5}>
        <ToggleMode />
      </motion.span>
    </nav>
  );
};

export default NavItems;
