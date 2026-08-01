import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <p>
          I am a Python Full Stack Developer with experience in Django, Django
          REST Framework, FastAPI, React.js, PostgreSQL, and scalable web
          application development.
        </p>

        <p>
          I have worked on scalable backend systems, WebSocket communication,
          FCM push notifications, payment integration, REST APIs, and modern
          full-stack application architecture.
        </p>

        <p>
          I also have knowledge in Machine Learning, API development, backend
          optimization, and building responsive user-focused applications.
        </p>

        <p>
          Beyond web development, I have hands-on experience in Web Scraping —
          extracting large volumes of data from various companies and websites
          for analysis and business use. I have also built automation solutions
          using Selenium, Playwright, and Python, including WhatsApp automation
          that sends messages to users automatically every day at a scheduled
          time (with an anti-detection algorithm to avoid being flagged by
          machines) and Instagram automation that automatically sends
          connection requests and messages to clients.
        </p>
      </div>
    </section>
  );
}

export default About;
