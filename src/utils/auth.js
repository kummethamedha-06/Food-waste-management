export const getUserRole = () => {
    // Get user data from localStorage (or fetch from an API)
    const user = JSON.parse(localStorage.getItem("user"));
    
    return user?.role || "guest"; // Default to "guest" if no user is found
  };
  
  export const isAuthenticated = () => {
    return !!localStorage.getItem("user"); // Check if user is logged in
  };
  