import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Contacts from './Pages/Contacts';
import Register from './Pages/Register';
import Donate from './Pages/Donate';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import Dashboard from './Pages/Dashboard';
import Users from "./Pages/Admin/Users";
import Reports from "./Pages/Admin/Reports";
import Settings from "./Pages/Admin/Settings";
import PrivateRoute from "./Pages/Admin/PrivateRoute";
import OurMission from './Pages/OurMission';
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/Login" />;
};
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/register" element={<Register />} />
          <Route path='/Donate' element={<Donate/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Logout' element={<Logout/>}/>
          <Route path='/Dashboard' element={<Dashboard />} />
        <Route path="/admin/users" element={<PrivateRoute><Users /></PrivateRoute>} />
        <Route path="/admin/reports" element={<PrivateRoute><Reports /></PrivateRoute>} />
        <Route path="/admin/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/OurMission" element={<OurMission/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
