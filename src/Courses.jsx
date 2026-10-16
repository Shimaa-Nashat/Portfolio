import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "./SectionHeading";

const courses = [
  {
    name: "CS50",
    issuer: "Harvard University (edX)",
    image: "/certificates/cs50.jpg",
  },
  {
    name: "Core Team of the Web Development Track",
    issuer: "EELU Aswan Student Branch",
    image: "/certificates/eeluBranchS1.jpg",
  },
  {
    name: "Front-End Web Development",
    issuer: "TIEC",
    image: "/certificates/frontend-tiec.jpg",
  },
  {
    name: "Learn HTML & CSS",
    issuer: "MaharaTech (ITI)",
    image: "/certificates/html-css.jpg",
  },
  {
    name: "Freelance Bootcamp",
    issuer: "TIEC",
    image: "/certificates/freelance.jpg",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    image: "/certificates/ccna.jpg",
  },
  {
    name: "Associate Data Analyst in SQL",
    issuer: "DataCamp",
    image: "/certificates/data-analyst-sql.jpg",
  },
  {
    name: "Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft",
    image: "/certificates/security-compliance-identity.jpg",
  },
];

const AUTOPLAY_MS = 3500;

export default function Courses() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [maxIndex, setMaxIndex] = useState(courses.length - 1);
  const [paused, setPaused] = useState(false);

  const metrics = useCallback(() => {
    const t = trackRef.current;
    if (!t || !t.children[0]) return { step: 1, max: 0 };
    const gap = parseFloat(getComputedStyle(t).columnGap) || 0;
    const step = t.children[0].offsetWidth + gap;
    const perView = Math.max(1, Math.round((t.clientWidth + gap) / step));
    return { step, max: Math.max(0, courses.length - perView) };
  }, []);

  const goTo = useCallback(
    (i) => {
      const t = trackRef.current;
      if (!t) return;
      const { step } = metrics();
      t.scrollTo({ left: i * step, behavior: "smooth" });
    },
    [metrics],
  );

  const current = useCallback(() => {
    const t = trackRef.current;
    const { step, max } = metrics();
    return Math.min(max, Math.round(t.scrollLeft / step));
  }, [metrics]);

  const next = useCallback(() => {
    const { max } = metrics();
    const i = current();
    goTo(i >= max ? 0 : i + 1);
  }, [current, goTo, metrics]);

  const prev = useCallback(() => {
    const { max } = metrics();
    const i = current();
    goTo(i <= 0 ? max : i - 1);
  }, [current, goTo, metrics]);

  // تحديث الـ dots والحد الأقصى عند السكرول / تغيير حجم الشاشة
  useEffect(() => {
    const t = trackRef.current;
    const update = () => {
      const { max } = metrics();
      setMaxIndex(max);
      setActive(current());
    };
    update();
    t.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      t.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [current, metrics]);

  // القلب التلقائي
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section className="section section-line" id="courses">
      <div className="wrap">
        <SectionHeading
          label="Curious by design"
          title="Certificates"
          text="A selection of courses that have helped me grow in programming, web development, design, and independent work."
        />

        <div
          className="carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 4000)}
        >
          <div className="carousel-track" ref={trackRef}>
            {courses.map((c) => (
              <article className="cert-card" key={c.name}>
                <div className="cert-image">
                  <img
                    src={c.image}
                    alt={`${c.name} certificate`}
                    loading="lazy"
                    draggable="false"
                  />
                </div>
                <h3>{c.name}</h3>
                <p>{c.issuer}</p>
              </article>
            ))}
          </div>

          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={prev}
              aria-label="Previous certificate"
            >
              ‹
            </button>
            <div className="carousel-dots">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  className={i === active ? "dot active" : "dot"}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="carousel-btn"
              onClick={next}
              aria-label="Next certificate"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
