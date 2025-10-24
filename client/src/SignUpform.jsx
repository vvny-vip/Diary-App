import React, { useState } from "react";  
import "./Style.css";
import { useNavigate } from "react-router-dom";

function SignUpform({ setCheck }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ Username: "", Email: "", password: "" });
  const [face, setFace] = useState(true);
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (show) setShow(false);
  }

  // Handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    // Check for empty fields
    if (form.Username.trim() === "" || form.Email.trim() === "" || form.password.trim() === "") {
      setShow(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:2000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Username: form.Username,
          Email: form.Email,
          password: form.password
        }),
      });

      if (response.ok) {
        setFace(false);
        setCheck(true);
        setForm({ Username: "", Email: "", password: "" });
        setSuccess(true);
        
      } else {
        const errorText = await response.text();
        alert("Error: " + errorText);
      }
    } catch (err) {
      console.error("Error connecting to server:", err);
      alert("Server error. Try again later.");
    }
  }

  return (
    <div style={{ background: face ? "rgba(76,32,32,0.2)" : "white" }}>
      <div className="forms" style={{ background: face ? "rgba(0,0,0,0.5)" : "white" }}>
      {success && (
  <div className="modal">
    <div className="modal-content">
      <p>Registration Successful!</p>
      <button
        onClick={() => {
          setSuccess(false); // close dialog
          navigate("/AddEntry"); // now navigate
        }}
      >
        OK
      </button>
    </div>
  </div>
)}

        <form className="form" onSubmit={handleSubmit} style={{ display: face ? "flex" : "none" }} >
          <h2><center>Sign Up</center></h2>

          <label className="label">Username:</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Username"
            name="Username"
            value={form.Username}
            onChange={handleChange}
          />

          <label className="label1">Email:</label>
          <input
            type="email"
            className="input1"
            placeholder="Enter Email"
            name="Email"
            value={form.Email}
            onChange={handleChange}
          />

          <label className="label2">Password:</label>
          <input
            type="password"
            className="input2"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit" className="button">Submit</button>
        </form>

        {show && (
          <p style={{ color: "red", fontSize: "18px", position: "absolute" }}>
            Please enter all fields!!!
          </p>
        )}
      </div>
    </div>
  );
}

export default SignUpform;
