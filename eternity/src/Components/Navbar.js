import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Component } from 'react';
import { SketchPicker } from 'react-color';

 

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [button,setButton] = useState(true);

     const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    };   

    useEffect (() =>{
        showButton()
    }, []); /*fixes the log in botton when page is shrink and refreshd */
    window.addEventListener('resize', showButton);
  
  return (
    <>
   
        <nav className='navbar'>
            <div className= 'navbar-container'>
            <img src="/images/image-5.jpg" height="50" width="5%"/>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                         ETERNITY
                    </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>   
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick ={closeMobileMenu}> 
                        Home {/*prints all the features in the menu*/} 
                    </Link>  
                 </li>
                 <li className='nav-item'>
                    <Link to='/Treatments' className='nav-links' onClick ={closeMobileMenu}>
                        Treatments
                    </Link>
                 </li>
                 <li className='Products'>
                    <Link to='/products' className='nav-links' onClick ={closeMobileMenu}>
                        Profile
                    </Link>
                 </li>
                 <li className='nav-item'>
                    <Link to='/Staff' className='nav-links' onClick ={closeMobileMenu}>
                        Staff
                    </Link>
                 </li>
                 <li className='nav-item'>
                    <Link to='/RegistrationForm' className='nav-links' onClick ={closeMobileMenu}>
                        Registration 
                    </Link>
                 </li>
                 <li className='Records'>
                    <Link to='/Records' className='nav-links' onClick ={closeMobileMenu}>
                        Records
                    </Link>
                 </li>      
                </ul>
                {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar
