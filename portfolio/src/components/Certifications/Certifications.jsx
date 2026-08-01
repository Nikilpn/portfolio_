import { useEffect, useState } from "react";

import { FaTimes, FaExpand } from "react-icons/fa";

import "./Certifications.css";

function Certifications() {

  const certificates = [
    {
      title: "Python Web Development Expert",
      issuer: "Luminar Technolab",
      year: "2024",
      image: "/certificates/luminar-python-web-expert.jpeg"
    },
    {
      title: "Python - Web Development Expert",
      issuer: "NACTET",
      year: "2024",
      image: "/certificates/nactet-python-web-expert.jpeg"
    },
    {
      title: "Python Web Developer",
      issuer: "L&T EduTech",
      year: "2023",
      image: "/certificates/lt-edutech-python-web-developer.jpeg"
    },
    {
      title: "Python Developer Internship",
      issuer: "NthIndex Software Solutions",
      year: "2025",
      image: "/certificates/nthindex-internship.jpeg"
    },
    {
      title: "Data Science with AI Workshop",
      issuer: "Luminar Technolab",
      year: "2025",
      image: "/certificates/data-science-ai-workshop.png"
    },
    {
      title: "JavaScript Fast Entry: Programming for Everyone",
      issuer: "Udemy",
      year: "2025",
      image: "/certificates/udemy-javascript-fast-entry.png"
    },
    {
      title: "The Complete JavaScript Course: From Zero to Expert",
      issuer: "Udemy",
      year: "2026",
      image: "/certificates/udemy-javascript-zero-to-expert.jpeg"
    },
    {
      title: "ReactJS - The Complete ReactJS Course For Beginners",
      issuer: "Udemy",
      year: "2026",
      image: "/certificates/udemy-reactjs-beginners.jpeg"
    },
    {
      title: "React.js Premium Crash Course",
      issuer: "Udemy",
      year: "2026",
      image: "/certificates/udemy-reactjs-premium-crash.jpeg"
    },
    {
      title: "B.Tech Degree Certificate",
      issuer: "APJ Abdul Kalam Technological University",
      year: "2023",
      image: "/certificates/btech-degree.jpeg"
    },
    {
      title: "B.Tech Academic Transcript",
      issuer: "APJ Abdul Kalam Technological University",
      year: "2023",
      image: "/certificates/btech-transcript.jpeg"
    }
  ];

  const [selected, setSelected] = useState(null);

  const openViewer = (cert) => {
    setSelected(cert);
  };

  const closeViewer = () => {
    setSelected(null);
  };

  useEffect(() => {
    if (!selected) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeViewer();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="certifications" className="certifications">

      <div className="section-title">
        <h2>Certifications</h2>
      </div>

      <div className="cert-grid">

        {certificates.map((cert, index) => (

          <div
            className="cert-card"
            key={index}
            onClick={() => openViewer(cert)}
            role="button"
            tabIndex={0}
          >

            <img
              src={cert.image}
              alt={cert.title}
              loading="lazy"
            />

            <div className="cert-info">

              <h3>{cert.title}</h3>

              <p>{cert.issuer}</p>

              <span>{cert.year}</span>

            </div>

            <div className="cert-view-hint">
              <FaExpand />
              Click to view
            </div>

          </div>

        ))}

      </div>

      {selected && (

        <div
          className="cert-modal"
          onClick={closeViewer}
        >

          <div className="cert-modal-stage">

            <button
              className="cert-modal-close"
              onClick={closeViewer}
              aria-label="Close viewer"
            >
              <FaTimes />
            </button>

            <div className="cert-viewer">

              <img
                src={selected.image}
                alt={selected.title}
              />

            </div>

            <div className="cert-modal-info">

              <h3>{selected.title}</h3>

              <p>{selected.issuer} - {selected.year}</p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Certifications;
