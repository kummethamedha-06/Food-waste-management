import '../components/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Contacts = () => {
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
                  {!user ? (
                    <>
                      <Link to="/Logout" className="dropdown-item">Logout</Link>
                    </>
                  ) : (
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
  <div className='contact-wrapper'>
<div className='Contact-body'>
      <div className="contact-form">
        <div className="form-container">
          <p className="form-heading"><u>Contact Us</u></p>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
            />

            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
            />

            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Write your message here"
            ></textarea>

            <input type="submit" value="Send" className="submit-btn" />
          </form>

          {/* Contact Information */}
          <div className="contact-information">
            <p>Email: <a href="mailto:fooddonation0603@gmail.com">fooddonation0603@gmail.com</a></p>
            <p>Phone: +91 6305114165</p>
            <p>Address: 123 Main St, Anytown</p>
          </div>
        </div>
      </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <p className="about">
            <span>About us</span><br/>
            The basic concept of this project, Food Waste Management, is to collect the excess/leftover food from donors such as hotels, restaurants, marriage halls, etc., and distribute it to the needy people.
          </p>
        </div>

        <div className="footer-center">
          <div>
            <p><span>Contacts</span></p>
          </div>
          <div>
            <p>(+91) 6305114165</p>
          </div>
          <div>
            <p><strong><a href="mailto:Fooddonate@gmail.com">Fooddonate@gmail.com</a></strong></p>
          </div>
        </div>

        <div className="footer-right">
          <h2>Food<span> Donate</span></h2>
          <p className="menu">
            <Link to="/Home">Home</Link> |  
            <Link to="/AboutUs">About Us</Link> |  
            <Link to="/Services">Services</Link> |  
            <Link to="/Contacts">Contacts</Link>
          </p>
          <p className="name">Food Donate © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
