import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../components/Style.css';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Mock user state (can be replaced with real auth logic later)
  const user = null; // User is not logged in, so this is null

  // React Router navigate hook
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here, add your logout logic (e.g., clearing user data or token)
    console.log("Logging out...");
    // Redirect to homepage after logout
    navigate('/');
  };

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
                      <Link to="/Login" className="dropdown-item">Login</Link>
                      <Link to="/Register" className="dropdown-item">Register</Link>
                    </>
                  ) : (
                    // If the user is logged in, display logout option
                    <>
                      <Link to="/Profile" className="dropdown-item">Profile</Link>
                      <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                    </>
                  )}
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div className='food-image'>
          <img src="main.jpeg" alt="Children smiling" className="food-image" />
        </div>
        
        <br />
        <button className="donate-btn">Donate Food</button>
        <br/>

        {/* New Content Section */}
        {/* You can add new sections here */}
      </div>

      {/* Our Works Section */}
      <div className="photo">
        <br />
        <p className="heading">Our Works</p>
        <br />
        <p style={{ fontSize: "28px", textAlign: "center", color: "#06C167", fontWeight: "bold" }}>
          "Look what we can do together."
        </p>        
        <br /> 
        <div className="wrapper">
          <div className="box"><img src="p1.jpeg" alt="Work 1" /></div>
          <div className="box"><img src="p2.jpeg" alt="Work 2" /></div>
          <div className="box"><img src="p3.jpeg" alt="Work 3" /></div>
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
          <div className="sociallist">
            <ul className="social">
              <li><a href="#"><img src="facebook.jpeg" alt="Facebook" /></a></li>
              <li><a href="#"><img src="twitter.jpeg" alt="Twitter" /></a></li>
              <li><a href="#"><img src="ista.jpeg" alt="Instagram" /></a></li>
              <li><a href="https://github.com/kummethamedha-06"><i className="fa fa-github" style={{ fontSize: "30px", color: "black" }}></i></a></li>
            </ul>
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

export default HomePage;
