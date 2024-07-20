import React from 'react';
import arrowRight from '../../assets/arrow_right.png';
import Logo from '../logo/logo';
import './footer.css';

function Footer() {
  const { innerWidth: width} = window;
  return(
    <footer className='footer'>
      {width > 414 ? <Logo height='55px' width='92px'/> : <Logo height='40px' width='80px'/>}
      <p className='text'>The service is provided by certified nutrition experts and trainers.</p>
      <p className='text bold'>Chat with us</p>
      <p className='text'>Our certified Nutritionist team is available through your account chat section. We are here for you 24/7.</p>
      <p className='text bold'>Get help</p>
      <p className='text'>Want to learn more about how to regain youth, want to manage your subscription, or you had questions and couldn't find answers? Just click on SUPPORT</p>
      <div className='terms'>
        <p className='text'>TERMS OF SERVICE and POLICIES<img src={arrowRight} className='arrow' alt='arrow'/></p>
        <p className='text'>TERMS OF SUBSCRIPTION SERVICES<img src={arrowRight} className='arrow' alt='arrow'/></p>
      </div>
      <p className='text'>The results differ from person to person. This site is not a part of the Facebook website of Facebook Inc. Additionally this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc</p>
    </footer>
  );
}
export default Footer;