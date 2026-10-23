
import React from "react";

function Navbar({ onLogin }) {
  const navLinkStyle = {
    color: "#334155",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "15px",
  };

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "15px",
      }}
    >
      <a
        href="#home"
        style={{
          ...navLinkStyle,
          color: "#4f46e5",
          fontSize: "25px",
          fontWeight: "800",
        }}
      >
        LearnStack
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <a href="#home" style={navLinkStyle}>Home</a>
        <a href="#courses" style={navLinkStyle}>Courses</a>
        <a href="#about" style={navLinkStyle}>About Us</a>
        <a href="#faculty" style={navLinkStyle}>Faculty</a>
        <a href="#contact" style={navLinkStyle}>Contact</a>

        <button
          onClick={onLogin}
          style={{
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            padding: "12px 22px",
            borderRadius: "7px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
