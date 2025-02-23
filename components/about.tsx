'use client';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen py-48 md:py-54 relative">
      <div className="max-w-screen-lg md:max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-content mb-4 text-center">About Me</h2>

          <div className="w-24 md:w-36 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* About Content */}
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-md md:text-2xl text-content/80 text-justify">
          Graduated of Informatics Engineering from Sekolah Tinggi Teknologi Indonesia Tanjung Pinang with summa cum laude predicate and GPA 4.00. Having analytical skills and technical expertise in mobile development, web development, backend development, and cloud computing, along with solid ability to adapt quickly to change and overcome challenges with determination.
        </motion.p>
      </div>
    </section>
  );
}