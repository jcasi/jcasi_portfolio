import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          className="cursor-pointer"
          network="email"
          fgColor="#98dad9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/jcasi"
          fgColor="#98dad9"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/jcasi"
          fgColor="#98dad9"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
}
