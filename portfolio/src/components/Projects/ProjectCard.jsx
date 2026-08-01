import { useRef } from "react";

import {
  FaWhatsapp,
  FaInstagram,
  FaBug,
  FaImage,
  FaReact,
  FaGraduationCap,
  FaFileAlt,
  FaLock,
  FaImages,
  FaBell,
  FaShoppingCart,
  FaTractor,
  FaCreditCard,
  FaHotel,
  FaBlog,
  FaMoneyBillAlt,
  FaBrain,
  FaTwitter,
  FaHeartbeat,
  FaFilm,
  FaSignInAlt,
  FaUsers,
  FaUserGraduate,
  FaJs,
  FaPython,
  FaGamepad,
  FaRobot,
  FaStore,
  FaShoppingBag,
  FaDatabase
} from "react-icons/fa";

import { SiFastapi } from "react-icons/si";

const projectIcons = {
  "WhatsApp Automation": FaWhatsapp,
  "Instagram Automation": FaInstagram,
  "Web Scraping Projects": FaBug,
  "Background Removal Task": FaImage,
  "Portfolio Websites": FaReact,
  "BCA Project - Hotel Booking Website": FaGraduationCap,
  "React Learning Projects": FaReact,
  "Resume Builder": FaFileAlt,
  "FastAPI Task Manager API": SiFastapi,
  "FastAPI JWT Authentication": FaLock,
  "FastAPI Media Sharing Application": FaImages,
  "FCM Push Notification Service": FaBell,
  "E-Commerce REST API": FaShoppingCart,
  "Dairy Management REST API": FaTractor,
  "Razorpay Payment Integration": FaCreditCard,
  "Hotel Room Booking Platform": FaHotel,
  "Blog Platform REST API": FaBlog,
  "Income & Expenses REST API": FaMoneyBillAlt,
  "Machine Learning Projects": FaBrain,
  "NLP Twitter Sentiment Analysis": FaTwitter,
  "Diabetes Prediction": FaHeartbeat,
  "DRF Movie CRUD API": FaFilm,
  "DRF Register & Login (JWT)": FaSignInAlt,
  "Django Employee & Student CRUD": FaUsers,
  "Simple Student CRUD": FaUserGraduate,
  "JavaScript Learning": FaJs,
  "Python 12 Projects": FaPython,
  "Snake Game": FaGamepad,
  "OpenAI Chatbot": FaRobot,
  "E-Commerce Platform - Shopingfest": FaStore,
  "Bigmart E-Commerce": FaShoppingBag
};

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

    card.style.setProperty("--mx", `${((x / rect.width) * 100).toFixed(2)}%`);
    card.style.setProperty("--my", `${((y / rect.height) * 100).toFixed(2)}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  const Icon = projectIcons[project.title] || FaDatabase;

  return (
    <div
      ref={cardRef}
      className="project-card tilt-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-bg">
        <div className="card-grid" />

        <div className="card-lightbeam" />

        <span className="card-dot cd-1" />
        <span className="card-dot cd-2" />
        <span className="card-dot cd-3" />
        <span className="card-dot cd-4" />
        <span className="card-dot cd-5" />
        <span className="card-dot cd-6" />
      </div>

      <div className="project-icon">
        <Icon />
      </div>

      <div className="project-tag">{project.category}</div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      {project.github ? (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          View Project on GitHub
        </a>
      ) : (
        <span className="no-link">
          Company Project - No Public Link
        </span>
      )}

      <div className="card-glare" />
    </div>
  );
}

export default ProjectCard;
