'use client';
import { ParticleCanvas } from "@/hooks/particle";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      <ParticleCanvas />
      <div className="max-w-screen-lg md:max-w-6xl mx-auto px-6 py-28">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Text Content */}
          <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:w-1/2">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4 md:mb-6">
              Full Stack
              <br />

              <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-md md:text-2xl text-content/80 text-justify mb-6 md:mb-8">
              I am a passionate full stack developer with a focus on creating innovative web applications and mobile apps that deliver great user experiences.
            </motion.p>

            <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="relative overflow-hidden px-6 py-3 rounded-full bg-surface border border-white/10 hover:border-primary/30 group">
              <span className="text-md md:text-xl text-content group-hover:text-primary transition-colors">
                Download CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>

          {/* Image Card */}
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="lg:w-1/2 relative">

            <div className="realtive w-80 lg:w-[480px] aspect-square group">
              {/* Floating Animation */}
              <motion.div
              className="relative aspect-square rounded-3xl overflow-hidden bg-surface backdrop-blur-sm border border-white/10">
                <Image src="/img/myself.jpg" alt="Myself" fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-8 left-8">
                  <div className="text-xl lg:text-3xl font-bold text-content">
                    <motion.span
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                    style={{ backgroundSize: "200% 200%" }}
                    className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Abdur Rahman
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}