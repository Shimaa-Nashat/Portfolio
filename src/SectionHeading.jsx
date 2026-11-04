export default function SectionHeading({ label, title, text }) {
  return (
    <div className="section-heading reveal">
      <h2>{title}</h2>
      {text && <p className="muted">{text}</p>}
    </div>
  );
}
