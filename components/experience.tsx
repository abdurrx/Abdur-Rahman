'use client';
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import { SiLaravel } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: "Graduated Bachelor Degree",
    location: "Tanjungpinang, Indonesia",
    description: "Graduated with a bachelor's degree in Informatics Engineering within 4 years. Throughout my studies, I developed deep interest in programming, technology, and problem solving.",
    icon: FaGraduationCap,
    date: "2020-2024",
  },
  {
    title: "Software Developer",
    location: "Tanjungpinang, Indonesia",
    description: "Create an mobile application for labor preparation. Using kotlin programming language. Design with figma. Published to google playstore.",
    icon: TbBrandKotlin,
    date: "2024",
  },
  {
    title: "Graduated Bangkit Academy 2024 H1",
    location: "Jakarta, Indonesia",
    description: "Participated in the Bangkit Academy 2024 H1 program for 5 months by taking the Cloud Computing learning path. During this program, I learned to become a Cloud Engineer.",
    icon: FaGraduationCap,
    date: "2024",
  },
  {
    title: "Website Developer",
    location: "Tanjungpinang, Indonesia",
    description: "Completed my college studies practical work, by creating a website-based item data processing system at Roku Japanese Cuisine.",
    icon: SiLaravel,
    date: "2023",
  },
  {
    title: "Graduated Bangkit Academy 2023 H1",
    location: "Jakarta, Indonesia",
    description: "Participated in the Bangkit Academy 2023 H1 program for 6 months by taking the Mobile Development learning path. During this program, I learned to become a Mobile Developer.",
    icon: FaGraduationCap,
    date: "2023",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-black">
      <div className="max-w-screen-lg md:max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-content mb-4 text-center">My Experience</h2>

          <div className="w-24 md:w-36 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
        </motion.div>

        {/* Experience Content */}
        <VerticalTimeline lineColor="#E5E7EB">
          {
            experiences.map((experience, i) => (
              <VerticalTimelineElement
              key={i}
              contentStyle={{
                background: '#111827',
                border: '1px solid #E5E7EB',
                boxShadow: 'none',
                color: '#E5E7EB',
                textAlign: 'justify',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #E5E7EB',
              }}
              date={experience.date}
              icon={<experience.icon />}
              iconStyle={{ background: '#111827' }}>
                <h3 className="font-bold">{experience.title}</h3>
                <p className="!mt-0">{experience.location}</p>
                <p className="!mt-3">{experience.description}</p>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
      </div>
    </section>
  );
}