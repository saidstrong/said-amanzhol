import { copy, type Locale } from "@/lib/content";
import { contact } from "@/lib/resume";

export function ContactSection({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <footer id="contact" className="portfolio-footer" aria-labelledby="contact-title">
      <div className="shell">
        <div className="footer-contact">
          <h2 className="display" id="contact-title">{c.contact}</h2>
          <a className="footer-email linkline" href={`mailto:${contact.email}`}>
            {contact.email} <span className="arrow-up-right" aria-hidden="true" />
          </a>
        </div>
        <ul className="footer-socials">
          {contact.profiles.map(({ name, href }) => (
            <li key={name}>
              <a className="linkline" href={href} target="_blank" rel="noreferrer">
                {name} <span className="arrow-up-right" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <div className="footer-colophon">
          <span>{c.name.join(" ")}</span>
          <span>{c.location}</span>
        </div>
      </div>
    </footer>
  );
}
