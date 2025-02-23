'use client';
import { motion } from "framer-motion";
import { BiLogoFirebase } from "react-icons/bi";
import { SiBootstrap, SiDocker, SiExpress, SiFigma, SiLaravel, SiPython, SiXampp } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import Image from "next/image";

const projects = [
  {
    title: "AMAN",
    description: "Creating an mobile application for labor preparation. Using kotlin programming language. Design with figma. Published to google playstore.",
    tech: [
      { name: "Figma", icon: SiFigma, color: "#FF01E6" },
      { name: "Kotlin", icon: TbBrandKotlin, color: "#7F52FF" },
    ],
    image: "/img/AMAN.png",
  },
  {
    title: "BacaKomik",
    description: "Creating an user-friendly mobile app interface for readers. Making it easy for readers to access comics, various features, and more.",
    tech: [
      { name: "Figma", icon: SiFigma, color: "#FF01E6" },
    ],
    image: "/img/BacaKomik.png",
  },
  {
    title: "FishDeas",
    description: "Create an mobile application to identify condition of ornamental fish including fish diseases, empowering farmers and hobbyists with valuable resources.",
    tech: [
      { name: "Figma", icon: SiFigma, color: "#FF01E6" },
      { name: "Kotlin", icon: TbBrandKotlin, color: "#7F52FF" },
    ],
    image: "/img/FishDeas.png",
  },
  {
    title: "FishDeas API",
    description: "Create an back-end using JavaScript, deploy to Google Cloud Platform using Cloud Run. Firebase as a platform with data storage, and user authentication.",
    tech: [
      { name: "Docker", icon: SiDocker, color: "#1D63ED" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Firebase", icon: BiLogoFirebase, color: "#FF9408" },
      { name: "Pyhon", icon: SiPython, color: "#FFCE41" },
    ],
    image: "/img/FishDeasAPI.png",
  },
  {
    title: "Pulsaku",
    description: "Create an user friendly mobile app interface for ecommerce. Make it easy for users to purchase Pulsa, support many payments, and more.",
    tech: [
      { name: "Figma", icon: SiFigma, color: "#FF01E6" },
    ],
    image: "/img/Pulsaku.png",
  },
  {
    title: "Restoroku",
    description: "Create an website based inventory system, managing a good data processing system. Checking stock items, and making reports on these items.",
    tech: [
      { name: "Bootstrap", icon: SiBootstrap, color: "#6F10F4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "XAMPP", icon: SiXampp, color: "#F37623" },
    ],
    image: "/img/RestoRoku.png",
  },
  {
    title: "TrashHub API",
    description: "Create an back-end using JavaScript, deploy to Google Cloud Platform using Cloud Run. Firebase as a platform with data storage, and user authentication.",
    tech: [
      { name: "Docker", icon: SiDocker, color: "#1D63ED" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Firebase", icon: BiLogoFirebase, color: "#FF9408" },
      { name: "Pyhon", icon: SiPython, color: "#FFCE41" },
    ],
    image: "/img/TrashHubAPI.png",
  },
  {
    title: "ZStore",
    description: "Create an user friendly mobile app interface for ecommerce. Make it easy for users to purchase products, support many payments, and more.",
    tech: [
      { name: "Figma", icon: SiFigma, color: "#FF01E6" },
    ],
    image: "/img/ZStore.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-black">
      <div className="max-w-screen-lg md:max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-content mb-4 text-center">Projects</h2>

          <div className="w-24 md:w-36 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {
            projects.map((project, i) => (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative h-[550px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer">
                {/* Image Section */}
                <motion.div
                className="h-[250px] relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}>
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" priority />
                </motion.div>

                {/* Content Section */}
                <motion.div
                className="p-6 h-[25px] bg-surface"
                transition={{ duration: 0.3 }}>
                  <h3 className="text-2xl font-bold text-content mb-4">{project.title}</h3>

                  <p className="text-content/80 text-justify mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {
                      project.tech.map((tech, j) => (
                        <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech">
                          <tech.icon color={tech.color} className="w-4 h-4 transition-colors" />

                          <span className="group-hover/tech:text-content transition-colors">
                            {tech.name}
                          </span>
                        </span>
                      ))
                    }
                  </div>
                </motion.div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </section>
  );
}