import '../components/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [user, setUser] = useState(null); // ✅ Use state to store the user
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      setUser(JSON.parse(storedUser)); // ✅ Set user if available
    } else {
      navigate("/home"); // ✅ Redirect if user not found
    }
  }, [navigate]);
  const handleLogout = () => {
    navigate("/login");
  };


  return (
    
    <div className="container">
      
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

      {/* Main Content */}
      <div className="main-content">
        <div className='food-image'>
          <img src="main.jpeg" alt="Children smiling" className="food-image" />
        </div>
        
        <br />
        <Link to="/Donate">
          <button className="donate-btn">Donate Food</button>
        </Link>
        <br/>

        {/* New Content Section */}
        <div className="content">
          <p style={{ fontSize: "23px" }}>
            “Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet.”
          </p>
        </div>
      </div>

      {/* Our Works Section */}
      <div className="photo">
        <br />
        <p className="photo-heading"><u>Our Works</u></p>
        <br />
        <p style={{ fontSize: "28px", textAlign: "center", color: "#06C167", fontWeight: "bold" }}>
          "Look what we can do together."
        </p>        
        <br />
        <p style={{ textAlign: "center" }}>
        Every contribution, big or small, makes a difference. Together, we've helped countless individuals by providing food, essential supplies, and hope.  
        Our mission is to bridge the gap between surplus food and those in need, ensuring that no meal goes to waste.  
        With the collective effort of donors and volunteers, we continue to spread kindness and create a world where everyone has access to nourishment.
    </p>
    <br />
        <div className="wrapper">
          <div className="box"><img src="p1.jpeg" alt="Work 1" /></div>
          <div className="box"><img src="p2.jpeg" alt="Work 2" /></div>
          <div className="box"><img src="p3.jpeg" alt="Work 3" /></div>
          
        </div>
        
      </div>
      <p style={{ textAlign: "center" }}>
        Your support fuels our mission. Let's continue to make a difference, one meal at a time!
    </p>
      <div className="feedback-form" style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: '100vh', 
    backgroundColor:'#f5f5f5',
    color:'black',
    
}}>
  
    <h2 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>We Value Your Feedback</h2>
    <textarea 
        placeholder="Share your feedback here..." 
        style={{ 
            width: '80%', 
            height: '150px', 
            padding: '10px', 
            fontSize: '1rem', 
            borderRadius: '8px', 
            border: '1px solid #ccc', 
            resize: 'none', 
            
        }}
    />
    <button 
        style={{ 
            marginTop: '1rem', 
            padding: '10px 20px', 
            fontSize: '1rem', 
            backgroundColor: '#06C167', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px', 
            cursor: 'pointer' 
        }}
        onClick={() => alert('Thank you for your feedback!')}
    >
        Submit
    </button>
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

export default Home;
