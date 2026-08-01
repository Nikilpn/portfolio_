import { useMemo } from "react";

import "./About.css";

function About() {

  const network = useMemo(() => {
    const neurons = [];
    const count = 48;
    const radius = 160;

    // Two-lobe brain: distribute neurons on a sphere, split into hemispheres
    for (let i = 0; i < count; i++) {
      const golden = Math.PI * (3 - Math.sqrt(5));
      const t = i / count;
      const y = 1 - t * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      // Brain-like squash + slight lobe separation
      const lobeShift = x > 0 ? 1 : -1;
      const bx = x * radius + lobeShift * 14;
      const by = y * radius * 0.8;
      const bz = z * radius * 0.9;

      neurons.push({
        id: i,
        x: bx,
        y: by,
        z: bz,
        size: 5 + (i % 3) * 2,
        delay: (i % 10) * 0.3
      });
    }

    // Connect nearby neurons
    const connections = [];
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        const a = neurons[i];
        const b = neurons[j];
        const dist = Math.sqrt(
          (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2
        );
        if (dist < 185) {
          connections.push({
            x1: a.x,
            y1: a.y,
            x2: b.x,
            y2: b.y,
            delay: ((i + j) % 8) * 0.45,
            duration: 2.6 + (i % 5) * 0.55
          });
        }
      }
    }

    return { neurons, connections };
  }, []);

  return (
    <section id="about" className="about">

      {/* Full-section neural web background */}
      <div className="about-neural-web" />

      <div className="about-layout">

        <div className="about-text">

          <div className="section-title">
            <h2>About Me</h2>
          </div>

          <div className="about-content">
            <p>
              I am a Python Full Stack Developer with experience in Django,
              Django REST Framework, FastAPI, React.js, PostgreSQL, and
              scalable web application development.
            </p>

            <p>
              I have worked on scalable backend systems, WebSocket
              communication, FCM push notifications, payment integration,
              REST APIs, and modern full-stack application architecture.
            </p>

            <p>
              I also have knowledge in Machine Learning, API development,
              backend optimization, and building responsive user-focused
              applications.
            </p>

            <p>
              Beyond web development, I have hands-on experience in Web
              Scraping — extracting large volumes of data from various
              companies and websites for analysis and business use. I have
              also built automation solutions using Selenium, Playwright,
              and Python, including WhatsApp automation that sends messages
              to users automatically every day at a scheduled time (with an
              anti-detection algorithm to avoid being flagged by machines)
              and Instagram automation that automatically sends connection
              requests and messages to clients.
            </p>
          </div>

        </div>

        {/* Fully visible 3D brain animation */}
        <div className="about-visual">

          <div className="neural-sphere">
            <div className="brain-ring ring-front" />
            <div className="brain-ring ring-back" />

            {/* Connections layer */}
            <svg
              className="neural-svg"
              viewBox="-220 -220 440 440"
            >
              {network.connections.map((c, idx) => (
                <line
                  key={idx}
                  x1={c.x1}
                  y1={c.y1}
                  x2={c.x2}
                  y2={c.y2}
                  className="neural-connection"
                  style={{ "--cdelay": `${(idx % 6) * 0.5}s` }}
                />
              ))}
            </svg>

            {/* Neurons */}
            {network.neurons.map((n) => (
              <span
                key={n.id}
                className="neuron"
                style={{
                  "--nx": `${n.x}px`,
                  "--ny": `${n.y}px`,
                  "--nz": `${n.z}px`,
                  "--nsize": `${n.size}px`,
                  "--ndelay": `${n.delay}s`
                }}
              />
            ))}

            {/* Data pulses */}
            <svg
              className="neural-pulses"
              viewBox="-220 -220 440 440"
            >
              {network.connections.slice(0, 22).map((c, idx) => (
                <circle
                  key={idx}
                  className="data-pulse"
                  r="4"
                  style={{
                    "--px1": c.x1,
                    "--py1": c.y1,
                    "--px2": c.x2,
                    "--py2": c.y2,
                    "--pdelay": `${c.delay}s`,
                    "--pduration": `${c.duration}s`
                  }}
                />
              ))}
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
