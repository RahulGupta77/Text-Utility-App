import React from "react";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              {props.home} <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="form-check form-switch mx-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label
            className={`form-check-label text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            htmlFor="flexSwitchCheckDefault"
          >
            {props.mode === "light" ? "Enable" : "Disable"} Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
