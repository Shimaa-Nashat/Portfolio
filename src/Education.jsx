import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section className="section section-line" id="education">
      <div className="wrap">
        <SectionHeading label="Building strong foundations" title="Education" text="Studying computer science and information technology at EELU." />
        <article className="education-card reveal">
          <div className="edu-symbol">✳</div>
          <div className="education-copy">
            <div className="edu-main-info">
              <h3>Bachelor’s Degree · Computer Science</h3>
              <p className="muted">Expected 2028</p>
            </div>
            <p className="accent">
              EELU · Faculty of Computers and Information Technology
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
