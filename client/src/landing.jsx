import { useNavigate } from "react-router-dom";
import "./land.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Capture Your Thoughts. Track Your Mood.</h1>
        <p>
          A secure full-stack diary application built with React, Node.js & MongoDB.
        </p>
        <div className="buttons">
          <button onClick={() => navigate("/auth")}>
            Get Started 🚀
          </button>
          <button className="secondary">
            View Demo
          </button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <h2>Why Use My Diary?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>🔐 Secure Login</h3>
            <p>JWT authentication ensures your data stays private.</p>
          </div>

          <div className="card">
            <h3>😊 Mood Tracking</h3>
            <p>Track emotions daily with interactive mood selection.</p>
          </div>

          <div className="card">
            <h3>⚡ Fast & Responsive</h3>
            <p>Built with React for smooth and responsive experience.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2>How It Works</h2>
        <div className="steps">
          <div>1️⃣ Sign Up</div>
          <div>2️⃣ Add Entries</div>
          <div>3️⃣ Track Your Mood</div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Start Writing Today</h2>
        <button onClick={() => navigate("/auth")}>
          Create Free Account
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 My Diary App | Built with ❤️ by You</p>
      </footer>

    </div>
  );
}

export default LandingPage;