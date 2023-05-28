import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's James.",
      "This is my portfolio.",
      "Let's build something cool together.",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden font-inter">
      <img
        className="relative rounded-full h-128 w-128 mx-auto object-cover"
        src="/profilepic.jpg"
        alt="Photo of the author"
      />
      <div>
        <h2 className="text-sm uppercase text-light-slate pb-2 tracking-[15px]">
          Software engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3 text-off-white">{text}</span>
          <Cursor cursorColor="#78a6c8" />
        </h1>

        <div className="py-2">
          <Link href="#about">
            <button className="heroButton text-light-slate">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton text-light-slate">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton text-light-slate">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton text-light-slate">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
