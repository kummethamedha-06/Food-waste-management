import React from 'react';
import '../components/Style.css';
import { useNavigate } from 'react-router-dom';

const Donate = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("Thanks for donating food!"); // Show alert message
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className="donate-container">
      <div className="donate-form">
        <p className="logo">
          <b className="donate-highlight"><u>Food Donate</u></b>
        </p>

        {/* Use onSubmit instead of action and method */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="foodname">Food Name:</label>
            <input type="text" id="foodname" name="foodname" required />
          </div>

          <div className="form-group">
            <label>Meal Type:</label>
            <div className="radio-group">
              <input type="radio" name="meal" id="veg" value="veg" required />
              <label htmlFor="veg">Veg</label>

              <input type="radio" name="meal" id="Non-veg" value="Non-veg" required />
              <label htmlFor="Non-veg">Non-Veg</label>
            </div>
          </div>

          <div className="form-group">
            <label>Select the Category:</label>
            <div className="image-radio-group">
              {["raw-food", "cooked-food", "packed-food"].map((type) => (
                <div key={type} className="image-radio">
                  <input type="radio" id={type} name="image-choice" value={type} required />
                  <label htmlFor={type}>
                    <img src={`${type}.png`} alt={type} />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity (person):</label>
            <input type="number" id="quantity" name="quantity" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phoneno">Phone No:</label>
            <input type="text" id="phoneno" name="phoneno" required />
          </div>

          <div className="form-group">
            <label htmlFor="district">District:</label>
            <select id="district" name="district" required>
              <option value="chennai">Chennai</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="madurai">Madurai</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />
          </div>

          <div className="btn-container">
            <button type="submit" name="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
