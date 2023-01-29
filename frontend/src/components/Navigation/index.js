import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function Navigation() {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div id="navbar-left">
          <NavLink className="logo" id="logo" exact to="/">
            {/* <i class="fa-brands fa-pinterest"></i> */}
            <i class="fa-solid fa-lemon"></i>
          </NavLink>
          <NavLink className="NavLinkText" exact to="/">
            Home
          </NavLink>
          <a
            href="https://github.com/bonnieli51/Pinsly/blob/main/README.md "
            className="NavLinkText"
            target="_blank"
          >
            About
          </a>
          <a href="#" className="NavLinkText">
            Create
          </a>
        </div>
        <div id="navbar-right">
          {/* <i id="search-icon" class="fa-solid fa-magnifying-glass" />
          <input id="search-bar" type="text" placeholder="Search" /> */}
          <a href="https://github.com/bonnieli51/Pinsly" target="_blank">
            <button className="Right-Login-Navbar-buttons">
              <span class="tooltiptext">Bonnie's Github</span>
              <i class="fa-brands fa-github" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/bonnie-li-100464232/"
            target="_blank"
          >
            <button className="Right-Login-Navbar-buttons">
              <span class="tooltiptext">Bonnie's LinkedIn</span>
              <i class="fa-brands fa-linkedin"></i>
            </button>
          </a>
          <NavLink
            to={`/${sessionUser.id}`}
            className="Right-Login-Navbar-buttons"
            id="profile-button"
          >
            <span class="tooltiptext">Your Profile</span>
            {sessionUser.username[0].toUpperCase()}
          </NavLink>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="logo" exact to="/">
          {/* <i class="fa-brands fa-pinterest"></i> */}
          <i class="fa-solid fa-lemon"></i>
          &nbsp;&nbsp;&nbsp;Pinsly
        </NavLink>
        {/* <NavLink id="signuplogo" className="Home" exact to="/">
          Pinsly
        </NavLink> */}
        <ul id="navbar-right">
          <li>
            <a
              href="https://github.com/bonnieli51/Pinsly/blob/main/README.md"
              target="_blank"
            >
              About
            </a>
          </li>
          <li>
            <a href="https://github.com/bonnieli51/Pinsly" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/bonnie-li-100464232/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <LoginFormModal />
          </li>
          <li>
            <SignupFormModal />
          </li>
        </ul>
      </>
    );
  }

  return (
    <>
      <div id="navbar">{sessionLinks}</div>
    </>
  );
}

export default Navigation;
