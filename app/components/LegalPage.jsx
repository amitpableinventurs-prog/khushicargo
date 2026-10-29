import { PageHero } from "./PageSections";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export default function LegalPage({ crumb, title, intro, updated, sections }) {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="Legal" crumb={crumb} title={title} text={intro} />

        <section className="section-pad">
          <div className="container legal-grid">
            <aside className="legal-toc">
              <span>On this page</span>
              <ol>
                {sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}
              </ol>
            </aside>
            <div className="legal-content">
              <p className="legal-updated">Last updated: {updated}</p>
              {sections.map((section, index) => (
                <section id={section.id} key={section.id}>
                  <h2><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>
                  {section.body}
                </section>
              ))}
              <div className="legal-contact">
                <strong>Questions about this page?</strong>
                <p>Call <a href="tel:+916262745451">+91 62627 45451</a> or visit us at Plot No. 29 EA, Scheme No. 94, Indore, Madhya Pradesh 452010.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
