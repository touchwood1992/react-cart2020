import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            Buy Laptops
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
                activeClassName="active"
                exact
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/about"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
