import "./Projects.css";

import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      title: "WhatsApp Automation",
      category: "Automation",
      companyProject: true,
      description:
        "Built WhatsApp automation using Playwright and Selenium in Python that automatically sends messages to users every day at a scheduled time. Implemented a custom anti-detection algorithm so the automation is not tracked or flagged by machines."
    },
    {
      title: "Instagram Automation",
      category: "Automation",
      companyProject: true,
      description:
        "Developed Instagram automation that automatically sends connection requests to clients and sends messages on their behalf, helping streamline client outreach and engagement."
    },
    {
      title: "Web Scraping Projects",
      category: "Web Scraping",
      companyProject: true,
      description:
        "Scraped large volumes of data from various companies and websites using Python, BeautifulSoup, and Selenium for data collection, analysis, and business use."
    },
    {
      title: "Background Removal Task",
      category: "Company Project",
      companyProject: true,
      description:
        "Company project — automated background removal task. This is a confidential client/internal project, so no repository link is shared."
    },
    {
      title: "Portfolio Websites",
      category: "React",
      description:
        "Personal portfolio built with React, plus additional portfolio websites developed for clients.",
      github: "https://github.com/Nikilpn/portfolio_"
    },
    {
      title: "BCA Project - Hotel Booking Website",
      category: "Academic Project",
      description:
        "Final BCA project — a hotel room booking website built with Django, including backend management, project reports, and full documentation.",
      github: "https://github.com/Nikilpn/BCA_project"
    },
    {
      title: "React Learning Projects",
      category: "React",
      description:
        "React learning repository with 8 sub-apps: Ecommerce App in TypeScript, EduTech website, Todo App, course selling project, Redux counter app, custom hooks demo, and my-react-app basics.",
      github: "https://github.com/Nikilpn/React_learning"
    },
    {
      title: "Resume Builder",
      category: "Full Stack",
      description:
        "Full-stack Resume Builder using React.js, Material UI, and JSON Server with multi-step form, CRUD operations, PDF resume download via jsPDF, and deployment on Vercel and Render.",
      github: "https://github.com/Nikilpn/React_learning/tree/master/Resume_builder"
    },
    {
      title: "FastAPI Task Manager API",
      category: "FastAPI",
      description:
        "Task management API built with FastAPI and SQLAlchemy featuring user authentication and task CRUD operations.",
      github: "https://github.com/Nikilpn/FastapiProjects/tree/master/task_manager_api"
    },
    {
      title: "FastAPI JWT Authentication",
      category: "FastAPI",
      description:
        "Structured FastAPI authentication service with JWT access and refresh tokens, user management, and testing.",
      github: "https://github.com/Nikilpn/FastapiProjects/tree/master/fastapi-jwt"
    },
    {
      title: "FastAPI Media Sharing Application",
      category: "FastAPI",
      description:
        "Media sharing application built with FastAPI allowing image upload and sharing with a frontend interface.",
      github: "https://github.com/Nikilpn/FastapiProjects/tree/master/media-sharing-application"
    },
    {
      title: "FCM Push Notification Service",
      category: "REST API",
      description:
        "Firebase Cloud Messaging push notification service with device token registration, sending notifications to authenticated users, and Swagger documentation.",
      github: "https://github.com/Nikilpn/restframework_Sampleprojects/tree/master/fcmsampleproject"
    },
    {
      title: "E-Commerce REST API",
      category: "REST API",
      description:
        "Scalable e-commerce backend API with product catalog, categories, brands, reviews, tags, and product dimensions built with Django REST Framework.",
      github: "https://github.com/Nikilpn/restframework_Sampleprojects/tree/master/ecommerce_api"
    },
    {
      title: "Dairy Management REST API",
      category: "REST API",
      description:
        "Backend REST API for dairy management operations and workflow management using Django REST Framework with token-based authentication.",
      github: "https://github.com/Nikilpn/restframework_Sampleprojects/tree/master/dairy"
    },
    {
      title: "Razorpay Payment Integration",
      category: "REST API",
      description:
        "Payment gateway integration using Razorpay for processing payments within Django projects.",
      github: "https://github.com/Nikilpn/restframework_Sampleprojects/tree/master/razorpayproject"
    },
    {
      title: "Hotel Room Booking Platform",
      category: "Full Stack",
      description:
        "Complete hotel room booking platform built with Django and Python featuring room catalog, check-in/check-out booking flow, Razorpay payment gateway, PDF invoice generation, OTP-based password reset, chatbot support, and a notifications system.",
      github: "https://github.com/Nikilpn/Hoteliers_Myproject"
    },
    {
      title: "Blog Platform REST API",
      category: "REST API",
      description:
        "RESTful blog API built with Django REST Framework featuring custom user authentication, token auth, blog CRUD with ownership checks, a reporting system that auto-deactivates blogs, and user blacklisting.",
      github: "https://github.com/Nikilpn/blog"
    },
    {
      title: "Income & Expenses REST API",
      category: "REST API",
      description:
        "Personal finance management API with JWT authentication, income and expense tracking with category options, and Swagger/ReDoc API documentation.",
      github: "https://github.com/Nikilpn/income_expenses_api-python-restframework-django-"
    },
    {
      title: "Machine Learning Projects",
      category: "Machine Learning",
      description:
        "Machine learning notebooks covering diabetes and heart disease prediction with KNN, iris classification, salary linear regression, and Naive Bayes, plus Flask web apps serving the models.",
      github: "https://github.com/Nikilpn/machine_learning_projects"
    },
    {
      title: "NLP Twitter Sentiment Analysis",
      category: "Machine Learning",
      description:
        "Twitter sentiment analysis classifying tweets as positive, negative, or neutral using NLTK for text preprocessing (tokenization, stemming, stopwords, TF-IDF) and KNN classification.",
      github: "https://github.com/Nikilpn/NLP"
    },
    {
      title: "Diabetes Prediction",
      category: "Machine Learning",
      description:
        "Diabetes prediction model using KNN classification, with a Flask web app for live predictions.",
      github: "https://github.com/Nikilpn/diabetes_"
    },
    {
      title: "DRF Movie CRUD API",
      category: "REST API",
      description:
        "Movie CRUD API built with Django REST Framework using APIView, plus ViewSet implementations with filtering and authenticated task management.",
      github: "https://github.com/Nikilpn/Apis_Projects"
    },
    {
      title: "DRF Register & Login (JWT)",
      category: "REST API",
      description:
        "Registration and login API built with Django REST Framework and PyJWT-based authentication.",
      github: "https://github.com/Nikilpn/Apis_Projects/tree/master/DRF_register_login"
    },
    {
      title: "Django Employee & Student CRUD",
      category: "Django",
      description:
        "Full CRUD applications for employee and student management built with Django and template-based views.",
      github: "https://github.com/Nikilpn/cruds_python"
    },
    {
      title: "Simple Student CRUD",
      category: "Django",
      description:
        "Simple student management CRUD application with add, display, edit, and update pages built with Django templates.",
      github: "https://github.com/Nikilpn/simple_crud"
    },
    {
      title: "JavaScript Learning",
      category: "JavaScript",
      description:
        "JavaScript learning repository with 40+ programs covering arrays, callbacks, binary search, OOP, fetch, async/await, AJAX, and frontend mini projects.",
      github: "https://github.com/Nikilpn/javascript_learning"
    },
    {
      title: "Python 12 Projects",
      category: "Python",
      description:
        "Collection of 12 classic Python projects including snake game (pygame), tic-tac-toe, AI tic-tac-toe, hangman, higher-lower game, coffee machine, password generator, Caesar cipher, silent auction, and OOP practice.",
      github: "https://github.com/Nikilpn/python_12_projects_sample"
    },
    {
      title: "Snake Game",
      category: "Python",
      description:
        "Classic snake food game built with Pygame featuring music, grid-based movement, and score tracking.",
      github: "https://github.com/Nikilpn/snakegame"
    },
    {
      title: "OpenAI Chatbot",
      category: "Python",
      description:
        "Chatbot application built with Streamlit and the OpenAI API with persistent chat history.",
      github: "https://github.com/Nikilpn/chatbot_openai_"
    },
    {
      title: "E-Commerce Platform - Shopingfest",
      category: "Full Stack",
      description:
        "Full-featured shopping e-commerce platform with product catalog, categories, cart, checkout, billing, payment page, and blog, built with Django and a responsive frontend.",
      github: "https://github.com/Nikilpn/shopping_e_commerce_project"
    },
    {
      title: "Bigmart E-Commerce",
      category: "Full Stack",
      description:
        "E-commerce platform with product listing, single product view, cart, checkout, payment, and contact forms, plus a Django blog and ML notebook included.",
      github: "https://github.com/Nikilpn/Bigmart_e_commerce"
    }
  ];

  return (
    <section id="projects" className="projects">

      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

      </div>

    </section>
  );
}

export default Projects;
