import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Project from "@/components/project";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Project />
    </div>
  );
}
