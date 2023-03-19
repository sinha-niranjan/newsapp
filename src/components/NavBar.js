import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Business">
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/General">
                  general
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">
                  technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
