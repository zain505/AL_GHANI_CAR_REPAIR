import React, { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const nav = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
  ];

  const onNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); onNavClick("#home"); }}>
          <img src="/AL_GHANI_CAR_REPAIR/assets/logo.png" width={100} height={50} />
          {/* <span className="brand__mark" aria-hidden="true" /> */}
          <span className="brand__text">Al-Ghani</span>
        </a>

        <nav className="nav nav--desktop" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="nav__link"
              href={item.href}
              onClick={(e) => { e.preventDefault(); onNavClick(item.href); }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--primary header__cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); onNavClick("#contact"); }}
        >
          Contact Us
        </a>

        <button
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobileMenu" role="dialog" aria-label="Menu">
          <div className="container mobileMenu__inner">
            {nav.map((item) => (
              <a
                key={item.href}
                className="mobileMenu__link"
                href={item.href}
                onClick={(e) => { e.preventDefault(); onNavClick(item.href); }}
              >
                {item.label}
              </a>
            ))}
            <a
              className="btn btn--primary mobileMenu__cta"
              href="#contact"
              onClick={(e) => { e.preventDefault(); onNavClick("#contact"); }}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
