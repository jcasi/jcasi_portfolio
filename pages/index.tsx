import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-dark-blue text-off-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>@jcasi</title>
        <link rel="shortcut icon" href="/icon.ico" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-end">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-end">
        <About />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-end">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-end">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-end">
        <Contact />
      </section>
    </div>
  );
}
