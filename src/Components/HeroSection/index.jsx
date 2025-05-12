import React from 'react';
import './index.css';
import herosectionvideo from '../../assets/herosectionvideo.mp4'; 
import ContainedButton from '../ContainedButton';

const HeroSection = () => {
  return (
    <div className="hero">
      <video className='videoTag' autoPlay loop muted>
        <source src={herosectionvideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-content">
        <h1>Feel good about what powers your life.</h1>
        <p>Real Customers. Real Results.</p>
        <span className='herobutton'>
          <ContainedButton style={{}} text={"Get started"} />
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
