import { useEffect, useRef, useState } from "react";

import { FaVolumeUp, FaPause } from "react-icons/fa";

import "./Hero.css";

const ROLES = [
  "Python Full Stack Developer",
  "Backend Engineer (Django & FastAPI)",
  "Machine Learning Enthusiast",
  "Automation & Web Scraping Expert"
];

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const networkRef = useRef(null);

  /* ---------- Typewriter effect for rotating roles ---------- */
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let delay = deleting ? 35 : 70;

    if (!deleting && typed === currentRole) {
      delay = 1800; // pause when fully typed
    } else if (deleting && typed === "") {
      delay = 350; // pause before typing the next role
    }

    const timer = setTimeout(() => {
      if (!deleting && typed === currentRole) {
        setDeleting(true);
      } else if (deleting && typed === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setTyped(
          deleting
            ? currentRole.slice(0, typed.length - 1)
            : currentRole.slice(0, typed.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typed, deleting, roleIndex]);

  /* ---------- Voice state ---------- */
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

  /* ---------- Neural network canvas ---------- */
  useEffect(() => {
    const canvas = networkRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const hero = canvas.parentElement;
    let width = 0;
    let height = 0;
    let rafId = null;
    let nodes = [];
    let pulses = [];
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    const initNodes = () => {
      const count = Math.min(110, Math.floor((width * height) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1.2,
        indigo: Math.random() < 0.22
      }));
      pulses = [];
    };

    const emitPulse = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      const candidates = nodes
        .map((node, i) => ({ node, i }))
        .filter(({ i, node }) => i !== from && dist(node, nodes[from]) < 170);
      if (!candidates.length) return;
      const { i: to } = candidates[Math.floor(Math.random() * candidates.length)];
      pulses.push({ from, to, t: 0, speed: 0.008 + Math.random() * 0.006 });
    };

    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      /* subtle radial glow at the centre of the scene */
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) * 0.55
      );
      grad.addColorStop(0, "rgba(56, 189, 248, 0.05)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      /* move nodes */
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        /* gentle push away from the cursor */
        const md = dist(n, mouse);
        if (md < 130 && md > 0) {
          n.x += ((n.x - mouse.x) / md) * 0.5;
          n.y += ((n.y - mouse.y) / md) * 0.5;
        }
      });

      /* connections */
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = dist(nodes[i], nodes[j]);
          if (d < 150) {
            const alpha = (1 - d / 150) * 0.5;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      /* cursor connections */
      nodes.forEach((n) => {
        const d = dist(n, mouse);
        if (d < 170) {
          const alpha = (1 - d / 170) * 0.55;
          ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      });

      /* travelling pulses along connections */
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.t += pulse.speed;
        if (pulse.t >= 1) {
          pulses.splice(p, 1);
          continue;
        }
        const a = nodes[pulse.from];
        const b = nodes[pulse.to];
        if (!a || !b) {
          pulses.splice(p, 1);
          continue;
        }
        const x = a.x + (b.x - a.x) * pulse.t;
        const y = a.y + (b.y - a.y) * pulse.t;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 16);
        glow.addColorStop(0, "rgba(255, 255, 255, 0.9)");
        glow.addColorStop(0.4, "rgba(56, 189, 248, 0.55)");
        glow.addColorStop(1, "rgba(56, 189, 248, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 16, 0, Math.PI * 2);
        ctx.fill();
      }

      /* nodes */
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.indigo ? "rgba(129, 140, 248, 0.9)" : "rgba(56, 189, 248, 0.85)";
        ctx.shadowColor = n.indigo ? "#818cf8" : "#38bdf8";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      rafId = requestAnimationFrame(step);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    step();
    const pulseTimer = window.setInterval(emitPulse, 700);

    window.addEventListener("resize", resize);
    hero.addEventListener("mousemove", onMouseMove);
    hero.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(pulseTimer);
      window.removeEventListener("resize", resize);
      hero.removeEventListener("mousemove", onMouseMove);
      hero.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (

    <section id="home" className="hero">

      {/* AI neural network background */}
      <canvas ref={networkRef} className="hero-network" />

      {/* Holographic AI core */}
      <div className="ai-core" aria-hidden="true">
        <div className="core-glow" />

        <div className="core-ring ring-1">
          <span className="ring-node" />
          <span className="ring-node ring-node-2" />
          <span className="ring-node ring-node-3" />
        </div>

        <div className="core-ring ring-2">
          <span className="ring-node ring-node-4" />
          <span className="ring-node ring-node-5" />
        </div>

        <div className="core-ring ring-3">
          <span className="ring-node ring-node-6" />
        </div>

        <div className="core-pulse" />
        <div className="core-pulse core-pulse-2" />

        <div className="core-brain">
          <i className="brain-cell cell-1" />
          <i className="brain-cell cell-2" />
          <i className="brain-cell cell-3" />
          <i className="brain-cell cell-4" />
          <i className="brain-cell cell-5" />
          <i className="brain-cell cell-6" />
          <i className="brain-cell cell-7" />
          <i className="brain-cell cell-8" />
        </div>
      </div>

      <div className="hero-content">

        <h1>
          Hi, I'm <span>Nikhil P N</span>
        </h1>

        <h2>
          <span className="typewriter">{typed}</span>
          <span className="caret" />
        </h2>

        <p>
          I build intelligent systems with Django, Django REST Framework,
          FastAPI, React.js, and PostgreSQL — blending backend engineering,
          machine learning, and automation.
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
