import { useEffect } from "react";
import Contact from "./Contact";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Header from "./Header";
import Skills from "./Skills";
import Experience from "./Experience";
import Courses from "./Courses";
import Education from "./Education";
import Services from "./Services";
import Approach from "./Approach";

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      {diagonal ? (
        <path d="M7 17 17 7M7 7h10v10" />
      ) : (
        <path d="M5 12h14m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header Arrow={<Arrow diagonal />} />
      <main>
        <Hero Arrow={<Arrow />} />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Approach />
        <Education />
        <Courses />
        <Contact Arrow={<Arrow diagonal />} />
      </main>
      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Shimaa Nashat</span>
          <span>Front-End Web Developer · Aswan, Egypt</span>
        </div>
      </footer>
    </>
  );
}
