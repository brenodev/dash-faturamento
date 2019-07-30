import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a href="/" className="navbar-brand">
      Dashboard
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
    >
      <span className="navbar-toggler-icon" />
    </button>
  </nav>
);

export default NavBar;
