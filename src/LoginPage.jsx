
import React, { useState } from "react";

function LoginPage({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5001/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed.");
        return;
      }

      // Save the login token and user information.
      localStorage.setItem("learnstackToken", data.token);
      localStorage.setItem(
        "learnstackUser",
        JSON.stringify(data.user)
      );

      setMessage("Login successful! Welcome, " + data.user.name + ".");
      setPassword("");
    } catch (error) {
      setMessage(
        "Cannot connect to the backend. Check that the server is running on port 5000."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 20px",
        background: "#f8fafc",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "35px",
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#4f46e5" }}>
          Welcome Back
        </h1>

        <p style={{ textAlign: "center", color: "#64748b" }}>
          Login to your LearnStack account
        </p>

        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
          required
          style={inputStyle}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          style={inputStyle}
        />

        {message && (
          <p role="status" style={{ color: "#4f46e5" }}>
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={isLoading}
          style={{
            ...buttonStyle,
            opacity: isLoading ? 0.7 : 1,
          }}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={onBack}
          style={{
            ...buttonStyle,
            background: "#e2e8f0",
            color: "#334155",
            marginTop: "10px",
          }}
        >
          Back to Home
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  padding: "12px",
  margin: "8px 0 20px",
  border: "1px solid #cbd5e1",
  borderRadius: "8px",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "13px",
  border: "none",
  borderRadius: "8px",
  background: "#4f46e5",
  color: "#fff",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "16px",
};

export default LoginPage;
