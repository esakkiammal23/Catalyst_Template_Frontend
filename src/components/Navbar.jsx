import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <h2 className="logo">
        Catalyst
      </h2>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#features" onClick={() => setMenuOpen(false)}>
          Features
        </a>

        <a href="#pricing" onClick={() => setMenuOpen(false)}>
          Pricing
        </a>

        <a href="#faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </a>

        <button className="btn mobile-btn">
          Get Started
        </button>

      </div>

      {/* DESKTOP BUTTON */}
      <button className="btn desktop-btn">
        Get Started
      </button>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}