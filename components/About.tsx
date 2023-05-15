import React from "react";
import { motion } from "framer-motion";
import aboutPic from "/photos/IMG_7758.jpg"


type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen font-inter text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-light-slate text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        src="https://imgur.com/lbHAhY8.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[420px] xl:h-[520px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-off-white text-4xl font-semibold">
          Background
        </h4>
        <p className="text-base text-justify">
          My name's James, and I'm a full-stack developer from Phoenix, Arizona.
          I've been around computers for as long as I can remember and my desire
          to understand how they work led me to pursuing an education in
          software engineering.
          <br />
          <br />
          Ever since then I've been trying to learn as much as I can to see what
          cool things I can do with an idea and a text editor.
          <br />
          <br />
          My passion is creating digital experiences that would have wowed
          younger-me when I was discovering what software is capable of. I have
          the most fun when I'm problem solving and if I can add some
          creativity, even better. My goal is always to make something that's
          intuitive, high-quality, and will help at least one person in the
          world navigate their digital life at least a bit more easily.
        </p>
      </div>
    </motion.div>
  );
}
