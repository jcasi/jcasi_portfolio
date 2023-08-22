import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen font-inter text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="top-24 uppercase tracking-[20px] text-light-slate text-2xl xl:absolute lg:absolute md:absolute sm:absolute">
        About
      </h3>

      <div className="px-0 md:px-10 py-10 flex flex-col xl:flex-row md:flex-row sm:flex-row">
        <img
          src="/avatar.jpg"
          className="relative object-cover w-50 xl:w-96 xl:h-96 xl:pt-0 md:pt-0 md:w-80 md:h-80 sm:pt-0 sm:w-64 sm:h-64"
        />
        <p className="text-base text-justify space-y-10 pt-10">
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
    </div>
  );
}
