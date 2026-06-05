import { useState } from "react";

import Sidebar from "./Sidebar";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = ["about", "resume", "projects", "contact"];

  return (
    <div style={{ backgroundColor: "#1a1a2e", minHeight: "100vh" }}>
      <div className="container py-5">
        <div className="row g-4">
          <Sidebar />

          <div className="col-lg-9">
            <div
              className="p-4 rounded-4"
              style={{
                backgroundColor: "#1e2235",
                border: "1px solid #2a3050",
              }}
            >
              {/* Nav */}
              <ul
                className="nav nav-pills mb-4 justify-content-end border-bottom pb-3"
                style={{ borderColor: "#2a3050 !important" }}
              >
                {tabs.map((tab) => (
                  <li className="nav-item" key={tab}>
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`nav-link ${activeTab === tab ? "active" : "text-secondary"}`}
                      style={
                        activeTab === tab
                          ? { backgroundColor: "#2563eb", color: "#fff" }
                          : { backgroundColor: "transparent" }
                      }
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Content */}
              {activeTab === "about" && <About />}
              {activeTab === "resume" && <Resume />}
              {activeTab === "projects" && <Projects />}
              {activeTab === "contact" && <Contact />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
