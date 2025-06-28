"use client";

import { motion, AnimatePresence } from "framer-motion";
import XIcon from "../icons/XIcon";
import NavLinks from "./NavItems";
import { itemVariants, menuVariants } from "../../animation";
import { NavMenuProps } from "@/types";

const NavMenu = ({ isOpen = false, setIsOpen }: NavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 gap-[54px] flex flex-col items-center justify-center bg-[#121212] text-white"
        >
          <motion.h1
            className="text-xl leading-6 font-[600]"
            variants={itemVariants}
            custom={0}
          >
            Alshlqany
          </motion.h1>

          <NavLinks />
          <XIcon setIsOpen={setIsOpen} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavMenu;
