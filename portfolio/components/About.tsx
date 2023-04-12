import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col relative h-screen font-inter text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-moonstone text-2xl">
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
        src="https://lh3.googleusercontent.com/RIxNfyc4-hYe_aaJN4a3s2sv7-KCFLvcXMap6XOTEXsJ94vW-9zyaIeg2vHW60EW4UuMyNTXrOBKbnswxOSxEbrOMFfUvB5zIQcI2ZzV72WVKaaeKvLmZbHjRHpURGYk7uKcCEuBa73PEJONDAV6uP-x2ddTFze1IQ7ATBKNLm1P3nqYJEPepclR-NvGTNEzZjorhNGUYz8vCvsJcrGLzL91nL7jqIXNNaGMhSlLQ7j6eWmn-hhcR7bD4ZO6OHhW39C0A1wkF7S_TUDDyzEE5n7IKTRKvrxTqV7o_-l18yRnN5XtzaJ6QW00zmrOsAAlf8_nhVTc3eL2cOErjOlaC_QlePSr5QqnzrYHo7BAr5l8aUdGwBWoZvn6noHjGVDWYnyVSTOQBJh227xia0bVPEivTFy56HE3RUzEglIXKV9-9oI2scoLuVQAaIPVeei6oEhPz85QuebMxI0zB2IsvgVt9xnowJmZk7nAYspQGqKP2Xw8XxFjrs-XLKdnD5TXjMNzOtqTmhJ6f_uRw7I9KvAiYzcAksTjvBqlQNoShwDtclzx_X2nMnL-Bn8AbahXoKz8afksPFN-chNGcscuqWbr5_r8IuPriEhibwmBNwIasV9ibD1kj3ma9LISLbk8bPHq9C3tTW3xnYsmeWaaJRoh6TBSTa3POFvXE8MuO9MZGNca2Lcpqoe_6DBl0BrFenYZ5oQI0M5pUKOFHMo3Tktiv6gXCh9FeSDmGrDfcNlXZ1oxwpwNgMy4Z-6DTfl3VzR4APObne4a-L8UiSj1H1kOMduw1CWgLcoKWPl_EqR-DC8nzjKhA4HiXxYEVlY7Ak3ySQdVemYXr78igxHdJteiZHtg1eGXQZV1Ms4db6CNrUFVdDjjgn4o8y1MrT-ee83Usfd_S6MKgPpHjXgtoIRhdSCYuFTx70j6q57Roif5BiOXO_S6BQrM6YW_neSTLDOaFEhao1INRUsDJZPB-3zqxMrqJ551BPgB5sDPBC614kG-Xn5GHVNB-zISBbKAz1YAgyW1DdITZ74GZRv1xQr997S3WBSe4sUt4QN6lFU2KCjviAKdXIc_SoUsc-0=w776-h1035-s-no?authuser=0"
        className="-mb-20 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover 
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-anti-flash-white text-4xl font-semibold">
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
