import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import {FaLessThan} from 'react-icons/fa';
import {GiMetalHand} from 'react-icons/gi';
import Empty from './../../../assets/images/representative-default.png';
import Input from '../../Input';
import './SignUp.css'

export default function SignUp() {
    return (
        <div className="sign-up-page">
          <div className="sign-up-container">
              <div className="sign-up-container-wrapper">

                  <div className="first-container" >
                        <div className="first-container-wrapper">
                                <Link to='/'>
                                    <button className="home-button">
                                        <FaLessThan /> Home
                                    </button>
                                </Link>

                                <div className="company-details">
                                        <div className="logo-image-container">
                                            <GiMetalHand />
                                        </div>
                                        <div className="text-details">
                                            <p className="wajid-name">WAJID</p>
                                            <p className="details-company">Crypto Management Services</p>
                                        </div>
                                </div>

                                <div className="sponsor-container">
                                    
                                    <div className="sponsor-container-wrapper">
                                        <div className="left-container">
                                            <p className="users">User: Private</p>
                                            <p className="users">Phone: Private</p>
                                            <p className="users">Email: Private</p>
                                            <Input type="number" placeholder="Your Sponsor No" className="nopadding" />
                                        </div>

                                        <div className="right-container">
                                                <div className="right-container-wrapper">
                                                    <img src={Empty} alt="profile image"/>
                                                </div>
                                            </div>
                                    </div>
                                </div>

                        </div>
                  </div>

                  <div className="second-container" >
                    <div className="second-container-wrapper">
                            <div className="second-inputs">
                                <Input type="text" placeholder="Username"  />
                                <Input type="text" placeholder="Full Name"  />
                                <Input type="email" placeholder="Email"  />
                                <Input type="password" placeholder="Password"  />
                            </div>
                            <div className="news-radio">
                               <input type="checkbox" />
                               <p className="emails">Get News Email</p>
                            </div>
                            <div className="terms">
                                <p >If you are signing up this means you are agreeing our <span className="terms-link">
                                    <Link to="/sign-up" >
                                    TERMS AND CONDITIONS.
                                    </Link>
                                    </span> </p>
                            </div>
                            <Button children="SIGNUP" buttonSize="btn--wide" buttonStyle="btn--primary" buttonColor="green" />
                            <p className="login">Have an account? <span className="login-link">
                                <Link to='/sign-up'>
                                Login
                                </Link>
                               
                                </span></p>
                    </div>
                  </div>

              </div>
          </div>
            
        </div>
    )
}
