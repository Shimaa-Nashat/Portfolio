import SectionHeading from "./SectionHeading";

const steps = [["Understand", "Get clear on the goal, audience, and content before shaping the interface."], ["Build", "Create a responsive foundation with reusable components and readable code."], ["Refine", "Check the details across screen sizes and improve clarity, consistency, and usability."]];

export default function Approach() {
  return <section className="section section-line" id="approach"><div className="wrap approach-layout"><div><SectionHeading label="My process" title="From first idea to final details" text="I keep the work focused on the people who will use it and the goals it needs to support."/><a className="text-link" href="#contact">Have a project in mind? Let’s talk ↗</a></div><div className="approach-steps">{steps.map(([title, text], index)=><article className="approach-step reveal" key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>;
}
