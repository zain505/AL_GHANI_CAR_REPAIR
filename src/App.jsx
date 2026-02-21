import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FAQ from "./components/FAQ.jsx";

const services = [
  { tag: "Maintenance", title: "Engine Repair", desc: "Comprehensive care to keep your vehicle running smoothly.", img: "/AL_GHANI_CAR_REPAIR/assets/services/er.png", },
  { tag: "Repair", title: "Tire Repair", desc: "Fast fixes and replacement recommendations when needed.", img: "/AL_GHANI_CAR_REPAIR/assets/services/tr.png", },
  { tag: "Diagnostics", title: "Clutch Repair", desc: "Accurate diagnosis and reliable clutch service.", img: "/AL_GHANI_CAR_REPAIR/assets/services/clutch.png", },
  { tag: "Maintenance", title: "Battery Repair", desc: "Testing, replacement, and charging system checks.", img: "/AL_GHANI_CAR_REPAIR/assets/services/battery.png", },
  { tag: "Repair", title: "Oil Change", desc: "High-quality oil and filter changes for better performance.", img: "/AL_GHANI_CAR_REPAIR/assets/services/oc.png", },
  { tag: "Diagnostics", title: "System Repair", desc: "Electrical and sensor troubleshooting with modern tools.", img: "/AL_GHANI_CAR_REPAIR/assets/services/sys.png", },
  { tag: "Maintenance", title: "Radiator Service", desc: "Cooling system inspection and leak prevention.", img: "/AL_GHANI_CAR_REPAIR/assets/services/radiator.png", },
  { tag: "Diagnostics", title: "Brake Repair", desc: "Pads, rotors, fluids—safety-first braking service.", img: "/AL_GHANI_CAR_REPAIR/assets/services/break.png", },
];

const steps = [
  { n: "01", t: "Book an Appointment", d: "Select a convenient time and date to get started." },
  { n: "02", t: "Choose Your Service", d: "Tell us what you need—maintenance, diagnostics, or repair." },
  { n: "03", t: "Confirm Your Request", d: "We confirm details and provide an estimated timeline." },
  { n: "04", t: "Drop Off Your Vehicle", d: "Bring your car in, or arrange a quick handoff." },
  { n: "05", t: "Service and Repair", d: "Our technicians handle the work with quality checks." },
  { n: "06", t: "Review and Pick Up", d: "We review what was done and get you back on the road." },
];

export default function App() {
  return (
    <div className="page">
      <Header />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero__bg" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__copy">
              <div className="eyebrow">Discover the Passion and Expertise Behind Al-Ghani</div>
              <h1>Top-Quality Service for Your Vehicle</h1>
              <p className="muted">
                Welcome to Al-Ghani, your trusted partner in car care and services.
              </p>

              <div className="stats">
                <div className="stat">
                  <div className="stat__value">V8</div>
                  <div className="stat__label">Cylinder Configuration</div>
                  <div className="stat__note muted">Cylinder Configuration: V8</div>
                </div>
                <div className="stat">
                  <div className="stat__value">30</div>
                  <div className="stat__label">Fuel Efficiency</div>
                  <div className="stat__note muted">Fuel Efficiency: 30 mpg</div>
                </div>
                <div className="stat">
                  <div className="stat__value">7K</div>
                  <div className="stat__label">Max Revolutions</div>
                  <div className="stat__note muted">Max RPM: 7,000</div>
                </div>
              </div>

              <div className="hero__actions">
                <a className="btn btn--primary" href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}>Contact Us</a>
                <a className="btn btn--ghost" href="#services" onClick={(e) => { e.preventDefault(); document.querySelector("#services").scrollIntoView({ behavior: "smooth" }); }}>View Services</a>
              </div>
            </div>

            <div className="hero__media">
              <img className="hero__img" src="/AL_GHANI_CAR_REPAIR/assets/hero.png" alt="Orange sports car" />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container twoCol">
            <div>
              <div className="eyebrow">Discover the Passion and Expertise Behind Al-Ghani</div>
              <h2>From Our Garage to Your Driveway: Al-Ghani’s Journey to Superior Car Care and Customer Satisfaction</h2>
              <p className="muted">
                At Al-Ghani, our values are the bedrock of our company. We uphold integrity in all our actions,
                believing that honesty and transparency build trust with our customers and partners.
              </p>

              <div className="cards">
                <div className="card">
                  <div className="card__top">
                    <span className="chip">Core Values</span>
                  </div>
                  <p className="muted">
                    Integrity, excellence, and a commitment to doing the right thing—every time.
                  </p>
                </div>
                <div className="card">
                  <div className="card__top">
                    <span className="chip">Get to Know</span>
                  </div>
                  <p className="muted">
                    Our goals are designed to drive continuous improvement and exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="aboutMedia">
              <img className="aboutMedia__img" src="/AL_GHANI_CAR_REPAIR/assets/mechanic.png" alt="Mechanics working on a car" />
              <div className="aboutMedia__badge">
                <div className="badge__big">95%</div>
                <div className="badge__small muted">Quality Assurance</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section section--dark">
          <div className="container">
            <div className="sectionHead">
              <div className="eyebrow">At Al-Ghani, we offer a comprehensive range of automotive services</div>
              <h2>Our Services</h2>
              <p className="muted">
                Routine maintenance to complex repairs—trust Al-Ghani for all your car care needs.
              </p>
            </div>

            <div className="grid servicesGrid">
              {services.map((s) => (
                <article className="service service--image" key={s.title}>
                  <div className="service__imgWrap">
                    <img className="service__img" src={s.img} alt={s.title} loading="lazy" />
                  </div>

                  {/* top-left orange square icon */}
                  <div className="service__icon service__icon--corner" aria-hidden="true">
                    {s.icon ? (
                      s.icon
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 14l-2 2m14-2l-2-2M9 7h6l1 5H8l1-5Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 12v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>

                  {/* top-right label */}
                  <div className="service__pill">{s.tag}</div>

                  {/* bottom overlay content */}
                  <div className="service__content">
                    <h3 className="service__title">{s.title}</h3>
                    <p className="muted">{s.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="section">
          <div className="container twoCol">
            <div>
              <div className="eyebrow">Discover the Al-Ghani Advantage</div>
              <h2>Why Choose Al-Ghani?</h2>
              <p className="muted">
                Our expert team delivers top-quality service using the latest technology and best practices.
                We offer comprehensive automotive care, ensuring your car runs smoothly and efficiently.
              </p>

              <div className="progressList">
                <div className="progress">
                  <div className="progress__top">
                    <span>Expert Technicians</span><span className="muted">90%</span>
                  </div>
                  <div className="progress__bar"><span style={{ width: "90%" }} /></div>
                </div>
                <div className="progress">
                  <div className="progress__top">
                    <span>Quick Turnaround</span><span className="muted">85%</span>
                  </div>
                  <div className="progress__bar"><span style={{ width: "85%" }} /></div>
                </div>
                <div className="progress">
                  <div className="progress__top">
                    <span>Quality Assurance</span><span className="muted">95%</span>
                  </div>
                  <div className="progress__bar"><span style={{ width: "95%" }} /></div>
                </div>
              </div>
            </div>

            <div className="whyMedia">
              <img className="whyMedia__img" src="/AL_GHANI_CAR_REPAIR/assets/redcar.png" alt="Red sports car" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--dark">
          <div className="container twoCol">
            <div>
              <div className="eyebrow">Quick FAQs for Easy Answers</div>
              <h2>All You Need to Know</h2>
              <p className="muted">
                Find answers to common questions about our services, scheduling, and vehicle care.
              </p>
            </div>
            <FAQ />
          </div>
        </section>

        {/* PROCESS */}
        <section className="section">
          <div className="container">
            <div className="sectionHead">
              <div className="eyebrow">Your Vehicle’s Service Adventure</div>
              <h2>Drive Through Our Service Process</h2>
              <p className="muted">A simple, transparent flow from booking to pickup.</p>
            </div>

            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.n}>
                  <div className="step__n">{s.n}</div>
                  <div className="step__t">{s.t}</div>
                  <div className="muted">{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section section--dark">
          <div className="container">
            <div className="sectionHead">
              <div className="eyebrow">Pricing Plans</div>
              <h2>Care Packages</h2>
              <p className="muted">Choose the plan that fits your vehicle’s needs.</p>
            </div>

            <div className="pricing">
              <div className="priceCard priceCard--featured">
                <div className="priceCard__head">
                  <div className="chip chip--light">Premium</div>
                  <h3>Care Package</h3>
                </div>
                <div className="priceCard__price">
                  <span className="muted">Price:</span>
                  <div className="price">Call</div>
                </div>
                <ul className="list">
                  <li>Engine Diagnostic (advanced)</li>
                  <li>Alignment Check</li>
                  <li>Air Filter Replacement</li>
                  <li>AC System Check</li>
                  <li>Interior Vacuum</li>
                </ul>
                <a className="btn btn--primary btn--full" href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}>Purchase a package now</a>
              </div>

              <div className="priceCard">
                <div className="priceCard__head">
                  <div className="chip">Basic</div>
                  <h3>Care Package</h3>
                </div>
                <div className="priceCard__price">
                  <span className="muted">Price:</span>
                  <div className="price">Call</div>
                </div>
                <ul className="list">
                  <li>Oil Change (synthetic)</li>
                  <li>Tire Rotation</li>
                  <li>Brake Inspection</li>
                  <li>Fluid Top‑Off</li>
                </ul>
                <a className="btn btn--ghost btn--full" href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact").scrollIntoView({ behavior: "smooth" }); }}>Purchase a package now</a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container contact">
            <div className="contact__copy">
              <div className="eyebrow">Discover Our Complete Car Care</div>
              <h2>Essential Service Package</h2>
              <p className="muted">
                Call, email, or send a message—our team will respond quickly with next steps.
              </p>

              <div className="contact__rows">
                <div className="contactRow">
                  <span className="contactRow__label">Phone</span>
                  <span className="contactRow__value">03013210696</span>
                </div>
                <div className="contactRow">
                  <span className="contactRow__label">Email</span>
                  <span className="contactRow__value">al-Ghani@gmail.com</span>
                </div>
                <div className="contactRow">
                  <span className="contactRow__label">Chat</span>
                  <a className="contactRow__value link" href="https://api.whatsapp.com/send?phone=+923013210696&text=Hi there,can i get more information" target="_blank" rel="noreferrer">WhatsApp Chat</a>
                </div>
                <div className="contactRow">
                  <span className="contactRow__label">Location</span>
                  <a className="contactRow__value link" href="https://maps.app.goo.gl/ZfbLTmK4nedSnyTB9" target="_blank" rel="noreferrer">Alghani Car Care Center</a>
                </div>
              </div>
            </div>

            {/* <form className="form" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll reach out soon."); }}>
              <div className="form__grid">
                <label className="field">
                  <span>Name</span>
                  <input required placeholder="Your name" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input required type="email" placeholder="you@example.com" />
                </label>
                <label className="field field--full">
                  <span>Message</span>
                  <textarea required rows="5" placeholder="Tell us what your vehicle needs..." />
                </label>
              </div>
              <button className="btn btn--primary btn--full" type="submit">Send Message</button>
              <p className="muted form__note">
                Subscribe to our newsletter for the latest news, exclusive offers, and expert tips on car care.
              </p>
            </form> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
