import { useEffect, useRef, useState } from "react";

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
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!selected) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  const handleMouseMove = (e) => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    const rect = viewer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 14;
    const rotateX = ((y - centerY) / centerY) * -14;

    viewer.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  };

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
            onClick={() => setSelected(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setSelected(cert);
            }}
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
              Click to view in 3D
            </div>

          </div>

        ))}

      </div>

      {selected && (

        <div
          className="cert-modal"
          onClick={() => setSelected(null)}
        >

          <div
            className="cert-modal-stage"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            <button
              className="cert-modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close viewer"
            >
              <FaTimes />
            </button>

            <div className="cert-viewer" ref={viewerRef}>

              <img
                src={selected.image}
                alt={selected.title}
              />

              <div className="cert-viewer-shine" />

            </div>

            <div className="cert-modal-info">

              <h3>{selected.title}</h3>

              <p>{selected.issuer} - {selected.year}</p>

              <span>Move your mouse to tilt the certificate in 3D</span>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}

export default Certifications;
