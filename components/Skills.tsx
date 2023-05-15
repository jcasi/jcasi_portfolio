import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image";
import Skill from "./Skill"



type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-light-slate text-2xl">Skills</h3>

        <div className="grid grid-cols-5 gap-5">
          <Image
          src="/skills/react.png"
          width={96}
          height={96}
          alt="React Native icon"
          />
          <Image
          src="/skills/nodejs.png"
          width={96}
          height={96}
          alt="NodeJS icon"
          />
          <Image
          src="/skills/tailwindcss.png"
          width={96}
          height={96}
          alt="TailwindCSS icon"
          />
          <Image
          src="/skills/javascript.png"
          width={96}
          height={96}
          alt="Javascript icon"
          />
          <Image
          src="/skills/typescript.png"
          width={96}
          height={96}
          alt="Typescript icon"
          />
          <Image
          src="/skills/html.png"
          width={96}
          height={96}
          alt="HTML icon"
          />
          <Image
          src="/skills/css.png"
          width={96}
          height={96}
          alt="CSS icon"
          />
          <Image
          src="/skills/git.png"
          width={96}
          height={96}
          alt="Git icon"
          />
          <Image
          src="/skills/java.png"
          width={96}
          height={96}
          alt="Java icon"
          />
          <Image
          src="/skills/python.png"
          width={96}
          height={96}
          alt="Python icon"
          />
          <Image
          src="/skills/cpp.png"
          width={96}
          height={96}
          alt="C++ icon"
          />
          <Image
          src="/skills/csh.png"
          width={96}
          height={96}
          alt="C# icon"
          />
          <Image
          src="/skills/dotnetcore.png"
          width={96}
          height={96}
          alt=".NET Core icon"
          />
          <Image
          src="/skills/swift.png"
          width={96}
          height={96}
          alt="Swift icon"
          />
          <Image
          src="/skills/figma.png"
          width={96}
          height={96}
          alt="Figma icon"
          />
        </div>
    </motion.div>
  )
}

export default Skills