import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ParticlesBackground from "./components/ParticlesBackground"
import About from "./sections/About";
import Education from "./sections/Education";
import Projects from "./sections/Projects";

export default function Portfolio() {
  return (
    <>
    <main className="max-w-screen overflow-x-hidden">
      
    <section id="hero" className="relative min-h-screen">
      <div className="absolute inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <div className="transparent relative z-10">
        <Hero />
      </div>
    </section>

      <Navbar />

      <section id="about" className="min-h-screen transparent pt-16 bg-void">
        <About />
      </section>

      <section id="education" className="min-h-screen transparent pt-16 bg-void">
        <Education />
      </section>

      <section id="projects" className="min-h-screen transparent pt-16 bg-void">
        <Projects />
      </section>

    </main>
    </>
  );
}
