const services = [
  {
    emoji: "🖥️",
    title: "Web Design",
    desc: "The most modern and high-quality design made at a professional level.",
  },
  {
    emoji: "⚙️",
    title: "Web Development",
    desc: "High-quality development of sites at the professional level.",
  },
];

const About = () => {
  return (
    <div className="text-white">
      {/* Title */}
      <h2 className="fw-bold mb-1">About Me</h2>
      <div
        className="mb-3"
        style={{
          width: 40,
          height: 3,
          backgroundColor: "#2563eb",
          borderRadius: 2,
        }}
      />

      <p className="text-secondary lh-lg">
        I'm a Front-End Developer and Computer Science graduate based in Cairo,
        Egypt, passionate about building modern and responsive web applications
        using React.js and web technologies. I enjoy turning ideas into
        interactive and user-friendly experiences
      </p>
      <p className="text-secondary lh-lg">
        My goal is to create websites that are functional, attractive, and easy
        to use. I focus on writing clean code,improving user experience, and
        continuously learning new technologies to build better digital products.
      </p>

      {/* What I'm Doing */}
      <h4 className="fw-semibold mt-4 mb-3">What I'm Doing</h4>

      <div className="row g-3">
        {services.map(({ emoji, title, desc }) => (
          <div className="col-md-6" key={title}>
            <div
              className="d-flex align-items-start gap-3 p-3 rounded-3 h-100"
              style={{
                backgroundColor: "#252a40",
                border: "1px solid #2a3050",
              }}
            >
              {/* Icon box */}
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0 fs-4 rounded-3"
                style={{
                  width: 52,
                  height: 52,
                  backgroundColor: "rgba(37,99,235,0.15)",
                }}
              >
                {emoji}
              </div>

              <div>
                <h6 className="text-white fw-semibold mb-1">{title}</h6>
                <p
                  className="text-secondary mb-0"
                  style={{ fontSize: 13, lineHeight: 1.6 }}
                >
                  {desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
    </div>
  );
};

export default About;
