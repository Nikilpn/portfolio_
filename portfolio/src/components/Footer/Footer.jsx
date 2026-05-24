import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-content">

        <h2>Nikhil P N</h2>

        <p>
          Python Full Stack Developer |
          Django REST API Developer |
          FastAPI Developer |
          React.js Developer
        </p>

        <div className="footer-icons">

          <a
            href="https://github.com/Nikilpn"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:nikhilpnnick1234@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://wa.me/916238504386"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Nikhil P N.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;