'use client';
import { ParticleCanvas } from "@/hooks/particle";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen relative py-60 overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="max-w-screen-lg md:max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center relative mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-content mb-4 text-center">Contact</h2>

          <div className="w-24 md:w-36 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* Contact Content */}
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-md md:text-2xl text-content/80 text-center">
          I do love to hear your thoughts! Feel free to contact me directly at &nbsp;
          <a className="font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent"
          href="mailto:abdur.rahmanux@gmail.com">
            abdur.rahmanux@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
}