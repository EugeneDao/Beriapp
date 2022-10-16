import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import {useState} from 'react'
import firebase,{auth,db} from './config';
const fbProvider = firebase.auth.FacebookAuthProvider();
const handleFbLogin = () => {auth.signInWithPopup(fbProvider)};
function HeroSection(props) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(true);
    props.down(modal);
  };

  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>BERI</h1>
      <p>Personal Financial Apps</p>
      
        
      <div className='hero-btns'>
      <div  className='btnStart'
          
          onClick={toggleModal}
         
        >
          GET STARTED
        </div>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleFbLogin}
        >
          Login with Facebook <i className='far fa-play-circle' />
        </Button>
      </div>
     
    </div>
    
  );
}

export default HeroSection;
