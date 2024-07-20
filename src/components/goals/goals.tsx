import React from 'react';
import smileyWoman from '../../assets/medium-shot-smiley-woman-posing.png';
import ellipce from '../../assets/Ellipse.png';
import group from '../../assets/Group.png';
import './goals.css';

function Goals() {
  return(
    <div className='goals'>
      <div className='goals-text'>
        <h1 className='goals-text-header'>Uncover weight loss methods for all menopause stages</h1>
        <p className='goals-text-question'>What is your desired weight loss goal?</p>
        <div className='weight-wrapper'>
          <div className='weight-row'>
            <div className='weight-item'>Lose 0-11 lbs</div>
            <div className='weight-item'>Lose 12-22 lbs</div>
          </div>
          <div className='weight-row'>
            <div className='weight-item'>Lose 23-44 lbs</div>
            <div className='weight-item'>Lose 45-88 lbs</div>
          </div>
          <div className='weight-item last'>Lose 88+ lbs</div>
        </div>
      </div>
      <div className='goals-images'>
        <img src={smileyWoman} className='image-postion smiley-woman' alt='smileyWoman'/>
        <img src={ellipce} className='image-postion ellipce' alt='ellipce'/>
        <img src={group} className='image-postion group' alt='group'/>
      </div>
    </div>
  );
}
export default Goals;