import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/Style.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    const { email, password } = formData;
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
  
        if (email === "admin1@gmail.com" && password === "admin") {
          alert("Admin login successful!");
          navigate("/Dashboard"); // Redirect admin
        } else {
          alert("User login successful!");
          navigate("/home"); // Redirect regular users
        }
      } else {
        setError(data.error || "Invalid credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };
  
  
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>

        <div className="login-image">
          <img src="log.jpeg" alt="Login" />
        </div>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="register-link">
          Don't have an account? <Link to="/Register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
