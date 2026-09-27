import { FaCode } from "react-icons/fa6";
import { IoBrush } from "react-icons/io5";
import { RiLightbulbAiLine } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    icon: FaCode,
    name: "Front-end",
    list: "HTML5 · CSS3 · JavaScript · React",
  },
  {
    icon: RiLightbulbAiLine,
    name: "Programming",
    list: "Java · Python · C",
  },
  {
    icon: FaDatabase,
    name: "Data & databases",
    list: "SQL · relational database fundamentals",
  },
  {
    icon: IoBrush,
    name: "Interface design",
    list: "Figma · UI/UX fundamentals · responsive layouts",
  },
  {
    icon: FiTool,
    name: "Tools & workflow",
    list: "VS Code · Git · GitHub · CodeSandbox",
  },
  {
    icon: FaUsers,
    name: "Ways of working",
    list: "Problem solving · communication · teamwork · leadership",
  },
];

export default function Skills() {
  return (
    <section className="section section-line" id="skills">
      <div className="wrap">
        <SectionHeading
          label="What I work with"
          title="Skills"
          text="The technologies and habits I bring to building and improving web experiences."
        />
        <div className="skills-grid">
          {skills.map(({ icon: Icon, name, list }, index) => (
            <article className="skill-card reveal" key={name}>
              <Icon className="skill-icon" aria-hidden="true" />
              <div className="skill-index">0{index + 1}</div>
              <h3>{name}</h3>
              <p>{list}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
