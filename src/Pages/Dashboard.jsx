import React, { useState, useEffect } from "react";
import "../components/Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  //const [foodCollections, setFoodCollections] = useState([]);
  const [Orphanages, setOrphanages] = useState([]);
  //const [donors, setDonors] = useState([]);
  const [donations, setDonations] = useState([]);
  //const [userCount, setUserCount] = useState(0);
  const [donationCount, setDonationCount] = useState(0);
  const [donationList, setDonationList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchDonations = async () => {
      try {
          const response = await fetch('http://localhost:5000/donations');
          if (!response.ok) {
              const errorText = await response.text(); // Read as text if it's not JSON
              throw new Error(`Server Error: ${errorText}`);
          }
          const data = await response.json(); // Parse JSON if response is OK
          setDonations(data);
      } catch (error) {
          console.error('Error fetching donations:', error.message);
      }
  };

  fetchDonations();
}, []);


  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      
      <header className="header">
        <div className="logo">
          Food <b style={{ color: '#06C167' }}>Donate</b>
        </div>

        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>
    {/*  <p className="dashboard-info">This page is only accessible by Admins </p>

      
      <section className="dashboard-section">
        <h3 className="section-title">Donations</h3>
        <table className="data-table">
          <thead>
            <tr className="table-row">
              <th className="table-header">Food Name</th>
              <th className="table-header">Meal Type</th>
              <th className="table-header">Category</th>
              <th className="table-header">Quantity</th>
              <th className="table-header">Email</th>
              <th className="table-header">Phone No</th>
              <th className="table-header">District</th>
              <th className="table-header">Address</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donations, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{donations.foodname}</td>
                <td className="table-cell">{donations.meal_type}</td>
                <td className="table-cell">{donations.category}</td>
                <td className="table-cell">{donations.quantity}</td>
                <td className="table-cell">{donations.email}</td>
                <td className="table-cell">{donations.phoneno}</td>
                <td className="table-cell">{donations.district}</td>
                <td className="table-cell">{donations.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
*/}
      {/* Food Collection Details Section */}
      <section className="dashboard-section">
  <h3 className="section-title">Donations</h3>
  <table className="data-table">
    <thead>
      <tr className="table-row">
        <th className="table-header">ID</th>
        <th className="table-header">Food Name</th>
        <th className="table-header">Meal Type</th>
        <th className="table-header">Category</th>
        <th className="table-header">Quantity</th>
        <th className="table-header">Email</th>
        <th className="table-header">Phone No</th>
        <th className="table-header">District</th>
        <th className="table-header">Address</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table-row">
        <td className="table-cell">1</td>
        <td className="table-cell">Rice</td>
        <td className="table-cell">Lunch</td>
        <td className="table-cell">Staple</td>
        <td className="table-cell">100</td>
        <td className="table-cell">donor@example.com</td>
        <td className="table-cell">1234567890</td>
        <td className="table-cell">District Name</td>
        <td className="table-cell">456 Some Street</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">2</td>
        <td className="table-cell">Biryani</td>
        <td className="table-cell">Non-veg</td>
        <td className="table-cell">Raw-food</td>
        <td className="table-cell">2</td>
        <td className="table-cell">kummethamedha@gmail.com</td>
        <td className="table-cell">06305114165</td>
        <td className="table-cell">Coimbatore</td>
        <td className="table-cell">Thurakapalli, Peddapappur, Anantapur</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">3</td>
        <td className="table-cell">Meals</td>
        <td className="table-cell">Veg</td>
        <td className="table-cell">Cooked-food</td>
        <td className="table-cell">54</td>
        <td className="table-cell">kummethamedha@gmail.com</td>
        <td className="table-cell">06305114165</td>
        <td className="table-cell">Coimbatore</td>
        <td className="table-cell">Thurakapalli, Peddapappur, Anantapur</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">4</td>
        <td className="table-cell">Meals</td>
        <td className="table-cell">Veg</td>
        <td className="table-cell">Cooked-food</td>
        <td className="table-cell">2</td>
        <td className="table-cell">medhavi@gmail.com</td>
        <td className="table-cell">07893210122</td>
        <td className="table-cell">Chennai</td>
        <td className="table-cell">23-5-69/28, 15th Cross, Sri Krishna Nagar</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">5</td>
        <td className="table-cell">Dal</td>
        <td className="table-cell">Veg</td>
        <td className="table-cell">Cooked-food</td>
        <td className="table-cell">3</td>
        <td className="table-cell">2100039073cse.r@gmail.com</td>
        <td className="table-cell">06305114165</td>
        <td className="table-cell">Coimbatore</td>
        <td className="table-cell">Thurakapalli, Peddapappur, Anantapur</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">6</td>
        <td className="table-cell">Rice</td>
        <td className="table-cell">Non-veg</td>
        <td className="table-cell">Cooked-food</td>
        <td className="table-cell">2</td>
        <td className="table-cell">2100039073cse.r@gmail.com</td>
        <td className="table-cell">06305114165</td>
        <td className="table-cell">Chennai</td>
        <td className="table-cell">Thurakapalli, Peddapappur, Anantapur</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">7</td>
        <td className="table-cell">Rice</td>
        <td className="table-cell">Non-veg</td>
        <td className="table-cell">Cooked-food</td>
        <td className="table-cell">2</td>
        <td className="table-cell">2100039073cse.r@gmail.com</td>
        <td className="table-cell">06305114165</td>
        <td className="table-cell">Chennai</td>
        <td className="table-cell">Thurakapalli, Peddapappur, Anantapur</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">8</td>
        <td className="table-cell">Meals</td>
        <td className="table-cell">Veg</td>
        <td className="table-cell">Cooked-food</td>
        <td className="table-cell">54</td>
        <td className="table-cell">kummethamedha@gmail.com</td>
        <td className="table-cell">06305114165</td>
        <td className="table-cell">Coimbatore</td>
        <td className="table-cell">Thurakapalli, Peddapappur, Anantapur</td>
      </tr>
    </tbody>
  </table>
</section>


      {/* Orphanage Details Section */}
      <section className="dashboard-section">
  <h3 className="section-title">Orphanage Details</h3>
  <table className="data-table">
    <thead>
      <tr className="table-row">
        <th className="table-header">ID</th>
        <th className="table-header">Name</th>
        <th className="table-header">Location</th>
        <th className="table-header">Contact</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table-row">
        <td className="table-cell">1</td>
        <td className="table-cell">Medha Orphanage</td>
        <td className="table-cell">Tadipatri,India</td>
        <td className="table-cell">6305114165</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">2</td>
        <td className="table-cell">Kousalya Orphanage</td>
        <td className="table-cell">Kadapa ,India</td>
        <td className="table-cell">9381679616</td>
      </tr>
      <tr className="table-row">
        <td className="table-cell">3</td>
        <td className="table-cell">Nihitha Orphanage</td>
        <td className="table-cell">Produtoor,India</td>
        <td className="table-cell">9603839339</td>
      </tr>
    </tbody>
  </table>
</section>
{/* Feedback Clips Section */}
<section className="dashboard-section">
  <h3 className="section-title">Feedback </h3>

  <div className="feedback-container">
    <div className="feedback-card">
      <h4 className="feedback-title">Medha Orphanage</h4>
      <p className="feedback-info">"The support from this organization has changed lives. Thank you for your generosity!"</p>
      <p className="feedback-detail">We have witnessed remarkable improvements in the children's well-being, education, and daily lives. Your contributions have enabled us to provide better healthcare, educational resources, and a nurturing environment. We are forever grateful.</p>
    </div>

    <div className="feedback-card">
      <h4 className="feedback-title">Kousalya Orphanage</h4>
      <p className="feedback-info">"We are grateful for the donations that help provide better facilities for our children."</p>
      <p className="feedback-detail">Thanks to your generous donations, our orphanage has been able to renovate living spaces, improve sanitation facilities, and offer extracurricular activities that enrich the children's lives. Your kindness has truly made a difference.</p>
    </div>

    <div className="feedback-card">
      <h4 className="feedback-title">Nihitha Orphanage</h4>
      <p className="feedback-info">"Your kindness makes a difference. Thank you for supporting our mission."</p>
      <p className="feedback-detail">With your support, we've expanded our educational programs, ensuring every child receives personalized attention and opportunities to grow academically and emotionally. Together, we are shaping a brighter future.</p>
    </div>
  </div>
</section>



</div>
      
    </div>
  );
};

export default Dashboard;
