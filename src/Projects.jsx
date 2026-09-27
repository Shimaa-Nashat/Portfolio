import SectionHeading from "./SectionHeading";
import HealthEmpire from "./assets/HealthEmpire.png";
import CineRate from "./assets/CineRate.png";
import Homora from "./assets/Homora.png";

const projects = [
  {
    name: "Homora",
    kind: "Furniture e-commerce",
    image: Homora,
    featured: true,
    github: "https://github.com/Shimaa-Nashat/Homora",
    link: "https://homora-tawny.vercel.app/",
    description:
      "A furniture store web application built with Flask and Python, featuring dynamic product pages, shopping cart functionality, database integration, and responsive design.",
    features: [
      "Built a Flask-based multi-page furniture store with Jinja2 templates.",
      "Integrated SQLite for storing and managing product information.",
      "Implemented dynamic product and category pages.",
      "Added shopping cart functionality.",
      "Built a responsive interface using Bootstrap.",
      "Added JavaScript scroll and reveal animations.",
    ],
    technologies: ["Flask", "Python", "Jinja2", "HTML5", "CSS3", "JavaScript", "Bootstrap", "SQLite"],
  },
  {
    name: "CineRate",
    kind: "Movie database",
    image: CineRate,
    github: "https://github.com/Shimaa-Nashat/CineRate",
    link: null,
    description:
      "A relational movie database designed to manage movies, directors, actors, genres, users, ratings, reviews, and watchlists.",
    features: [
      "Designed a 10-table relational database with one-to-many and many-to-many relationships.",
      "Used junction tables to resolve many-to-many relationships between movies, genres, and actors.",
      "Applied primary keys, foreign keys, CHECK, UNIQUE, DEFAULT, and IDENTITY constraints.",
      "Developed SQL queries using JOINs, GROUP BY, aggregation, subqueries, LIKE, BETWEEN, and ORDER BY.",
      "Applied 1NF, 2NF, and 3NF normalization to reduce redundancy and maintain data integrity.",
    ],
    technologies: ["SQL", "MySQL"],
  },
  {
    name: "Health Empire",
    kind: "Healthcare platform",
    image: HealthEmpire,
    github: "https://github.com/Shimaa-Nashat/Health-Empire",
    link: "https://shimaa-nashat.github.io/Health-Empire/",
    description:
      "A responsive healthcare platform designed to help users explore healthcare services, discover doctors and coaches, manage orders, and navigate health-related resources through a modern and user-friendly interface.",
    features: [
      "Built a multi-page healthcare experience with responsive layouts.",
      "Implemented user authentication with Login and Sign Up pages.",
      "Added doctor and health coach browsing.",
      "Built an interactive menu and navigation system.",
      "Implemented shopping cart functionality.",
      "Created payment and order/service-tracking pages.",
      "Designed a responsive UI optimized for different screen sizes.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section className="section section-line projects-section" id="projects">
      <div className="wrap">
        <SectionHeading
          label="Selected work"
          title="Projects"
          text="A few things I’ve designed and built, from a full furniture shop to a relational movie database."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card reveal ${project.featured ? "featured" : ""}`}
              key={project.name}
            >
              <div className="project-visual">
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.name} project preview`}
                />
                <span className="project-index">0{index + 1} / 03</span>
                <span className="project-category">{project.kind}</span>
              </div>

              <div className="project-content">
                <div className="project-heading-row">
                  <h3>{project.name}</h3>
                </div>
                <p className="project-description">{project.description}</p>

                <details className="project-details">
                  <summary>
                    <span>Project details</span>
                    <span className="details-count">{project.features.length} highlights</span>
                  </summary>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </details>

                <div className="tech-list" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.link && (
                    <a className="project-primary-link" href={project.link} target="_blank" rel="noopener noreferrer">
                      View live project <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.github && (
                    <a className="project-source-link" href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} on GitHub`}>
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
