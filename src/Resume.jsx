const Resume = () => {
  const timelineStyle = {
    position: "relative",
    paddingLeft: "20px",
    borderLeft: "2px solid #2563eb",
    marginBottom: "24px",
  };

  const dotStyle = {
    position: "absolute",
    left: "-9px",
    top: "4px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    border: "3px solid #1e2235",
  };

  const sectionTitle = {
    color: "#2563eb",
    fontSize: "12px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const badge = {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "20px",
    fontSize: "11px",
    fontWeight: "600",
    backgroundColor: "#1a2340",
    color: "#60a5fa",
    border: "1px solid #2563eb44",
    marginRight: "6px",
    marginBottom: "6px",
  };

  return (
    <div style={{ color: "#e2e8f0" }}>
      {/* Skills */}
      <div style={{ marginBottom: "36px" }}>
        <div style={sectionTitle}>
          <span>⚡</span> Technical Skills
        </div>

        {[
          {
            label: "Frontend",
            skills: [
              "HTML5",
              "CSS3",
              "JavaScript ES6+",
              "React.js",
              "Tailwind CSS",
              "Bootstrap",
            ],
          },
          {
            label: "APIs & Tools",
            skills: [
              "REST APIs",
              "Git",
              "GitHub",
              "VS Code",
              "Chrome DevTools",
              "npm",
            ],
          },
          {
            label: "Design",
            skills: [
              "Figma (UI/UX Basics)",
              "Responsive Design",
              "Component Architecture",
            ],
          },
        ].map((group) => (
          <div key={group.label} style={{ marginBottom: "14px" }}>
            <p
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                marginBottom: "6px",
                fontWeight: "600",
              }}
            >
              {group.label}
            </p>
            <div>
              {group.skills.map((s) => (
                <span key={s} style={badge}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div style={{ marginBottom: "36px" }}>
        <div style={sectionTitle}>
          <span>💼</span> Experience
        </div>

        <div style={timelineStyle}>
          <div style={dotStyle} />
          <div
            style={{
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "15px",
                margin: 0,
                color: "#f1f5f9",
              }}
            >
              Frontend Developer
            </p>
            <span
              style={{
                fontSize: "11px",
                color: "#60a5fa",
                backgroundColor: "#1a2340",
                padding: "2px 10px",
                borderRadius: "20px",
                border: "1px solid #2563eb44",
              }}
            >
              Mar 2026 – May 2026
            </span>
          </div>
          <p
            style={{
              color: "#60a5fa",
              fontSize: "13px",
              margin: "2px 0 8px",
              fontWeight: "600",
            }}
          >
            Cranio AI · Collaborative Project
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "18px",
              color: "#94a3b8",
              fontSize: "13px",
              lineHeight: "1.8",
            }}
          >
            <li>
              Built 10+ responsive UI components using React.js and CSS within
              an AI-powered web application.
            </li>
            <li>
              Integrated frontend with 5+ backend REST APIs for real-time user
              interactions.
            </li>
            <li>
              Collaborated with a cross-functional team of 4+ members to deliver
              production-ready features.
            </li>
          </ul>
        </div>
      </div>

      {/* Education */}
      <div style={{ marginBottom: "36px" }}>
        <div style={sectionTitle}>
          <span>🎓</span> Education
        </div>

        <div style={timelineStyle}>
          <div style={dotStyle} />
          <div
            style={{
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "15px",
                margin: 0,
                color: "#f1f5f9",
              }}
            >
              B.Sc. Information Technology – Computer Science
            </p>
            <span
              style={{
                fontSize: "11px",
                color: "#60a5fa",
                backgroundColor: "#1a2340",
                padding: "2px 10px",
                borderRadius: "20px",
                border: "1px solid #2563eb44",
              }}
            >
              2022 – 2026
            </span>
          </div>
          <p
            style={{
              color: "#60a5fa",
              fontSize: "13px",
              margin: "2px 0 4px",
              fontWeight: "600",
            }}
          >
            Misr University for Science and Technology (MUST)
          </p>
          <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>
            Cairo, Egypt · Fresh Graduate
          </p>
        </div>
      </div>

      {/* Training */}
      <div>
        <div style={sectionTitle}>
          <span>📜</span> Training & Certifications
        </div>

        <div style={timelineStyle}>
          <div style={dotStyle} />
          <div
            style={{
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "4px",
            }}
          >
            <p
              style={{
                fontWeight: "700",
                fontSize: "15px",
                margin: 0,
                color: "#f1f5f9",
              }}
            >
              Front-End Development Training
            </p>
            <span
              style={{
                fontSize: "11px",
                color: "#60a5fa",
                backgroundColor: "#1a2340",
                padding: "2px 10px",
                borderRadius: "20px",
                border: "1px solid #2563eb44",
              }}
            >
              Apr 2026 – May 2026
            </span>
          </div>
          <p
            style={{
              color: "#60a5fa",
              fontSize: "13px",
              margin: "2px 0 8px",
              fontWeight: "600",
            }}
          >
            ICT Hub
          </p>
          <ul
            style={{
              margin: 0,
              paddingLeft: "18px",
              color: "#94a3b8",
              fontSize: "13px",
              lineHeight: "1.8",
            }}
          >
            <li>
              Completed intensive training covering HTML, CSS, JavaScript ES6+,
              and React.js.
            </li>
            <li>
              Built responsive web applications using real-world project
              structures.
            </li>
            <li>
              Learned UI/UX principles and React component-based architecture.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
