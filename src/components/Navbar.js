import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {GiMetalHand} from 'react-icons/gi';
import { Button } from './Button';
import './Button.css';
import './Navbar.css'

export default function Navbar() {
    
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);

    let handleClick =()=>{
        setClick(!click)
    }
    const CloseMobileMenu=()=>{
        setClick(false)
    }

    
    const ShowButton= ()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', ShowButton)

    return (
        <>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className='navbar-logo' onClick={CloseMobileMenu}>
                    <GiMetalHand className="navbar-icon" />
                    WAJID
                </Link>

                <div className="menu-icon" onClick={handleClick} >
                    {
                        click? <FaTimes className="fa-times" />:<FaBars className="fa-bars"/>
                    }
                </div>

                <ul className={click ? "nav-menu active": "nav-menu"}>
                   
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={CloseMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={CloseMobileMenu}>
                            Services
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={CloseMobileMenu}>
                            Product
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {
                            button? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle="btn--outline" >
                                        Sign up
                                    </Button>

                                </Link>
                            ): (
                                <Link to='/sign-up' className="btn-link" onClick={CloseMobileMenu}>
                                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile" >
                                        Sign up
                                    </Button>

                                </Link>
                            )
                        }
                    </li>

                </ul>
            </div>
        </div>
 
        </>
    )
}
