import SectionHeading from "./SectionHeading";
export default function Experience() {
  return (
    <section className="section section-line" id="experience">
      <div className="wrap">
        <SectionHeading label="Where I’ve contributed" title="Experience & community" text="I value sharing what I learn and working alongside others. My recent experience includes contributing to a student technology community." />
        <article className="experience-card reveal">
          <div>
            <h3>Team Member</h3>
            <p className="accent">
              EELU Aswan Student Branch · Student Activities
            </p>
            <p className="muted">
              Planned and delivered technical sessions on web development, helping fellow students explore foundational concepts and build confidence with the tools.
            </p>
          </div>
          <time>Dec 2024 — May 2025</time>
        </article>
      </div>
    </section>
  );
}
