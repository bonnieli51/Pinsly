
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button className="Right-Login-Navbar-buttons"id="dropdown-button" onClick={openMenu}>
        <i class="fa-solid fa-chevron-down"></i>
        <span class="tooltiptext">Account and more options</span>
      </button>
      {showMenu && (
        <ul className="dropdown-menu">
          <li className="dropmenusmallfont">Currently In</li>
          <li id="dropdown-personal-info">
            <div id='dm-personal-info-initial'>{user.username[0]}</div>
            <div id='dm-personal-info-text'>
              <div>{user.username}</div>
              <div>Personal</div>
              <div>{user.email}</div> 
            </div>
          </li>
          <li className="dropmenusmallfont">More options</li>
          <li> <button id="logout-button" onClick={logout}>Log Out</button> </li>
        </ul>
      )}
    </>
  );
}


export default ProfileButton;