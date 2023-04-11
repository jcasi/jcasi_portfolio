import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutPic from "../../../../../../Pictures/pfps/professional/IMG_7758.jpg";
import profilePic from "../../../../../../Pictures/pfps/professional/49660324_2317161091846301_3676182097715789824_n.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-moonstone text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          scale: 0.55,
        }}
        whileInView={{ x: 0, scale: 0.55 }}
        viewport={{ once: true }}
        src="https://lh3.googleusercontent.com/RIxNfyc4-hYe_aaJN4a3s2sv7-KCFLvcXMap6XOTEXsJ94vW-9zyaIeg2vHW60EW4UuMyNTXrOBKbnswxOSxEbrOMFfUvB5zIQcI2ZzV72WVKaaeKvLmZbHjRHpURGYk7uKcCEuBa73PEJONDAV6uP-x2ddTFze1IQ7ATBKNLm1P3nqYJEPepclR-NvGTNEzZjorhNGUYz8vCvsJcrGLzL91nL7jqIXNNaGMhSlLQ7j6eWmn-hhcR7bD4ZO6OHhW39C0A1wkF7S_TUDDyzEE5n7IKTRKvrxTqV7o_-l18yRnN5XtzaJ6QW00zmrOsAAlf8_nhVTc3eL2cOErjOlaC_QlePSr5QqnzrYHo7BAr5l8aUdGwBWoZvn6noHjGVDWYnyVSTOQBJh227xia0bVPEivTFy56HE3RUzEglIXKV9-9oI2scoLuVQAaIPVeei6oEhPz85QuebMxI0zB2IsvgVt9xnowJmZk7nAYspQGqKP2Xw8XxFjrs-XLKdnD5TXjMNzOtqTmhJ6f_uRw7I9KvAiYzcAksTjvBqlQNoShwDtclzx_X2nMnL-Bn8AbahXoKz8afksPFN-chNGcscuqWbr5_r8IuPriEhibwmBNwIasV9ibD1kj3ma9LISLbk8bPHq9C3tTW3xnYsmeWaaJRoh6TBSTa3POFvXE8MuO9MZGNca2Lcpqoe_6DBl0BrFenYZ5oQI0M5pUKOFHMo3Tktiv6gXCh9FeSDmGrDfcNlXZ1oxwpwNgMy4Z-6DTfl3VzR4APObne4a-L8UiSj1H1kOMduw1CWgLcoKWPl_EqR-DC8nzjKhA4HiXxYEVlY7Ak3ySQdVemYXr78igxHdJteiZHtg1eGXQZV1Ms4db6CNrUFVdDjjgn4o8y1MrT-ee83Usfd_S6MKgPpHjXgtoIRhdSCYuFTx70j6q57Roif5BiOXO_S6BQrM6YW_neSTLDOaFEhao1INRUsDJZPB-3zqxMrqJ551BPgB5sDPBC614kG-Xn5GHVNB-zISBbKAz1YAgyW1DdITZ74GZRv1xQr997S3WBSe4sUt4QN6lFU2KCjviAKdXIc_SoUsc-0=w776-h1035-s-no?authuser=0"
      />

      {/* <motion.div
        initial={{
          x: -200,
        }}
        whileInView={{ x: 0 }}
      >
        <Image
          src={aboutPic}
          alt="About section photo of the author"
          className="scale-[0.5]"
        />
      </motion.div> */}
    </div>
  );
}
