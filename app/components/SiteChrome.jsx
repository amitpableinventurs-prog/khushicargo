"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainPhone, officePhone, phones } from "../contact-info";
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
            <a href={`tel:${officePhone.tel}`}>Office: {officePhone.display}</a>
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
    </footer>
  );
}
