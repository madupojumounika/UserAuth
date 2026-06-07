import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";
import "../styles/auth.css";
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signupUser(formData);

      localStorage.setItem("user", JSON.stringify(res.data));

      alert(res.data.message || "Account created successfully!");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="logo-text">USER AUTH SYSTEM</div>

        <div className="badge">Secure Authentication</div>

        <h1>Create Account</h1>
        <p>Join our platform today</p>

        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

<div className="input-group">
  <FaLock className="icon" />

  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    required
  />

  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

          <button type="submit" className="btn">
            <FaUserPlus /> Sign Up
          </button>
        </form>

        <p className="bottom-text">
          Already have an account? <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;