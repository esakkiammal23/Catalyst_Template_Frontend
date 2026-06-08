import { useState } from "react";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 9,
      yearly: 90,
      popular: false,
    },
    {
      name: "Pro",
      monthly: 19,
      yearly: 190,
      popular: true,
    },
    {
      name: "Enterprise",
      monthly: 49,
      yearly: 490,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="reveal">
      <div className="container">

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2>Simple Pricing</h2>
          <p>Choose a plan that fits your product stage</p>

          <button
            className="btn"
            style={{ marginTop: "20px" }}
            onClick={() => setYearly(!yearly)}
          >
            Switch to {yearly ? "Monthly" : "Yearly"}
          </button>
        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card pricing-card ${plan.popular ? "popular" : ""}`}
            >

              {plan.popular && (
                <span className="badge">Most Popular</span>
              )}

              {yearly && (
                <span className="discount">25% OFF</span>
              )}

              <h3>{plan.name}</h3>

              <h1 className="price">
                ${yearly ? plan.yearly : plan.monthly}
              </h1>

              <p style={{ marginBottom: "20px" }}>
                {yearly ? "billed yearly" : "billed monthly"}
              </p>

              <button className="btn">
                Choose Plan
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}