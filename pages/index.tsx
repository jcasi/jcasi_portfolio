import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-dark-blue text-off-white h-screen overflow-auto">
      <Head>
        <title>@jcasi</title>
        <link rel="shortcut icon" href="/icon.ico" />
      </Head>

      <Analytics />

      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
