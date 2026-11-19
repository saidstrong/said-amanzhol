import Link from "next/link";
import { copy, localePath, type Locale } from "@/lib/content";
import { resume } from "@/lib/resume";

function ProfileRecords({
  items,
  heading,
  id,
}: {
  items: readonly (readonly [string, string, string])[];
  heading: string;
  id: string;
}) {
  return (
    <section className="profile-records" id={id} aria-labelledby={`${id}-title`}>
      <h3 className="display profile-subtitle" id={`${id}-title`}>{heading}</h3>
      <ul className="profile-list">
        {items.map(([date, title, detail]) => (
          <li className="profile-record" key={`${date}-${title}`}>
            <p className="eyebrow">{date}</p>
            <div>
              <h4>{title}</h4>
              <p>{detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProfileSection({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const r = resume[locale];

  return (
    <section className="portfolio-profile" id="about" aria-labelledby="about-title">
      <div className="shell profile-grid">
        <div className="profile-about">
          <h2 className="display profile-heading" id="about-title">{c.about}</h2>
          <p>{c.aboutBody}</p>
          <Link prefetch={false} className="linkline" href={localePath(locale, "/cv")}>
            {c.viewCV} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="profile-details">
          <section className="profile-records" id="milestones" aria-labelledby="milestones-title">
            <h3 className="display profile-subtitle" id="milestones-title">{c.milestones}</h3>
            <ul className="profile-list">
              {r.milestones.map(([title, description]) => (
                <li className="profile-record profile-milestone" key={title}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
          </section>
          <ProfileRecords items={r.experience} heading={c.experience} id="experience" />
          <ProfileRecords items={r.education} heading={c.education} id="education" />
        </div>
      </div>
    </section>
  );
}
