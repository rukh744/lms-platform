
import React, { useState } from "react";

function FacultyPage() {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Sample faculty data for the LearnStack demo.
  // Replace qualifications and experience with verified details.
  const faculty = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      subject: "Web Development",
      experience: "8+ Years Experience",
      avatar: "👨‍💻",
      qualification: "Ph.D. in Computer Science",
      education: [
        "Ph.D. in Computer Science — Sample University",
        "M.Tech in Computer Science — IIT Kharagpur",
        "B.Tech in Computer Science — Sample University",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      bio: "Specializes in full-stack web development, software engineering, and building scalable web applications.",
      research:
        "Full-stack development, cloud applications, software architecture",
    },
    {
      id: 2,
      name: "Ms. Priya Singh",
      subject: "Python & Data Science",
      experience: "7+ Years Experience",
      avatar: "👩‍💻",
      qualification: "M.Tech in Data Science",
      education: [
        "M.Tech in Data Science — Sample University",
        "B.Tech in Computer Science — Sample University",
      ],
      skills: ["Python", "Pandas", "NumPy", "Machine Learning", "SQL"],
      bio: "Focuses on Python programming, data analysis, machine learning, and practical data-driven projects.",
      research:
        "Machine learning, data analytics, predictive modelling",
    },
    {
      id: 3,
      name: "Mr. Amit Kumar",
      subject: "Java Programming",
      experience: "6+ Years Experience",
      avatar: "👨‍🏫",
      qualification: "M.Tech in Software Engineering",
      education: [
        "M.Tech in Software Engineering — Sample University",
        "B.Tech in Information Technology — Sample University",
      ],
      skills: ["Java", "OOP", "Spring Boot", "REST APIs", "SQL"],
      bio: "Teaches programming fundamentals, object-oriented design, backend development, and software development practices.",
      research:
        "Backend engineering, software design, distributed systems",
    },
    {
      id: 4,
      name: "Ms. Neha Gupta",
      subject: "Database & MySQL",
      experience: "5+ Years Experience",
      avatar: "👩‍🏫",
      qualification: "M.Tech in Computer Science",
      education: [
        "M.Tech in Computer Science — Sample University",
        "B.Tech in Computer Science — Sample University",
      ],
      skills: ["MySQL", "SQL", "Database Design", "MongoDB", "DBMS"],
      bio: "Specializes in relational databases, query optimization, database design, and data management.",
      research:
        "Database systems, data management, query optimization",
    },
  ];

  return (
    <section
      id="faculty"
      style={{
        padding: "70px 20px 85px",
        background: "#f8fafc",
        minHeight: "70vh",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Page heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "45px",
          }}
        >
          <h1
            style={{
              fontSize: "38px",
              color: "#1e293b",
              marginBottom: "12px",
            }}
          >
            Meet Our Faculty
          </h1>

          <p
            style={{
              color: "#64748b",
              fontSize: "16px",
              lineHeight: 1.7,
              maxWidth: "650px",
              margin: "0 auto",
            }}
          >
            Learn from experienced educators and explore their
            qualifications, expertise, and research interests.
          </p>
        </div>

        {/* Faculty cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "25px",
          }}
        >
          {faculty.map((person) => (
            <div
              key={person.id}
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                padding: "30px 22px",
                textAlign: "center",
                boxShadow: "0 8px 28px rgba(15, 23, 42, 0.07)",
                border: "1px solid #f1f5f9",
                transition: "transform 0.2s",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "104px",
                  height: "104px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                  margin: "0 auto 22px",
                }}
              >
                {person.avatar}
              </div>

              <h2
                style={{
                  fontSize: "21px",
                  color: "#1e293b",
                  marginBottom: "10px",
                }}
              >
                {person.name}
              </h2>

              <p
                style={{
                  color: "#4f46e5",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                {person.subject}
              </p>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  marginBottom: "12px",
                }}
              >
                {person.experience}
              </p>

              <p
                style={{
                  color: "#475569",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  minHeight: "42px",
                }}
              >
                {person.qualification}
              </p>

              <button
                type="button"
                onClick={() => setSelectedFaculty(person)}
                style={{
                  marginTop: "12px",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: "9px",
                  background: "#4f46e5",
                  color: "#ffffff",
                  fontWeight: "600",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty profile popup */}
      {selectedFaculty && (
        <div
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedFaculty(null);
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.68)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "18px",
            zIndex: 9999,
            overflowY: "auto",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-profile-name"
            style={{
              background: "#ffffff",
              width: "100%",
              maxWidth: "650px",
              maxHeight: "90vh",
              overflowY: "auto",
              borderRadius: "20px",
              padding: "30px",
              boxSizing: "border-box",
              boxShadow: "0 25px 70px rgba(0,0,0,0.25)",
            }}
          >
            {/* Close button */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                onClick={() => setSelectedFaculty(null)}
                aria-label="Close faculty profile"
                style={{
                  border: "none",
                  borderRadius: "8px",
                  background: "#f1f5f9",
                  padding: "9px 13px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ✕
              </button>
            </div>

            {/* Profile header */}
            <div
              style={{
                textAlign: "center",
                paddingBottom: "24px",
                borderBottom: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "44px",
                  margin: "0 auto 16px",
                }}
              >
                {selectedFaculty.avatar}
              </div>

              <h2
                id="faculty-profile-name"
                style={{
                  color: "#1e293b",
                  fontSize: "27px",
                  margin: "0 0 8px",
                }}
              >
                {selectedFaculty.name}
              </h2>

              <p
                style={{
                  color: "#4f46e5",
                  fontWeight: "700",
                  margin: "0 0 8px",
                }}
              >
                {selectedFaculty.subject}
              </p>

              <span
                style={{
                  display: "inline-block",
                  padding: "7px 13px",
                  borderRadius: "20px",
                  background: "#eef2ff",
                  color: "#4338ca",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                {selectedFaculty.experience}
              </span>
            </div>

            {/* About */}
            <div style={{ marginTop: "24px" }}>
              <h3 style={{ color: "#1e293b" }}>About Faculty</h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.8,
                  marginBottom: "22px",
                }}
              >
                {selectedFaculty.bio}
              </p>

              {/* Education */}
              <h3 style={{ color: "#1e293b" }}>
                🎓 Education & Qualifications
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  marginTop: "14px",
                }}
              >
                {selectedFaculty.education.map((degree, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "13px 15px",
                      background: "#f8fafc",
                      borderRadius: "10px",
                      borderLeft: "4px solid #4f46e5",
                      color: "#475569",
                      lineHeight: 1.6,
                    }}
                  >
                    {degree}
                  </div>
                ))}
              </div>

              {/* Skills */}
              <h3
                style={{
                  color: "#1e293b",
                  marginTop: "25px",
                }}
              >
                💡 Areas of Expertise
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "9px",
                  marginTop: "12px",
                }}
              >
                {selectedFaculty.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "#eef2ff",
                      color: "#4338ca",
                      borderRadius: "20px",
                      padding: "8px 12px",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Research */}
              <h3
                style={{
                  color: "#1e293b",
                  marginTop: "25px",
                }}
              >
                🔬 Research Interests
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: 1.8,
                }}
              >
                {selectedFaculty.research}
              </p>
            </div>

            {/* Close profile */}
            <button
              type="button"
              onClick={() => setSelectedFaculty(null)}
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "14px",
                background: "#4f46e5",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "700",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FacultyPage;
