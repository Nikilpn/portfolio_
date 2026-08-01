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

const themes = {
  "WhatsApp Automation": { c1: "#25D366", c2: "#075E54", symbols: ["💬", "🟢", "⏰"] },
  "Instagram Automation": { c1: "#E1306C", c2: "#833AB4", symbols: ["♥", "📸", "✉"] },
  "Web Scraping Projects": { c1: "#22D3EE", c2: "#0EA5E9", symbols: ["🕸", "📊", "🐛"] },
  "Background Removal Task": { c1: "#2DD4BF", c2: "#0F766E", symbols: ["🖼", "✂️", "✨"] },
  "Portfolio Websites": { c1: "#61DAFB", c2: "#2563EB", symbols: ["⚛️", "🖥", "✦"] },
  "BCA Project - Hotel Booking Website": { c1: "#F59E0B", c2: "#B45309", symbols: ["🎓", "📚", "🏨"] },
  "React Learning Projects": { c1: "#61DAFB", c2: "#8B5CF6", symbols: ["⚛️", "💡", "🧩"] },
  "Resume Builder": { c1: "#A78BFA", c2: "#7C3AED", symbols: ["📄", "✏️", "🖨"] },
  "FastAPI Task Manager API": { c1: "#2DD4BF", c2: "#0891B2", symbols: ["🚀", "⚡", "📋"] },
  "FastAPI JWT Authentication": { c1: "#818CF8", c2: "#4F46E5", symbols: ["🔐", "🗝", "🛡"] },
  "FastAPI Media Sharing Application": { c1: "#C084FC", c2: "#9333EA", symbols: ["🎞", "🖼", "📤"] },
  "FCM Push Notification Service": { c1: "#60A5FA", c2: "#2563EB", symbols: ["🔔", "📣", "💬"] },
  "E-Commerce REST API": { c1: "#FB923C", c2: "#EA580C", symbols: ["🛒", "💳", "📦"] },
  "Dairy Management REST API": { c1: "#4ADE80", c2: "#16A34A", symbols: ["🥛", "🐄", "🧀"] },
  "Razorpay Payment Integration": { c1: "#38BDF8", c2: "#1D4ED8", symbols: ["💳", "💰", "🪙"] },
  "Hotel Room Booking Platform": { c1: "#38BDF8", c2: "#0284C7", symbols: ["🏨", "🛎", "🗝"] },
  "Blog Platform REST API": { c1: "#94A3B8", c2: "#475569", symbols: ["✍️", "📝", "💭"] },
  "Income & Expenses REST API": { c1: "#34D399", c2: "#059669", symbols: ["💰", "📈", "🧾"] },
  "Machine Learning Projects": { c1: "#F472B6", c2: "#DB2777", symbols: ["🧠", "🤖", "📐"] },
  "NLP Twitter Sentiment Analysis": { c1: "#60A5FA", c2: "#1D4ED8", symbols: ["🐦", "💬", "📊"] },
  "Diabetes Prediction": { c1: "#F87171", c2: "#DC2626", symbols: ["❤️", "🩺", "📉"] },
  "DRF Movie CRUD API": { c1: "#FBBF24", c2: "#B45309", symbols: ["🎬", "🍿", "🎞"] },
  "DRF Register & Login (JWT)": { c1: "#C084FC", c2: "#7E22CE", symbols: ["👤", "🔑", "🛡"] },
  "Django Employee & Student CRUD": { c1: "#22D3EE", c2: "#0E7490", symbols: ["👥", "🗂", "✅"] },
  "Simple Student CRUD": { c1: "#60A5FA", c2: "#1E40AF", symbols: ["🎒", "📝", "👨‍🎓"] },
  "JavaScript Learning": { c1: "#F7DF1E", c2: "#D97706", symbols: ["✨", "🧮", "⚡"] },
  "Python 12 Projects": { c1: "#4584B6", c2: "#306998", symbols: ["🐍", "🎯", "🧪"] },
  "Snake Game": { c1: "#4ADE80", c2: "#15803D", symbols: ["🐍", "🎮", "🍎"] },
  "OpenAI Chatbot": { c1: "#5EEAD4", c2: "#0D9488", symbols: ["🤖", "💬", "✨"] },
  "E-Commerce Platform - Shopingfest": { c1: "#F472B6", c2: "#DB2777", symbols: ["🛍", "🛒", "🎀"] },
  "Bigmart E-Commerce": { c1: "#FB923C", c2: "#C2410C", symbols: ["🛒", "📦", "🏷"] }
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
  const theme = themes[project.title] || {
    c1: "#38bdf8",
    c2: "#6366f1",
    symbols: ["⚙️", "✨", "💠"]
  };

  const cardStyle = {
    "--tc1": theme.c1,
    "--tc2": theme.c2
  };

  const cardProps = {
    ref: cardRef,
    className: "project-card tilt-card",
    style: cardStyle,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };

  const cardContent = (
    <>
      <div className="card-bg">
        <div className="card-grid" />

        <div className="card-lightbeam" />

        <div className="card-orb" />

        <span className="card-dot cd-1" />
        <span className="card-dot cd-2" />
        <span className="card-dot cd-3" />
        <span className="card-dot cd-4" />
        <span className="card-dot cd-5" />
        <span className="card-dot cd-6" />

        {theme.symbols.map((symbol, index) => (
          <span
            className={`card-symbol cs-${index + 1}`}
            key={index}
          >
            {symbol}
          </span>
        ))}
      </div>

      <div className="project-icon">
        <Icon />
      </div>

      <div className="project-tag">{project.category}</div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      {project.github ? (
        <span className="project-link-label">
          Click anywhere to open on GitHub
        </span>
      ) : (
        <span className="no-link">
          Company Project - No Public Link
        </span>
      )}

      <div className="card-glare" />
    </>
  );

  return project.github ? (
    <a
      {...cardProps}
      href={project.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.title} on GitHub`}
    >
      {cardContent}
    </a>
  ) : (
    <div {...cardProps}>
      {cardContent}
    </div>
  );
}

export default ProjectCard;
