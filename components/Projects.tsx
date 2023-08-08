import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-200 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-light-slate text-2xl">
        Projects
      </h3>

      <div className="flex space-x-4">
        {/* Card1 */}
        <a
          href="https://github.com/jcasi/ColorPicker_Extension.git"
          target="_blank"
          rel="noreferrer"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-md">
            <img
              className="object-cover h-64 w-full"
              src="picker_project.png"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                Color Picker Extension
              </div>
              <p className="text-anti-flash-white text-base">
                A color picker tool written in JavaScript for Google Chrome.
                Lets users pick multiple colors from any webpage and stores
                hex/RGB values.
              </p>
            </div>
          </div>
        </a>
        {/* Card2 */}
        {/* <div className="max-w-sm rounded overflow-hidden shadow-md">
          <img
            className="object-cover h-64 w-full"
            src="https://images.pexels.com/photos/1444321/pexels-photo-1444321.jpeg?cs=srgb&dl=pexels-cats-coming-1444321.jpg&fm=jpg"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Human clutching feline</div>
            <p className="text-anti-flash-white text-base">
              <br />
              <br />
            </p>
          </div>
        </div> */}
      </div>
    </motion.div>
  );
}

export default Projects;
