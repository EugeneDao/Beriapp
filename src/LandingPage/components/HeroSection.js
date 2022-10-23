import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import { useState } from "react";
import firebase, { auth } from "./config";
import { useNavigate } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
const fbProvider = new firebase.auth.FacebookAuthProvider();




function HeroSection(props) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate(null);

  const toggleModal = () => {
    setModal(true); 
    props.down(modal);
  };

  const handleFbLogin = () => {
    
    auth.signInWithPopup(fbProvider).then(res => {
      console.log(res);
      navigate('/beri')
    }).catch(err => {
      navigate('/')
    });
  };


  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>BERI</h1>
      <p>Personal Financial Apps</p>

      <div className="hero-btns">
        <div className="btnStart" onClick={toggleModal}>
          GET STARTED
        </div>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={handleFbLogin}
        >
          Login with Facebook <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
