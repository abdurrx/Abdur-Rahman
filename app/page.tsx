import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Analytics/>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}
