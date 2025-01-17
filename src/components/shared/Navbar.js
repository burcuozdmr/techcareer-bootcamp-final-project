import React from "react";
import logo from "../../assets/logo.png";
import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top  ${
        scrolled ? ` ${classes["bg-mainLightColor"]}` : ""
      }`}
    >
      <div className="container-fluid container mt-3 mb-3 d-flex justify-content-between ">
        <NavLink to="/" className="navbar-brand ">
          <div>
            <img src={logo} alt="" className={classes.logoImg}></img>
          </div>
        </NavLink>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline ">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page"
              end>
                <button type="button" className="btn btn-sm-sm rounded-pill fs-lg-6 fw-bold">
                  HOME
                </button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events/Music"
                activeClassName="active"
                className="nav-link "
                aria-current="page"
                end
              >
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  MUSIC
                </button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events/Art"
                activeClassName="active"
                className="nav-link  "
                aria-current="page"
                end
              >
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  ART
                </button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events/Sport"
                activeClassName="active"
                className="nav-link  "
                aria-current="page"
                end
              >
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  SPORT
                </button>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#contact">
                <button type="button" className="btn rounded-pill fs-6 fw-bold">
                  CONTACT
                </button>
              </a>
            </li>
          </ul>
          <div>
            <Link to="/logIn">
              <button
                type="button"
                className={`btn btn-lg-lg rounded-pill fw-bold px-lg-4 ${classes["bg-secondaryColor"]}`}
              >
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
