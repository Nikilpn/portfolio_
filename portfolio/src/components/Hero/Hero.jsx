import { useEffect, useState } from "react";

import { FaVolumeUp, FaPause } from "react-icons/fa";

import "./Hero.css";

function Hero() {
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

    </section>

  );
}

export default Hero;
