import "./Hero.css";

function Hero() {

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
            href="/Nikhilpn.pdf"
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

    </section>

  );
}

export default Hero;