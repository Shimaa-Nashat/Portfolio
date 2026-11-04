import SectionHeading from "./SectionHeading";
import { FaUserGraduate } from "react-icons/fa6";

const education = [
  {
    id: 1,
    degree: "Bachelor’s Degree · Computer Science",
    period: "Expected 2028",
    institution: "EELU · Faculty of Computers and Information Technology",
    icon: <FaUserGraduate />
  },
];

export default function Education() {
  return (
    <section className="section section-line" id="education">
      <div className="wrap">
        <SectionHeading
          title="Education"
          text="Studying computer science and information technology at EELU."
        />

        {education.map((item) => (
          <article className="education-card reveal" key={item.id}>
            <div className="edu-symbol">
              {item.icon}
            </div>
            <div className="education-copy">
              <div className="edu-main-info">
                <h3>{item.degree}</h3>
                <p className="muted">{item.period}</p>
              </div>
              <p className="accent">{item.institution}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
