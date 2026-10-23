
import React from "react";

function AboutUsPage() {
  const milestones = [
    {
      year: "The Beginning",
      title: "An Idea for Better Learning",
      icon: "💡",
      description:
        "LearnStack began with the idea of making quality learning resources, practical courses, and expert guidance accessible to students.",
    },
    {
      year: "Building the Platform",
      title: "Learning Made Accessible",
      icon: "💻",
      description:
        "We started building a platform where students could explore programming courses, learn new technologies, and discover learning opportunities.",
    },
    {
      year: "Growing Together",
      title: "A Community of Learners",
      icon: "🤝",
      description:
        "Our vision grew to include faculty guidance, hands-on projects, peer learning, and opportunities for students to develop practical skills.",
    },
    {
      year: "Our Next Chapter",
      title: "Preparing Students for the Future",
      icon: "🚀",
      description:
        "We aim to expand our course offerings, celebrate student projects, and help learners prepare for careers in technology.",
    },
  ];

  const values = [
    {
      icon: "🎓",
      title: "Quality Education",
      description:
        "Make technical concepts easier to understand through structured learning and practical examples.",
    },
    {
      icon: "🛠️",
      title: "Learning by Doing",
      description:
        "Encourage students to build projects, solve problems, and apply what they learn.",
    },
    {
      icon: "🌍",
      title: "Accessible Learning",
      description:
        "Create a welcoming learning environment for students with different backgrounds and goals.",
    },
    {
      icon: "🌱",
      title: "Continuous Growth",
      description:
        "Help students build confidence, explore new skills, and keep learning throughout their careers.",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Student Projects",
      description:
        "A place to showcase projects, prototypes, and creative solutions developed through learning.",
    },
    {
      icon: "💻",
      title: "Technical Skills",
      description:
        "Opportunities to practise programming, web development, databases, and emerging technologies.",
    },
    {
      icon: "🎯",
      title: "Career Readiness",
      description:
        "Support students as they prepare portfolios, practise interviews, and explore internships.",
    },
  ];

  const studentStories = [
    {
      avatar: "👩‍💻",
      name: "Student Success Story",
      course: "Web Development",
      quote:
        "Working on practical exercises and projects can help students understand concepts and build confidence.",
    },
    {
      avatar: "👨‍💻",
      name: "Student Learning Journey",
      course: "Python & Data Science",
      quote:
        "Consistent practice and project-based learning can help turn programming fundamentals into useful skills.",
    },
    {
      avatar: "🧑‍🎓",
      name: "Student Project Journey",
      course: "Java Programming",
      quote:
        "Building small applications is a valuable way to practise problem-solving and strengthen programming knowledge.",
    },
  ];

  const sectionTitle = {
    textAlign: "center",
    color: "#1e293b",
    fontSize: "34px",
    marginBottom: "14px",
  };

  const sectionSubtitle = {
    textAlign: "center",
    maxWidth: "720px",
    margin: "0 auto",
    color: "#64748b",
    fontSize: "16px",
    lineHeight: 1.8,
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "28px",
    borderRadius: "18px",
    boxShadow: "0 8px 28px rgba(15,23,42,0.06)",
    border: "1px solid #eef2f7",
  };

  return (
    <main
      id="about"
      style={{
        background: "#f8fafc",
        color: "#1e293b",
        overflow: "hidden",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #312e81 0%, #4f46e5 55%, #7c3aed 100%)",
          color: "#ffffff",
          padding: "85px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "8px 16px",
              borderRadius: "30px",
              fontSize: "14px",
              marginBottom: "22px",
            }}
          >
            Welcome to LearnStack
          </span>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              lineHeight: 1.2,
              margin: "0 0 22px",
            }}
          >
            Every Great Journey
            <br />
            Begins with Learning.
          </h1>

          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              color: "#e0e7ff",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            LearnStack is a learning platform designed to help students
            explore technology, develop practical skills, build projects,
            and prepare for the opportunities of tomorrow.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "32px",
            }}
          >
            <a
              href="#our-story"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                borderRadius: "10px",
                background: "#ffffff",
                color: "#4f46e5",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Discover Our Story ↓
            </a>

            <a
              href="#our-values"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.6)",
                color: "#ffffff",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              What We Believe
            </a>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        id="our-story"
        style={{ padding: "85px 20px" }}
      >
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Our Story</h2>

          <p style={sectionSubtitle}>
            Every platform starts with an idea. LearnStack's idea is
            simple: make learning more practical, engaging, and useful
            for students who want to grow.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
              marginTop: "42px",
            }}
          >
            <div style={cardStyle}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                🌟
              </div>

              <h3 style={{ fontSize: "23px", marginBottom: "12px" }}>
                Who We Are
              </h3>

              <p style={{ color: "#64748b", lineHeight: 1.9, margin: 0 }}>
                LearnStack is a learning management platform concept
                that brings courses, faculty information, and learning
                opportunities together in one place.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                🎯
              </div>

              <h3 style={{ fontSize: "23px", marginBottom: "12px" }}>
                Our Mission
              </h3>

              <p style={{ color: "#64748b", lineHeight: 1.9, margin: 0 }}>
                To help students develop strong technical foundations
                through structured courses, practical exercises,
                projects, and continuous learning.
              </p>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>
                🚀
              </div>

              <h3 style={{ fontSize: "23px", marginBottom: "12px" }}>
                Our Vision
              </h3>

              <p style={{ color: "#64748b", lineHeight: 1.9, margin: 0 }}>
                To create a learning environment where students can
                discover their potential, showcase their work, and
                prepare for academic and professional success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section
        style={{
          padding: "80px 20px",
          background: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "950px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>The LearnStack Journey</h2>

          <p style={sectionSubtitle}>
            From an idea for better learning to a platform focused on
            practical skills, here's the journey we aim to build.
          </p>

          <div style={{ marginTop: "48px" }}>
            {milestones.map((item, index) => (
              <div
                key={item.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "65px minmax(0, 1fr)",
                  gap: "20px",
                  marginBottom: index === milestones.length - 1 ? 0 : "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "50%",
                      background: "#eef2ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "27px",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>

                  {index !== milestones.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        flex: 1,
                        minHeight: "55px",
                        background: "#c7d2fe",
                        marginTop: "8px",
                      }}
                    />
                  )}
                </div>

                <div
                  style={{
                    ...cardStyle,
                    padding: "23px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      color: "#4f46e5",
                      fontWeight: "700",
                      fontSize: "13px",
                    }}
                  >
                    {item.year}
                  </span>

                  <h3 style={{ fontSize: "21px", margin: "9px 0" }}>
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: "#64748b",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              color: "#94a3b8",
              textAlign: "center",
              fontSize: "12px",
              marginTop: "24px",
            }}
          >
            Illustrative journey. Update with your actual founding date
            and milestones.
          </p>
        </div>
      </section>

      {/* OUR VALUES */}
      <section
        id="our-values"
        style={{ padding: "85px 20px" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>What Guides Us</h2>

          <p style={sectionSubtitle}>
            The principles behind the learning experience we want to
            create for every student.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "22px",
              marginTop: "42px",
            }}
          >
            {values.map((value) => (
              <div
                key={value.title}
                style={{
                  ...cardStyle,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "42px" }}>{value.icon}</div>

                <h3 style={{ fontSize: "20px", margin: "18px 0 12px" }}>
                  {value.title}
                </h3>

                <p style={{ color: "#64748b", lineHeight: 1.8, margin: 0 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT ACHIEVEMENTS */}
      <section
        style={{
          padding: "85px 20px",
          background: "#ffffff",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Student Achievements & Growth</h2>

          <p style={sectionSubtitle}>
            Learning is more than completing a course. It is about
            applying knowledge, creating something useful, and taking
            the next step toward your goals.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              marginTop: "42px",
            }}
          >
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                style={{
                  ...cardStyle,
                  borderTop: "4px solid #6366f1",
                }}
              >
                <div style={{ fontSize: "42px" }}>
                  {achievement.icon}
                </div>

                <h3 style={{ fontSize: "21px", margin: "18px 0 12px" }}>
                  {achievement.title}
                </h3>

                <p style={{ color: "#64748b", lineHeight: 1.8, margin: 0 }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>

          {/* Add real certificates, project images, and awards here. */}
          <div
            style={{
              marginTop: "35px",
              padding: "25px",
              borderRadius: "15px",
              background: "#eef2ff",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#3730a3", marginTop: 0 }}>
              Every Project Tells a Story
            </h3>

            <p
              style={{
                color: "#475569",
                lineHeight: 1.8,
                marginBottom: 0,
              }}
            >
              Showcase student projects, certificates, hackathon
              achievements, competition results, and internship offers
              here as your LearnStack community grows.
            </p>
          </div>
        </div>
      </section>

      {/* STUDENT STORIES */}
      <section style={{ padding: "85px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Learning Journeys</h2>

          <p style={sectionSubtitle}>
            Celebrate the effort behind every new skill, project,
            and learning milestone.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "42px",
            }}
          >
            {studentStories.map((story) => (
              <article
                key={story.name}
                style={cardStyle}
              >
                <div style={{ fontSize: "38px" }}>{story.avatar}</div>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: 1.9,
                    fontStyle: "italic",
                    margin: "20px 0",
                  }}
                >
                  "{story.quote}"
                </p>

                <h3
                  style={{
                    color: "#1e293b",
                    fontSize: "18px",
                    marginBottom: "7px",
                  }}
                >
                  {story.name}
                </h3>

                <span
                  style={{
                    color: "#4f46e5",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {story.course}
                </span>
              </article>
            ))}
          </div>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "22px",
            }}
          >
            Sample learning stories, not testimonials from verified
            LearnStack students.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        style={{
          padding: "75px 20px",
          background:
            "linear-gradient(135deg, #4338ca, #6d28d9)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "750px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(30px, 5vw, 40px)",
              margin: "0 0 18px",
            }}
          >
            Your Learning Journey Starts Here
          </h2>

          <p
            style={{
              color: "#e0e7ff",
              fontSize: "17px",
              lineHeight: 1.9,
              marginBottom: "28px",
            }}
          >
            Explore our courses, discover new technologies, and take
            your next step toward becoming a confident learner.
          </p>

          <a
            href="#courses"
            style={{
              display: "inline-block",
              padding: "15px 28px",
              background: "#ffffff",
              color: "#4338ca",
              borderRadius: "10px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Explore Our Courses →
          </a>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;
