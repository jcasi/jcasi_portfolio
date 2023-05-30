import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex relative flex-col items-center text-center md:text-left xl:flex-row max-w-[2000px] xl:px-200 min-h-screen justify-center xl:space-y-0 mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-light-slate text-2xl">
        &nbsp;Contact
      </h3>

      <div className="container mx-auto my-20 w-1/3">
        <div className="rounded p-5 space-y-5 shadow-md">
          <h4 className="text-center w-full text-off-white text-4xl font-semibold">
            Get in touch
          </h4>
          <h3 className="text-2xl text-center">
            Want to work together? Contact me below.
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Name"
            />
            <input
              type="email"
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Email"
            />
            <input
              type="text"
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Subject"
            />
            <textarea
              cols={10}
              rows={5}
              className="rounded px-4 py-2 bg-dark-blue border border-outline-gray w-full"
              placeholder="Write your message..."
            />
            <button
              type="submit"
              className="rounded bg-light-slate text-dark-blue px-4 py-2 font-semibold w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
