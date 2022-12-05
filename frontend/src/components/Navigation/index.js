import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation(){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className='navbar'>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
          <a href='#'>About</a>
          <a href='#'>Business</a>
          <a href='#'>Blog</a>
          {sessionLinks}
        </li>
      </ul>
    </div>
  );
}

export default Navigation;