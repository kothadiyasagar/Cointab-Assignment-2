import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
 
      <nav className="navbar">
    <div className="logo"><img className="logoImg" src="https://www.cointab.in/wp-content/uploads/2021/06/cointab_green-1.png" alt="cointab logo"  /></div>
     
        <ul className="nav-links">
    
          <input type="checkbox" id="checkbox_toggle" />

          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>



          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/details">Details</Link>
            </li>

            <li>
            
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
