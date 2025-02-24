import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Style.css";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    mobile: "",
    address: "",
    age: "",
    password: "",
    confirmPassword: "",
    role: "user", // Default role is "User"
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        phoneNumber: formData.mobile,
        address: formData.address,
        age: parseInt(formData.age, 10),
        password: formData.password,
        role: formData.role, // Include role in API request
      });

      setMessage(response.data.message);
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        mobile: "",
        address: "",
        age: "",
        password: "",
        confirmPassword: "",
        role: "", // Reset role after submission
      });
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.response?.data?.error || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container laptop-view">
        <div className="image-container">
          <img src="registration.jpg" alt="Register" className="register-image" />
        </div>
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-grid">
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
            </div>

            {/* Role Selection Dropdown */}
            <div className="input-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="dropdown"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="login-link">
            Already have an account? <Link to="/Login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
