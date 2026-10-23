
import React, { useState } from "react";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and MySQL to build complete web applications.",
      duration: "12 Weeks",
      level: "Beginner",
      price: "₹2,999",
      icon: "💻",
    },
    {
      id: 2,
      title: "Python Programming",
      description:
        "Learn Python programming from basics to advanced concepts with practical projects.",
      duration: "10 Weeks",
      level: "Beginner",
      price: "₹2,499",
      icon: "🐍",
    },
    {
      id: 3,
      title: "Java Programming",
      description:
        "Master Java fundamentals, OOP, collections, exception handling and application development.",
      duration: "10 Weeks",
      level: "Beginner",
      price: "₹2,499",
      icon: "☕",
    },
    {
      id: 4,
      title: "React.js Development",
      description:
        "Build modern and responsive user interfaces using React.js and modern JavaScript.",
      duration: "8 Weeks",
      level: "Intermediate",
      price: "₹2,799",
      icon: "⚛️",
    },
    {
      id: 5,
      title: "Database & MySQL",
      description:
        "Learn databases, SQL queries, relationships, joins and database management.",
      duration: "6 Weeks",
      level: "Beginner",
      price: "₹1,999",
      icon: "🗄️",
    },
    {
      id: 6,
      title: "Data Science",
      description:
        "Learn Python, data analysis, visualization and the fundamentals of data science.",
      duration: "14 Weeks",
      level: "Intermediate",
      price: "₹3,499",
      icon: "📊",
    },
  ];

  const paymentMethods = [
    {
      id: "upi",
      title: "UPI",
      subtitle: "Google Pay, PhonePe, Paytm",
      icon: "📱",
    },
    {
      id: "card",
      title: "Debit / Credit Card",
      subtitle: "Visa, Mastercard, RuPay",
      icon: "💳",
    },
    {
      id: "netbanking",
      title: "Net Banking",
      subtitle: "SBI and other supported banks",
      icon: "🏦",
    },
  ];

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setPaymentMethod("upi");
  };

  const closePayment = () => {
    setSelectedCourse(null);
  };

  // Demo only: connect Razorpay before accepting payments.
  const handlePayment = () => {
    alert(
      "This is a demo checkout. Connect Razorpay to process payments securely."
    );
  };

  return (
    <section
      id="courses"
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              color: "#1e293b",
              marginBottom: "12px",
            }}
          >
            Our Courses
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Choose from our carefully designed courses and develop
            practical skills for your future.
          </p>
        </div>

        {/* Course Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              style={{
                background: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "transform 0.2s",
              }}
            >
              {/* Course Icon */}
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #4f46e5, #7c3aed)",
                  fontSize: "65px",
                }}
              >
                {course.icon}
              </div>

              {/* Course Content */}
              <div style={{ padding: "25px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 10px",
                    background: "#eef2ff",
                    color: "#4f46e5",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {course.level}
                </span>

                <h2
                  style={{
                    fontSize: "22px",
                    color: "#1e293b",
                    marginBottom: "12px",
                  }}
                >
                  {course.title}
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    lineHeight: "1.6",
                    minHeight: "78px",
                  }}
                >
                  {course.description}
                </p>

                {/* Course Details */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "20px 0",
                    paddingTop: "15px",
                    borderTop: "1px solid #e2e8f0",
                    color: "#64748b",
                    fontSize: "14px",
                  }}
                >
                  <span>⏱️ {course.duration}</span>
                  <span>👥 Students</span>
                </div>

                {/* Price and Enroll */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "24px",
                      color: "#4f46e5",
                    }}
                  >
                    {course.price}
                  </strong>

                  <button
                    onClick={() => handleEnroll(course)}
                    style={{
                      padding: "11px 18px",
                      border: "none",
                      borderRadius: "8px",
                      background: "#4f46e5",
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Popup */}
      {selectedCourse && (
        <div
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closePayment();
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 23, 42, 0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-title"
            style={{
              background: "#ffffff",
              borderRadius: "18px",
              padding: "28px",
              width: "100%",
              maxWidth: "460px",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              boxSizing: "border-box",
            }}
          >
            {/* Popup Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "12px",
              }}
            >
              <div>
                <h2
                  id="payment-title"
                  style={{
                    color: "#1e293b",
                    margin: "0 0 8px",
                    fontSize: "24px",
                  }}
                >
                  Complete Your Enrollment
                </h2>

                <p
                  style={{
                    color: "#64748b",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Secure checkout for your selected course.
                </p>
              </div>

              <button
                onClick={closePayment}
                aria-label="Close payment popup"
                style={{
                  border: "none",
                  background: "#f1f5f9",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                ✕
              </button>
            </div>

            {/* Selected Course */}
            <div
              style={{
                background: "#eef2ff",
                padding: "18px",
                borderRadius: "12px",
                margin: "24px 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "14px",
                }}
              >
                <span style={{ fontSize: "34px" }}>
                  {selectedCourse.icon}
                </span>

                <div>
                  <strong
                    style={{
                      display: "block",
                      color: "#1e293b",
                      lineHeight: 1.4,
                    }}
                  >
                    {selectedCourse.title}
                  </strong>

                  <span
                    style={{
                      color: "#64748b",
                      fontSize: "13px",
                    }}
                  >
                    {selectedCourse.duration}
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderTop: "1px solid #c7d2fe",
                  paddingTop: "14px",
                }}
              >
                <span style={{ color: "#475569" }}>
                  Total Amount
                </span>

                <strong
                  style={{
                    color: "#4f46e5",
                    fontSize: "25px",
                  }}
                >
                  {selectedCourse.price}
                </strong>
              </div>
            </div>

            {/* Payment Methods */}
            <h3
              style={{
                color: "#1e293b",
                fontSize: "18px",
                marginBottom: "14px",
              }}
            >
              Choose Payment Method
            </h3>

            <div style={{ display: "grid", gap: "10px" }}>
              {paymentMethods.map((method) => {
                const isSelected = paymentMethod === method.id;

                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    aria-pressed={isSelected}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      width: "100%",
                      textAlign: "left",
                      padding: "15px",
                      borderRadius: "10px",
                      border: isSelected
                        ? "2px solid #4f46e5"
                        : "1px solid #e2e8f0",
                      background: isSelected ? "#eef2ff" : "#ffffff",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                  >
                    <span style={{ fontSize: "27px" }}>
                      {method.icon}
                    </span>

                    <span style={{ flex: 1 }}>
                      <strong
                        style={{
                          display: "block",
                          color: "#1e293b",
                          marginBottom: "4px",
                        }}
                      >
                        {method.title}
                      </strong>

                      <small style={{ color: "#64748b" }}>
                        {method.subtitle}
                      </small>
                    </span>

                    <span
                      style={{
                        color: "#4f46e5",
                        fontSize: "20px",
                      }}
                    >
                      {isSelected ? "●" : "○"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Payment Button */}
            <button
              type="button"
              onClick={handlePayment}
              style={{
                width: "100%",
                padding: "15px",
                marginTop: "22px",
                background: "#4f46e5",
                color: "#ffffff",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Continue to Pay {selectedCourse.price}
            </button>

            <p
              style={{
                fontSize: "12px",
                color: "#64748b",
                textAlign: "center",
                lineHeight: 1.6,
                marginTop: "16px",
                marginBottom: 0,
              }}
            >
              Demo checkout. Real payments require a secure
              payment gateway. Never share your UPI PIN or
              banking password with this website.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Courses;
