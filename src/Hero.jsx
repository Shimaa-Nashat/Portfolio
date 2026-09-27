import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CV from "../public/Shimaa_Nashat_CV.pdf"

export default function Hero({ Arrow }) {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <HeroInfo Arrow={Arrow} />
        <HeroArt />
      </div>
    </section>
  );
}

function HeroArt() {
  return (
    <div className="hero-art reveal" aria-hidden="true">
      <div className="rings" />
      <span className="float-tag tag-top">React · Front End</span>
      <span className="float-tag tag-bottom">Responsive by design</span>
      <div className="code-card">
        <div className="code-title">
          <b />
          <b />
          <b />
          <span>shimaa.jsx</span>
        </div>
        <pre>
          <code>
            <em>const</em> developer = {"{"}
            <br /> name: <i>"Shimaa Nashat"</i>,<br /> focus: <i>"Front-End"</i>
            ,<br /> framework: <strong>React</strong>,
            <br /> approach: [<br /> <i>"Accessible"</i>, <i>"Responsive"</i>,
            <br /> <i>"Maintainable"</i>
            <br /> ]<br />
            {"}"}<i class="animate-blink text-violet">|</i>;
          </code>
        </pre>
        <div className="code-foot">Building thoughtful web experiences</div>
      </div>
    </div>
  );
}

function HeroInfo({ Arrow }) {
  return (
    <div className="hero-copy reveal">
      <p className="eyebrow">Portfolio · Aswan, Egypt</p>
      <h1>
        Shimaa <span>Nashat.</span>
      </h1>
      <p className="hero-lead">
        Front-End Developer <i>· React specialist</i>
      </p>
      <p className="muted hero-summary">
        I turn thoughtful designs into clear, responsive web experiences. With
        React and modern front-end tools, I focus on interfaces that feel
        intuitive, work across screen sizes, and are easy to maintain.
      </p>
      <div className="actions">
        <a className="button primary" href="#projects">
          View My Work {Arrow}
        </a>
        <a className="button" href={CV} download>
          Download my CV <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="social-links ">
        <a className="hero-links" href="mailto:shimaanashat78@gmail.com">
          <MdEmail /> Email
        </a>
        <a
          className="hero-links"
          href="https://www.linkedin.com/in/shimaa-nashat"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin /> LinkedIn ↗
        </a>
        <a
          className="hero-links"
          href="https://github.com/Shimaa-Nashat"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub /> GitHub ↗
        </a>
      </div>
    </div>
  );
}
