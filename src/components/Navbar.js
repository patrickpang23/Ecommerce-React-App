import React from "react";
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <img src="assets/images/dropletLogo.png" alt="logo" className="logo" />
      </Link>
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">
                <img src="assets/images/bag.png" alt="bag" width="30" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
