import { useRef } from "react";

import "./Hero.css";

function Hero() {

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

          <div className="video-scanline" />

        </div>

      </div>

    </section>

  );
}

export default Hero;
