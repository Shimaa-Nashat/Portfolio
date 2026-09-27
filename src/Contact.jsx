import {
  BsFillTelephoneFill,
  BsEnvelope,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="section section-line" id="contact">
      <div className="wrap">
        <div className="contact-panel reveal">
          <p className="eyebrow">Get in touch</p>
          <h2>
            Let&rsquo;s make something
            <br />
            <span>useful together.</span>
          </h2>
          <p className="muted contact-intro">
            Have a role, collaboration, or idea you&rsquo;d like to discuss? I&rsquo;d be
            happy to hear from you. Send a note by email or connect with me on
            LinkedIn.
          </p>

          <div className="contact-links">
            <a className="contact-card" href="mailto:shimaanashat78@gmail.com" aria-label="Email Shimaa">
              <span className="contact-icon"><BsEnvelope /></span>
              <span className="contact-card-copy"><span>Email Shimaa</span><strong>Send a message</strong></span>
            </a>
            <a className="contact-card" href="tel:+201129588081" aria-label="Call Shimaa">
              <span className="contact-icon"><BsFillTelephoneFill /></span>
              <span className="contact-card-copy"><span>Phone</span><strong>+20 112 958 8081</strong></span>
            </a>
            <a className="contact-card" href="https://www.linkedin.com/in/shimaa-nashat" target="_blank" rel="noreferrer">
              <span className="contact-icon"><BsLinkedin /></span>
              <span className="contact-card-copy"><span>LinkedIn</span><strong>Connect</strong></span>
            </a>
            <a className="contact-card" href="https://github.com/Shimaa-Nashat" target="_blank" rel="noreferrer">
              <span className="contact-icon"><BsGithub /></span>
              <span className="contact-card-copy"><span>GitHub</span><strong>See my code</strong></span>
            </a>
          </div>
          <p className="contact-location"><FaLocationDot /> Aswan, Egypt</p>
        </div>
      </div>
    </section>
  );
}
