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
      <>
        <div id='navbar-left'>     
          <NavLink id="logo" exact to="/">
            <i class="fa-brands fa-pinterest"></i>
          </NavLink>   
          <NavLink className="NavLinkText" exact to="/">Home</NavLink>
          <a href='#' className="NavLinkText" >Today</a> 
          <a href='#' className="NavLinkText" >Create</a>  
        </div>
        <div id='navbar-right'>
            <i id="search-icon" class="fa-solid fa-magnifying-glass"/> 
            <input id='search-bar' type="text" placeholder="Search"/>
           
          <button 
            className="Right-Login-Navbar-buttons">
            <span class="tooltiptext">Notifications</span>
            <i class="fa-solid fa-bell"/>
            </button>
          <button className="Right-Login-Navbar-buttons">
            <span class="tooltiptext">Messages</span>
            <i class="fa-solid fa-comment-dots"></i>
          </button>
          <button 
            className="Right-Login-Navbar-buttons" 
            id="profile-button"> 
            <span class="tooltiptext">Your Profile</span>
            {sessionUser.username[0].toUpperCase()}
          </button>
          <ProfileButton user={sessionUser} />
        </div>
      </>
    );
  } else {
    sessionLinks = (<>   
      <NavLink className="Home" exact to="/">Logo</NavLink>  
      <ul id='navbar-right'>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Business</a></li>
        <li><a href='#'>Blog</a></li>
        <li><LoginFormModal /></li>
        <li><SignupFormModal /></li>
      </ul>

      </>

    );
  }

  return (
    <>
      <div id='navbar'>
        {sessionLinks}
      </div>
    </>
  );
}

export default Navigation;