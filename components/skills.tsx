'use client';
import { motion } from "framer-motion";
import { BiLogoFirebase } from "react-icons/bi";
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiLaravel, SiFigma, SiReact, SiExpress, SiGooglecloud, SiDocker, SiNextdotjs, SiTailwindcss, SiTypescript, SiPython } from "react-icons/si";
import { TbApi, TbBrandKotlin, TbBrandNodejs } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#F16A30" },
  { name: "CSS", icon: SiCss3, color: "#1B75B8" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7E025" },
  { name: "PHP", icon: SiPhp, color: "#556196" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Figma", icon: SiFigma, color: "#FF01E6" },
  { name: "Kotlin", icon: TbBrandKotlin, color: "#7F52FF" },
  { name: "Node.js", icon: TbBrandNodejs, color: "#5fa04e" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "Hapi.js", icon: SiJavascript, color: "#F7E025" },
  { name: "Rest API", icon: TbApi, color: "#FEDF44" },
  { name: "Google Cloud Platform", icon: SiGooglecloud, color: "#4889f4" },
  { name: "Firebase", icon: BiLogoFirebase, color: "#FF9408" },
  { name: "Docker", icon: SiDocker, color: "#1D63ED" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Pyhon", icon: SiPython, color: "#FFCE41" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-48 md:py-36 relative">
      <div className="max-w-screen-lg md:max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-content mb-4 text-center">Skills</h2>

          <div className="w-24 md:w-36 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* Skills Content */}
        <div className="flex flex-wrap justify-center gap-3">
          {
            skills.map((skill, i) => (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -3,
                transition: { duration: 0.2 }
              }}
              className="px-3 md:px-8 py-1 md:py-3 rounded-full bg-white/5 text-content/80 text-sm md:text-xl border border-white/5 hover:bg-surface transition-colors flex items-center gap-2 group">
                <skill.icon color={skill.color} />

                <span className="group-hover/tech:text-content transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
}