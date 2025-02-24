import '../components/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState,  } from 'react';

const AboutUs = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const navigate = useNavigate();

// ✅ No page restriction, so user can access Home even without being logged in
const user = (() => {
  const storedUser = localStorage.getItem("user");
  return storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
})();

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          Food <b style={{ color: '#06C167' }}>Donate</b>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className={`nav-bar ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/Home" className="active">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Contacts">Contacts</Link></li>
            <li><Link to="/OurMission">Our Mission</Link></li>

            {/* Profile Dropdown */}
            <li className="dropdown">
              <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {user ? user.email : "Profile"} ▼
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  {user ? (
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  ) : (
                    <Link to="/Logout" className="dropdown-item">Logout</Link>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* About Content */}
      <section className="about-content">
        <p className="title">"Welcome to Food Donate"</p>
        <p className="heading"><u>About Us</u></p>
        <div className="para">
          <p>We are a team of passionate individuals committed to addressing the issue of food waste in India. Our goal is to create a system that connects food donors with charities and NGOs while also reducing the environmental impact of food waste.</p>
        </div>

        {/* Video Section */}
        <div className="video-container">
          
          <iframe 
            id="video"
            src="food.jpg"
            width="640"
            height="342"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <p className="about">
            <span>About us</span><br/>
            The basic concept of this project, Food Waste Management, is to collect the excess/leftover food from donors such as hotels, restaurants, marriage halls, etc., and distribute it to the needy people.
          </p>
        </div>
        <div className="footer-center">
          <p><span>Contacts</span></p>
          <p>(+91) 6305114165</p>
          <p><strong><a href="mailto:Fooddonate@gmail.com">Fooddonate@gmail.com</a></strong></p>
          <div className="sociallist">
            <ul className="social">
              <li><a href="#"><img src="insta.jpeg" alt="Instagram" /></a></li>
              <li><a href="#"><img src="facebook.jpeg" alt="Facebook" /></a></li>
              <li><a href="#"><img src="twitter.jpeg" alt="Twitter" /></a></li>
              <li><a href="https://github.com/kummethamedha-06"><i className="fa fa-github" style={{ fontSize: "30px", color: "black" }}></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h2>Food<span> Donate</span></h2>
          <p className="menu">
            <Link to="/Home">Home</Link> | <Link to="/AboutUs">About Us</Link> | <Link to="/Services">Services</Link> | <Link to="/Contacts">Contacts</Link>
          </p>
          <p className="name">Food Donate © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
