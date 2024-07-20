import React from 'react';
import user from '../../assets/user.png';
import Logo from '../logo/logo';
import './header.css';

function Header() {
  return(
    <header className='header'>
      <Logo height='56px' width='114px'/>
      <img src={user} className='user' alt='user'/>
    </header>
  );
}
export default Header;