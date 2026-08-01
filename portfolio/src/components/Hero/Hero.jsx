import { useRef } from "react";

import "./Hero.css";

import {
  FaPython,
  FaReact,
  FaJs,
  FaDatabase,
  FaCode,
  FaRobot
} from "react-icons/fa";

import { SiDjango, SiFastapi, SiPostgresql, SiMysql } from "react-icons/si";

function Hero() {

  const floatingIcons = [
    { Icon: FaPython, className: "fi fi-1" },
    { Icon: SiDjango, className: "fi fi-2" },
    { Icon: FaReact, className: "fi fi-3" },
    { Icon: SiFastapi, className: "fi fi-4" },
    { Icon: FaJs, className: "fi fi-5" },
    { Icon: SiPostgresql, className: "fi fi-6" },
    { Icon: FaDatabase, className: "fi fi-7" }
  ];

  const videoWrapRef = useRef(null);

  const handleMouseMove = (e) => {
    const wrap = videoWrapRef.current;
    if (!wrap) return;

    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((y - centerY) / centerY) * -10;

    wrap.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const wrap = videoWrapRef.current;
    if (!wrap) return;

    wrap.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  };

  return (

    <section id="home" className="hero">

      <div className="hero-bg">

        <div className="starfield" />

        <div className="orb orb-1" />

        <div className="orb orb-2" />

        <div className="orb orb-3" />

        <div className="grid-floor" />

        <div className="shape shape-cube">

          <span className="cube-face cube-front" />

          <span className="cube-face cube-back" />

          <span className="cube-face cube-left" />

          <span className="cube-face cube-right" />

          <span className="cube-face cube-top" />

          <span className="cube-face cube-bottom" />

        </div>

        <div className="shape shape-pyramid">

          <span className="pyramid-face" />

        </div>

        <div className="shape shape-ring" />

        {floatingIcons.map(({ Icon, className }, index) => (
          <div className={className} key={index}>
            <Icon />
          </div>
        ))}

      </div>

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Nikhil P N</span>
        </h1>

        <h2>
          Python Full Stack Developer
        </h2>

        <p>
          Experienced in Django, Django REST Framework,
          FastAPI, React.js, PostgreSQL, WebSocket,
          REST APIs, and scalable backend systems.
        </p>

        <div className="hero-buttons">

          <a
            href="/Nikhil_pn.pdf"
            download
            className="hero-link"
          >

            <button>
              Download Resume
            </button>

          </a>

          <a
            href="#projects"
            className="hero-link"
          >

            <button className="outline-btn">
              View Projects
            </button>

          </a>

        </div>

      </div>

      <div
        className="hero-video-wrap"
        ref={videoWrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        <div className="video-glow" />

        <div className="video-hud">

          <video
            src="/videos/hero-workspace.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div className="video-frame-lines" />

          <div className="video-chip chip-1">
            <FaRobot />
            AI Workspace
          </div>

          <div className="video-chip chip-2">
            <FaCode />
            Full Stack
          </div>

          <div className="video-chip chip-3">
            <SiMysql />
            Data & APIs
          </div>

          <div className="video-scanline" />

        </div>

      </div>

    </section>

  );
}

export default Hero;
