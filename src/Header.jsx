import { useEffect, useState } from "react";
import Logo from "../public/logo.png"

const navItems = [
  "about",
  "services",
  "skills",
  "experience",
  "projects",
  "approach",
  "education",
  "courses",
  "contact",
];

export default function Header({ Arrow }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-32% 0px -58% 0px" },
    );
    navItems.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#home">
          <img src={Logo} className="brand-mark"/>Shimaa Nashat
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((id) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
            >
              {{ projects: "Work", approach: "Process", education: "Background", courses: "Learning" }[id] || id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="mailto:shimaanashat78@gmail.com">
          Let's talk {Arrow}
        </a>
      </nav>
    </header>
  );
}
