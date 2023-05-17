import React from 'react'
import { Link } from 'react-router-dom';
import { Button} from './Button'
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    
    <div className='footer-container'>
     <section className='footer-subscription'>
       
          
            <div className="input-areas">
            </div>
         </section>
          <div className="footer-links">
             <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Hours</Link>
                </div>
             </div>
             <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Contact us</h2>
                    <Link to='/sign-up'> Location</Link>
                    <Link to='/'>Phone Number</Link>
                    <Link to='/'>Social Media</Link>
                    <Link to='/'> Terms of service</Link>
                </div>
             </div>
          </div>
        <section class='social-media'>
            <div class='social-media-wrap'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Eternity <i class='fab fa-typo3'/>
                    </Link>
                </div>
                <small class='website-rights'>Eternity 2022</small>
                <div class='social-container'> {/*shoul print all the social media logos */}
                    <Link
                    class='social-icon-link Youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                        {/* <i class='fab fa-facebook-f' /> 
                        */}
                        <FontAwesomeIcon icon={faYoutube} size="1x" />
                    </Link>
                    
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                      <a href="https://www.facebook.com/teresarotunnomedicinaestetica"
                        className='facebook social'
                       >
                        <FontAwesomeIcon icon={faFacebook} size="1x"/>
                        </a>
                    </Link>
                    <Link
                    class='social-icon-link Instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >  
                        <FontAwesomeIcon icon={faInstagram} size="1x" />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Footer
