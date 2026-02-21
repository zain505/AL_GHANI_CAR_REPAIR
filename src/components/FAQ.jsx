import React, { useState } from "react";

const faqs = [
  { q: "What services do you offer?", a: "We provide maintenance, diagnostics, and repairs including engine, brakes, tires, AC, and more." },
  { q: "How do I schedule an appointment?", a: "Use the contact form below or call us. Choose a time that works, and we’ll confirm quickly." },
  { q: "How do I maintain my car’s battery?", a: "Keep terminals clean, avoid short trips, and test your battery before extreme seasons." },
  { q: "What does the check engine light mean?", a: "It indicates the onboard system detected an issue. We can scan and diagnose it fast." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {faqs.map((item, idx) => {
        const open = idx === openIndex;
        return (
          <div className={"faq__item" + (open ? " is-open" : "")} key={item.q}>
            <button
              className="faq__q"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              aria-expanded={open}
            >
              <span>{item.q}</span>
              <span className="faq__icon" aria-hidden="true">{open ? "–" : "+"}</span>
            </button>
            <div className="faq__a" role="region">
              <p className="muted">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
