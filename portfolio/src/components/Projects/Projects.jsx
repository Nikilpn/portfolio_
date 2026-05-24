import "./Projects.css";

function Projects() {

  const projects = [

    {
      title: "Management System REST API",

      description:
        "Developed comprehensive management system using Django REST Framework with FCM push notifications, automated cron jobs, and scalable backend architecture."
    },

    {
      title: "E-Commerce REST API Backend",

      description:
        "Created scalable e-commerce backend using Django REST Framework with secure payment integration, order processing, product catalog management, authentication, and shopping cart system."
    },

    {
      title: "Room Booking Application",

      description:
        "Built full-stack room booking platform using Django and Python with booking confirmations, authentication, payment gateway integration, room catalog system, and responsive frontend UI."
    },

    {
      title: "Dress E-Commerce Platform",

      description:
        "Developed complete e-commerce platform for fashion retail business with inventory management, admin dashboard, secure payments, order tracking, and user account management."
    },

    {
      title: "Resume Builder",

      description:
        "Developed full-stack Resume Builder application using React.js and JSON Server with CRUD operations, responsive UI, PDF resume download, Material UI, Bootstrap, and deployment using Vercel and Render."
    },

    {
      title: "Dairy Management System",

      description:
        "Developed backend REST API for dairy management operations and workflow management using Django REST Framework."
    },

    {
      title: "Blog Platform API",

      description:
        "Built RESTful backend API for blog and content management platform using Django REST Framework."
    },

    {
      title: "FCM Integration Project",

      description:
        "Implemented Firebase Cloud Messaging push notification services for real-time communication and user engagement."
    }

  ];

  return (
    <section id="projects" className="projects">

      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <a
              href="https://github.com/Nikilpn"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;