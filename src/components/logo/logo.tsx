import React from 'react';
import logo from '../../assets/logo.png';
import './logo.css';

type LogoProps = {
  height: string;
  width: string;
};

const Logo = ({ height, width }: LogoProps) => <img src={logo} style={{height: height, width: width }} className='app-logo' alt='logo'/>;

export default Logo;