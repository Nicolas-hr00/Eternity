import React from 'react'
import '../App.css';
import { Button }from './Button';
import './Menu.css';

function Menu() {  /*video background, letters, and text and first thing that the user sees when they enter the page*/
  return (
    
    <div className='hero-container'>
         <video src='/videos/video-3.mp4' autoPlay loop muted />
         <h1> We take care of you </h1>
         <p>What are you waiting for?</p>
          <div  className='hero-btns'>
             <Button 
             className='btns'
             buttonStyle='btn--primary'
             buttonSize='btn--large'
             onClick={console.log('hey')}
             >
             
             Get Started <i className='far fa-play-circle' />
             </Button>
          </div>
    </div>
  );
}

export default Menu;
