import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--footer">
            {/* <span className="brand__mark" aria-hidden="true" /> */}
             <img src="/AL_GHANI_CAR_REPAIR/assets/logo.png" width={100} height={50} />
            <span className="brand__text">Al-Ghani</span>
          </div>
          <p className="muted">
            Top-quality service for your vehicle. Routine maintenance to complex repairs—done with care.
          </p>
          <div className="footer__meta">
            <span className="pill" style={{backgroundColor:"#b30000"}}>Fri: Closed</span>
            <span className="pill" style={{backgroundColor:"#15b300"}}>Sat-Thu: 07:45AM–08:30PM</span>
          </div>
        </div>

        <div>
          <h4 className="footer__title">Explore</h4>
          <a className="footer__link" href="#about">Discover Al-Ghani</a>
          <a className="footer__link" href="#services">Our Services</a>
          <a className="footer__link" href="#pricing">Pricing Plans</a>
          <a className="footer__link" href="#contact">Get in Touch</a>
        </div>

        <div>
          <h4 className="footer__title">Contact</h4>
          <div className="footer__link">+92301-3210696</div>
          <div className="footer__link">+92333-7172509</div>
          {/* <div className="footer__link">support@example.com</div>
          <div className="footer__link">contact@example.com</div>
          <a className="footer__link" href="https://x.com" target="_blank" rel="noreferrer">Tweet us @CarSupport</a> */}
        </div>

        <div>
          <h4 className="footer__title">Office Address</h4>
          <div className="footer__link">Alghani Car Care Center, Daharki Bypass, Daharki, Pakistan</div>
          <div className="footer__link">Map Coordinates :: 28.05334262713627, 69.6777230631729</div>
          {/* <div className="footer__link">1 Tree Ave, New Jersey, USA</div> */}
        </div>
      </div>

      <div className="container footer__bottom">
        <span className="muted">© Al-Ghani. All rights reserved.</span>
      </div>
    </footer>
  );
}
