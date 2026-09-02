import "./Skills.css";

import {
  FaPython,
  FaReact,
  FaJs,
  FaRobot,
  FaBug,
  FaGitAlt,
  FaNetworkWired,
  FaCogs,
  FaBrain
} from "react-icons/fa";

import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSelenium,
  SiNumpy,
  SiPandas
} from "react-icons/si";

const skillsData = [
  { name: "Python", icon: FaPython, color: "#4B8BBE" },
  { name: "Django", icon: SiDjango, color: "#44B78B" },
  { name: "Django REST Framework", icon: SiDjango, color: "#A30000" },
  { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Machine Learning", icon: FaBrain, color: "#F472B6" },
  { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Web Scraping", icon: FaBug, color: "#22D3EE" },
  { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
  { name: "Playwright", icon: FaBug, color: "#2EAD33" },
  { name: "Automation", icon: FaRobot, color: "#A78BFA" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "REST APIs", icon: FaNetworkWired, color: "#38BDF8" },
  { name: "WebSocket", icon: FaCogs, color: "#34D399" }
];

function Skills() {

  return (
    <section id="skills" className="skills">

      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skillsData.map((skill, index) => {

          const Icon = skill.icon;

          return (
            <div
              className="skill-card"
              key={index}
              style={{
                "--skill-color": skill.color
              }}
            >
              <div className="skill-icon-wrap">
                <div className="skill-icon">
                  <Icon />
                </div>
              </div>

              <h3>{skill.name}</h3>
            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Skills;
