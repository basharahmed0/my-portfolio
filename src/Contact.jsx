import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your real form handler (e.g. EmailJS / Formspree)
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#151929",
    border: "1px solid #2a3050",
    borderRadius: "8px",
    padding: "10px 14px",
    color: "#e2e8f0",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

 

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <h5 style={{ color: "#f1f5f9", fontWeight: "700", margin: "0 0 6px" }}>
          Get In Touch
        </h5>
        <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
          Available for freelance work and full-time opportunities. Let's build
          something great together.
        </p>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
      >
        
       

        {/* Form */}
        <div>
          <p
            style={{
              color: "#2563eb",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontWeight: "700",
              marginBottom: "14px",
            }}
          >
            Send a Message
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: "#0f2d1a",
                border: "1px solid #22c55e44",
                borderRadius: "10px",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "28px", margin: "0 0 8px" }}>✅</p>
              <p
                style={{
                  color: "#4ade80",
                  fontWeight: "700",
                  margin: "0 0 4px",
                }}
              >
                Message Sent!
              </p>
              <p style={{ color: "#64748b", fontSize: "13px", margin: 0 }}>
                Thanks for reaching out. I'll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Bashar Ahmed"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
                  onBlur={(e) => (e.target.style.borderColor = "#2a3050")}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
                  onBlur={(e) => (e.target.style.borderColor = "#2a3050")}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#94a3b8",
                    fontSize: "12px",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Bashar, I'd love to work with you on..."
                  required
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
                  onBlur={(e) => (e.target.style.borderColor = "#2a3050")}
                />
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "11px",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.1s",
                  marginTop: "4px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#1d4ed8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2563eb")
                }
                onMouseDown={(e) =>
                  (e.currentTarget.style.transform = "scale(0.98)")
                }
                onMouseUp={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                Send Message 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
