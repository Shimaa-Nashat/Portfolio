import {
  BsEnvelope,
  BsWhatsapp,
} from "react-icons/bs";
import { 
  LuGithub ,
  LuLinkedin, 
} from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const contacts = [
  {
    id: 1,
    label: "Email",
    value: "Send a message",
    href: "mailto:shimaanashat78@gmail.com",
    icon: <BsEnvelope />,
    ariaLabel: "Email Shimaa",
  },
  {
    id: 2,
    label: "WhatsApp",
    value: "+20 112 958 8081",
    href: "https://wa.me/201129588081",
    icon: <BsWhatsapp />,
    ariaLabel: "Chat with Shimaa on WhatsApp",
    external: true,
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "Connect",
    href: "https://www.linkedin.com/in/shimaa-nashat",
    icon: <LuLinkedin />,
    ariaLabel: "Shimaa on LinkedIn",
    external: true,
  },
  {
    id: 4,
    label: "GitHub",
    value: "See my code",
    href: "https://github.com/Shimaa-Nashat",
    icon: <LuGithub />,
    ariaLabel: "Shimaa on GitHub",
    external: true,
  },
];

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
            Have a role, collaboration, or idea you&rsquo;d like to discuss?
            I&rsquo;d be happy to hear from you. Send a note by email or connect
            with me on LinkedIn.
          </p>

          <div className="contact-links">
            {contacts.map((item) => (
              <a
                className="contact-card"
                key={item.id}
                href={item.href}
                aria-label={item.ariaLabel}
                {...(item.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <span className="contact-icon">{item.icon}</span>
                <span className="contact-card-copy">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </div>
          <p className="contact-location">
            <FaLocationDot /> Aswan, Egypt
          </p>
        </div>
      </div>
    </section>
  );
}
