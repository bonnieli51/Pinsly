import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation(){
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser);
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div id='navbar-right'>
        <input id='search-bar' type="text" placeholder="Search"/>
        <button 
          className="Right-Login-Navbar-buttons">
          <span class="tooltiptext">Notifications</span>
          <i class="fa-solid fa-bell"/>
          </button>
        <button className="Right-Login-Navbar-buttons">
          <span class="tooltiptext">Messages</span>
          <i class="fa-solid fa-message"></i>
        </button>
        <button 
          className="Right-Login-Navbar-buttons" 
          id="profile-button"> 
          <span class="tooltiptext">Your Profile</span>
          {sessionUser.username[0].toUpperCase()}
        </button>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <ul id='navbar-right'>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Business</a></li>
        <li><a href='#'>Blog</a></li>
        <li><LoginFormModal /></li>
        <li><SignupFormModal /></li>
      </ul>
    );
  }

  return (
    <>
      <div id='navbar'>
        <NavLink className="Home" exact to="/">Home</NavLink>
        {sessionLinks}
      </div>
    </>
  );
}

export default Navigation;