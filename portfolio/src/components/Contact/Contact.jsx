import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-card">

          <h3>Get In Touch</h3>

          <p>
            I am open to internship opportunities,
            full-stack development roles, backend
            development projects, and freelance work.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <h4>Email</h4>

              <a href="mailto:nikhilpnnikk1234@gmail.com">
                nikhilpnnikk1234@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <h4>Phone</h4>

              <a href="tel:+916238504386">
                +91 6238504386
              </a>
            </div>

            <div className="contact-item">
              <h4>Location</h4>

              <p>Thrissur, Kerala, India</p>
            </div>

            <div className="contact-item">
              <h4>GitHub</h4>

              <a
                href="https://github.com/Nikilpn"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Nikilpn
              </a>
            </div>

            <div className="contact-item">
              <h4>LinkedIn</h4>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/nikhil
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;