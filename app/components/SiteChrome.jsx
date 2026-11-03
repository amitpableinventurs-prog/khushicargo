"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainPhone, phones, whatsappUrl } from "../contact-info";
import { services } from "../services/service-list";
import { asset } from "../asset-path";

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
  }

  function current(path) {
    return pathname === path ? "page" : undefined;
  }

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span className="topline-tagline" lang="hi">आपका विश्वास ही हमारी पहचान है</span>
          <div className="topline-contact">
            <a href={`tel:${mainPhone.tel}`}>☎ &nbsp; {mainPhone.display}</a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="KhushiCargo home" onClick={closeMenu}>
            <img className="brand-logo" src={asset("/images/kcs-mark.png")} alt="" width="52" height="52" />
            <span className="brand-copy">
              <strong>KhushiCargo</strong>
              <b>Packers <i>&</i> Movers</b>
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            <Link href="/" aria-current={current("/")} onClick={closeMenu}>Home</Link>
            <Link href="/about" aria-current={current("/about")} onClick={closeMenu}>About us</Link>
            <details className={pathname.startsWith("/services") ? "nav-services is-current" : "nav-services"}>
              <summary>Services <span aria-hidden="true">⌄</span></summary>
              <div className="services-dropdown">
                <Link className="dropdown-all" href="/services" aria-current={current("/services")} onClick={closeMenu}>All services</Link>
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} aria-current={current(`/services/${service.slug}`)} onClick={closeMenu}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/cities" aria-current={current("/cities")} onClick={closeMenu}>Cities</Link>
            <Link href="/how-it-works" aria-current={current("/how-it-works")} onClick={closeMenu}>How it works</Link>
            <Link href="/testimonials" aria-current={current("/testimonials")} onClick={closeMenu}>Testimonials</Link>
            <Link href="/contact" aria-current={current("/contact")} onClick={closeMenu}>Contact</Link>
            <Link className="nav-cta" href="/#quote" onClick={closeMenu}>Get a quote <ArrowIcon /></Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand footer-brand" href="/">
            <img className="brand-logo" src={asset("/images/kcs-mark.png")} alt="" width="52" height="52" />
            <span className="brand-copy"><strong>KhushiCargo</strong><b>Packers <i>&</i> Movers</b></span>
          </Link>
          <p>Making the journey to your next chapter feel a little easier, one careful move at a time.</p>
          <div className="footer-qr">
            <img src={asset("/images/qr-code.png")} alt="QR code for the KhushiCargo office location" width="84" height="89" />
            <span>Scan the location<br />Find your direction</span>
          </div>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/about">About us</Link>
          <Link href="/services">Our services</Link>
          <Link href="/cities">Cities we serve</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className="footer-column">
          <h3>Get in touch</h3>
          {phones.map((phone) => (
            <a key={phone.tel} href={`tel:${phone.tel}`}>{phone.display}{phone.label && <small> · {phone.label}</small>}</a>
          ))}
          <p>Plot No. 29 EA, Scheme No. 94<br />Indore, Madhya Pradesh 452010</p>
          <p><strong>Service area</strong><br />Madhya Pradesh, Chhattisgarh, Odisha, Andhra Pradesh, Telangana, Karnataka &amp; All India</p>
        </div>
        <div className="footer-note">
          <span>Made for the</span><strong>road ahead.</strong>
          <Link href="/contact">Let’s plan your move <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 KhushiCargo Packers & Movers</span>
        <nav className="footer-legal" aria-label="Legal">
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </nav>
        <span>Carefully moving you forward.</span>
      </div>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with KhushiCargo on WhatsApp">
        <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="currentColor">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.23 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.05.72C5.8.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.28l5.69-1.49a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02z" />
        </svg>
      </a>
    </footer>
  );
}
