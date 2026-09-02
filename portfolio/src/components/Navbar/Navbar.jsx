import { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="nav-logo">
        <h2>Nikhil</h2>
      </div>

      <nav className="nav-desktop">
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="nav-mobile-menu">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
