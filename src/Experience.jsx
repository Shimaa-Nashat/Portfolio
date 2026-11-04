import SectionHeading from "./SectionHeading";

const experiences = [
  {
    id: 1,
    role: "Team Member",
    organization: "EELU Aswan Student Branch · Student Activities",
    description:
      "Planned and delivered technical sessions on web development, helping fellow students explore foundational concepts and build confidence with the tools.",
    period: "Dec 2024 — May 2025",
  },
];

export default function Experience() {
  return (
    <section className="section section-line" id="experience">
      <div className="wrap">
        <SectionHeading
          title="Experience & community"
          text="I value sharing what I learn and working alongside others. My recent experience includes contributing to a student technology community."
        />

        {experiences.map((item) => (
          <article className="experience-card reveal" key={item.id}>
            <div>
              <h3>{item.role}</h3>
              <p className="accent">{item.organization}</p>
              <p className="muted">{item.description}</p>
            </div>
            <time>{item.period}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
