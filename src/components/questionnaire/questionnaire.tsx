import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import arrowLeft from '../../assets/arrow_left.svg';
import fullSlider from '../../assets/full-slider.svg';
import slider from '../../assets/slider.svg';
import Checkbox from '../checkbox/checkbox';
import './questionnaire.css';

function Questionnaire() {
  return(
    <div className='body'>
      <div className='main'>
        <div className='logo'>
          <Logo height='56px' width='114px'/>
        </div>
        <div className='questionnaire'>
          <Link to="/">
            <img src={arrowLeft} className='arrow-left' alt='arrow-left'/>
          </Link>
          <div className='sliderWrapper'>
            <img src={fullSlider} className='full-slider' alt='full-slider'/>
            <img src={slider} className='slider' alt='slider'/>
          </div>
          <h1 className='title'>Why do you want to lose weight?</h1>
          <div className='checkbox'>
            <Checkbox label='Improve how I look'/>
            <Checkbox label='Become healthier'/>
            <Checkbox label='Feel better'/>
            <Checkbox label='Boost my energy'/>
            <Checkbox label='Other'/>
          </div>
        </div>
        <div className='button'>
          Next
        </div>
      </div>
    </div>
  );
}
export default Questionnaire;