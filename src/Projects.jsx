const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cranio AI — Intelligent Web App",
      description:
        "AI-powered web application with 10+ responsive UI components. Integrated with 5+ REST APIs for real-time interactions, built with React.js in a collaborative team environment.",
      tags: ["React.js", "REST APIs", "CSS", "AI"],
      link: "https://frontend-cranio-ai.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
      featured: true,
    },
    {
      id: 2,
      title: "CRUD Management System",
      description:
        "Full CRUD system managing 100+ records with a clean, intuitive UI. Built with vanilla HTML, CSS, and JavaScript — no frameworks — demonstrating core JS proficiency.",
      tags: ["HTML5", "CSS3", "JavaScript", "CRUD"],
      link: "https://curds-opal.vercel.app",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
      featured: false,
    },
    {
      id: 3,
      title: "E-Commerce Storefront UI",
      description:
        "Modern e-commerce frontend with product listing, filtering, cart functionality, and responsive design built using React.js and Tailwind CSS.",
      tags: ["React.js", "Tailwind CSS", "UI/UX"],
      link: "https://health-care-iota-tawny.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
      featured: false,
    },
    {
      id: 4,
      title: "Real-Time Weather Dashboard",
      description:
        "Real-time weather dashboard consuming OpenWeather API. Displays forecast, humidity, wind speed with clean data visualisation and location search.",
      tags: ["JavaScript", "REST API", "CSS", "Charts"],
      link: "https://br-architects-two.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&q=80",
      featured: false,
    },
    {
      id: 6,
      title: "Developer Portfolio Website",
      description:
        "This portfolio — built with React.js and Bootstrap. Features responsive layout, smooth tab navigation, and a dark-themed UI with a modern design system.",
      tags: ["React.js", "Bootstrap", "Responsive"],
      link: "https://html-css-template-one-seven.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
      featured: false,
    },
  ];

  const cardStyle = {
    backgroundColor: "#151929",
    border: "1px solid #2a3050",
    borderRadius: "12px",
    overflow: "hidden",
    transition:
      "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.borderColor = "#2563eb";
    e.currentTarget.style.boxShadow = "0 8px 32px rgba(37, 99, 235, 0.15)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "#2a3050";
    e.currentTarget.style.boxShadow = "none";
  };

  const tagStyle = {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "600",
    backgroundColor: "#1a2340",
    color: "#60a5fa",
    border: "1px solid #2563eb44",
    marginRight: "5px",
    marginBottom: "5px",
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h5 style={{ color: "#f1f5f9", fontWeight: "700", margin: "0 0 6px" }}>
          My Projects
        </h5>
        <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
          A collection of things I've built — click any card to visit the live
          demo.
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Image */}
              <div
                style={{
                  position: "relative",
                  height: "160px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#1a2340";
                  }}
                />
                {project.featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: "700",
                      padding: "3px 10px",
                      borderRadius: "20px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    FEATURED
                  </span>
                )}
                {/* Overlay arrow */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                  }}
                >
                  ↗
                </div>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "16px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h6
                  style={{
                    color: "#f1f5f9",
                    fontWeight: "700",
                    margin: "0 0 8px",
                    fontSize: "15px",
                  }}
                >
                  {project.title}
                </h6>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    lineHeight: "1.65",
                    margin: "0 0 12px",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>
                {/* Tags */}
                <div>
                  {project.tags.map((tag) => (
                    <span key={tag} style={tagStyle}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
