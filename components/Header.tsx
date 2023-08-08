import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky bg-dark-blue top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="flex flex-row items-center cursor-pointer"
      >
        {/* icons */}
        <SocialIcon
          url="https://linkedin.com/in/jcasi"
          fgColor="#78a6c8"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/jcasi"
          fgColor="#78a6c8"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
}
