import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
  <span>HealthConnect+</span>
</div>

      <div
  className="hamburger"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
     </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li>
    <a href="#">Home</a>
  </li>

  <li>
    <a href="#services">Services</a>
  </li>

  <li>
    <a href="#doctors">Doctors</a>
  </li>

  <li>
    <a href="#hospitals">Hospitals</a>
  </li>

  <li>
    <a
  href="https://wa.me/918795807257"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-btn"
>
  Contact Us
</a>
  </li>
  <li>
  <a href="/admin" className="admin-btn">
    Admin Login
  </a>
</li>
<li>
  <a href="/track-order">Track Order</a>
</li>
</ul>

    </nav>
  );
}

export default Navbar;