import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");
        alert("Successfully logging out!");

        setTimeout(() => {
            navigate("/Login");
        }, 1000);
    }, [navigate]);

    return (
        <div className="logout-wrapper">
        <div className="logout-message">
            <h1>Logged out...<br/>
                Thanks for visiting.......
            </h1>
        </div>
        </div>
    );
};

export default Logout;
