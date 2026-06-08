import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Catalyst?",
      answer:
        "Catalyst is a modern SaaS landing page template built using React, HTML, CSS, and JavaScript.",
    },
    {
      question: "Is Catalyst fully responsive?",
      answer:
        "Yes, the entire layout is optimized for desktop, tablet, and mobile devices.",
    },
    {
      question: "Can I customize the design?",
      answer:
        "Absolutely. You can edit colors, spacing, typography, and sections easily.",
    },
    {
      question: "Does this template use any backend?",
      answer:
        "No. This is a frontend-only project focused on UI and interactions.",
    },
    {
      question: "Can I use this for commercial projects?",
      answer:
        "Yes, you can use it for personal, client, or startup projects.",
    },
    {
      question: "Which technologies are used?",
      answer:
        "The project uses React with Vite along with global CSS styling.",
    },
    {
      question: "Is the pricing section dynamic?",
      answer:
        "Yes, the pricing toggle switches between monthly and yearly plans dynamically.",
    },
    {
      question: "Can I add animations later?",
      answer:
        "Yes, you can integrate Framer Motion or GSAP anytime for advanced animations.",
    },
    {
      question: "Does it support dark mode?",
      answer:
        "Currently it uses a light premium SaaS style, but dark mode can be added easily.",
    },
    {
      question: "Is this beginner friendly?",
      answer:
        "Yes. The structure is simple and perfect for learning React frontend development.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2>Frequently Asked Questions</h2>
          <p style={{ color: "#64748b", marginTop: "10px" }}>
            Everything you need to know about Catalyst.
          </p>
        </div>

        <div className="faq-container">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? "-" : "+"}</span>
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}