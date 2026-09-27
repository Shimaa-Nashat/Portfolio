import SectionHeading from "./SectionHeading";

const offerings = [
  ["01", "Front-end development", "Build responsive, component-based interfaces with React, JavaScript, HTML, and CSS."],
  ["02", "Design to interface", "Translate UI/UX concepts into polished pages with clear hierarchy, thoughtful spacing, and consistent details."],
  ["03", "Responsive refinement", "Improve existing pages for mobile and desktop, with attention to accessibility and ease of use."],
];

export default function Services() {
  return <section className="section section-line" id="services"><div className="wrap"><SectionHeading label="How I can contribute" title="What I bring to a project" text="A practical front-end skill set, a thoughtful eye for interface details, and a collaborative approach."/><div className="services-grid">{offerings.map(([number, title, text])=><article className="service-card reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b aria-hidden="true">↗</b></article>)}</div></div></section>;
}
