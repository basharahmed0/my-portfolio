const contactItems = [
  {
    label: "EMAIL",
    value: "basharahmed9908@gmail.com",
    icon: (
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "PHONE",
    value: "+20 1101365731",
    icon: (
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "BIRTHDAY",
    value: "September 15, 2004",
    icon: (
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "LOCATION",
    value: "Cairo, Egypt",
    icon: (
      <svg
        width="16"
        height="16"
        fill="none"
        stroke="#2563eb"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bashar-ahmed-2502b5250",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/basharahmed0",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="col-lg-3">
      <div
        className="p-4 text-center rounded-4 h-100"
        style={{ backgroundColor: "#1e2235", border: "1px solid #2a3050" }}
      >
        {/* Avatar */}
        <div
          className="mx-auto mb-3 overflow-hidden"
          style={{
            width: 110,
            height: 110,
            borderRadius: 16,
            border: "3px solid #2563eb",
            backgroundColor: "#252a40",
          }}
        >
          <img
            src="./profile.jpeg"
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h5 className="text-white fw-bold mb-2">Bashar Ahmed</h5>
        <span
          className="badge px-3 py-2 fw-normal"
          style={{
            backgroundColor: "#252a40",
            color: "#8892b0",
            border: "1px solid #2a3050",
          }}
        >
          Web Developer
        </span>

        <hr style={{ borderColor: "#2a3050" }} />

        {/* Contact Items */}
        <div className="d-flex flex-column gap-3 text-start">
          {contactItems.map(({ label, value, icon }) => (
            <div key={label} className="d-flex align-items-center gap-3">
              <div
                className="d-flex align-items-center justify-content-center flex-shrink-0"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  backgroundColor: "#252a40",
                  border: "1px solid #2a3050",
                }}
              >
                {icon}
              </div>
              <div>
                <p
                  className="mb-0"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.8px",
                    color: "#8892b0",
                  }}
                >
                  {label}
                </p>
                <p className="mb-0 text-white" style={{ fontSize: 13 }}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ borderColor: "#2a3050" }} />

        {/* Social Buttons */}
        <div className="d-flex justify-content-center gap-2">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="d-flex align-items-center justify-content-center text-secondary"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                backgroundColor: "#252a40",
                border: "1px solid #2a3050",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#252a40";
                e.currentTarget.style.color = "";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
