import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Style.css';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/Login');
  };

  return (
    <div className="profile-container">
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setDropdownOpen(!dropdownOpen)}>
          {user ? user.email : "Profile"} ▼
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            {!user ? (
              <>
                <a href="/Login">Login</a>
                <a href="/Register">Register</a>
              </>
            ) : (
              <button onClick={handleLogout}>Logout</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
