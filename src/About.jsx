import { BsPhone, BsEye, BsCodeSlash, BsWindow } from "react-icons/bs";

const strengths = [
  { label: "Responsive design", Icon: BsPhone },
  { label: "Accessible interfaces", Icon: BsEye },
  { label: "React development", Icon: BsCodeSlash },
  { label: "UI implementation", Icon: BsWindow },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid reveal">
        <div className="about-copy">
          <p className="eyebrow">A little about me</p>
          <h2>
            Thoughtful interfaces.
            <br />
            <span>Solid foundations.</span>
          </h2>
          <p className="body-copy">
            I’m Shimaa, a front-end developer who enjoys turning ideas and UI/UX
            designs into polished, useful web experiences. I work with React and
            the core web technologies to create interfaces that are responsive,
            accessible, and straightforward to use.
          </p>
          <p className="body-copy">
            I care about the details behind a good interface: clear structure,
            consistent spacing, readable content, and code that stays
            maintainable as a project grows. I also enjoy learning across
            software development, databases, and design.
          </p>
        </div>

        <div className="about-strengths" aria-label="Areas of focus">
          {strengths.map(({ label, Icon }) => (
            <div className="about-strength" key={label}>
              <span className="about-strength-icon"><Icon aria-hidden="true" /></span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>

        <div className="about-facts">
          <div>
            <span className="fact-index">01</span>
            <strong>Design-minded</strong>
            <p>I value clear hierarchy and purposeful visual choices.</p>
          </div>
          <div>
            <span className="fact-index">02</span>
            <strong>Always learning</strong>
            <p>I keep building my skills through coursework and hands-on projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
