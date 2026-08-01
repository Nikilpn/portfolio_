import "./Skills.css";

function Skills() {

  const skills = [
    "Python",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "React.js",
    "JavaScript",
    "Machine Learning",
    "Web Scraping",
    "Selenium",
    "Playwright",
    "Automation",
    "PostgreSQL",
    "MySQL",
    "Git",
    "REST APIs",
    "WebSocket"
  ];

  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;