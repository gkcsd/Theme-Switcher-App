import React from "react";
import "../Header.css";

const Header = () => {
    return (
        <header style={{ width: "80%",
        margin: "0 auto",
        marginTop: "100px",
        padding: "2rem",
    }}>
            <div className="gym">
            <h1>This Is Our Strength</h1>
            <h1>Muscle Gym</h1>
            <p>The New Gym Is Comming Soon In Your Area</p>
            <button>Call Us +1 23 233 4444</button>
            </div>
        </header>
    );
};
export default Header;