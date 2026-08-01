import { useEffect, useRef, useState } from "react";

import { FaVolumeUp, FaPause } from "react-icons/fa";

import "./Hero.css";

function Hero() {

  const videoWrapRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleState = (e) => {
      setIsPlaying(e.detail.playing);
    };

    window.addEventListener("voiceover-state", handleState);

    return () => {
      window.removeEventListener("voiceover-state", handleState);
    };
  }, []);

  const toggleAudio = () => {
    window.dispatchEvent(new CustomEvent("toggle-voiceover"));
  };

  const handleMouseMove = (e) => {
    const wrap = videoWrapRef.current;
    if (!wrap) return;

    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((y - centerY) / centerY) * -12;

    wrap.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const wrap = videoWrapRef.current;
    if (!wrap) return;

    wrap.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (

    <section id="home" className="hero">

      {/* Elegant animated background */}
      <div className="hero-aurora-bg">

        <div className="aurora aurora-1" />

        <div className="aurora aurora-2" />

        <div className="aurora aurora-3" />

        <div className="hero-orb glow-orb-1" />

        <div className="hero-orb glow-orb-2" />

        <span className="hero-star star-1" />
        <span className="hero-star star-2" />
        <span className="hero-star star-3" />
        <span className="hero-star star-4" />
        <span className="hero-star star-5" />
        <span className="hero-star star-6" />
        <span className="hero-star star-7" />
        <span className="hero-star star-8" />
        <span className="hero-star star-9" />
        <span className="hero-star star-10" />
        <span className="hero-star star-11" />
        <span className="hero-star star-12" />

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

          <button
            className={`hero-voice-btn ${isPlaying ? "active" : ""}`}
            onClick={toggleAudio}
          >
            {isPlaying ? <FaPause /> : <FaVolumeUp />}
            {isPlaying ? "Pause Voice" : "Listen to Me"}
          </button>

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

          <div className="video-aurora" />

          <div className="video-particles">

            <span className="vp vp-1" />
            <span className="vp vp-2" />
            <span className="vp vp-3" />
            <span className="vp vp-4" />
            <span className="vp vp-5" />
            <span className="vp vp-6" />
            <span className="vp vp-7" />
            <span className="vp vp-8" />

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;
