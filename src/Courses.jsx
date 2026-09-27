import SectionHeading from "./SectionHeading";

const courses = [
  ["CS50", "Harvard University (edX)"],
  ["Front-End Web Development", "TIEC"],
  ["Learn HTML & CSS", "MaharaTech (ITI)"],
  ["Freelance Bootcamp", "TIEC"],
  ["UI/UX Design Masterclass with Adobe XD", "Udemy"],
];

export default function Courses() {
  return (
    <section className="section section-line" id="courses">
      <div className="wrap">
        <SectionHeading
          label="Curious by design"
          title="Learning in progress"
          text="A selection of courses that have helped me grow in programming, web development, design, and independent work."
        />
        <div className="courses-grid">
          {courses.map(([name, issuer]) => (
            <article className="course-card reveal" key={name}>
              <h3>{name}</h3>
              <p>{issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
