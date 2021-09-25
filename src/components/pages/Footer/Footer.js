import React from "react";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import "./Footer.css";
import {GiMetalHand} from 'react-icons/gi';
import {FaFacebook,
     FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membersip to receive the latest news and trends
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              placeholder="Your email"
              name="email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div className="footer-links">

        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div className="footer-link-items">
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
            </div>
        </div>

        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>Videos</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
            </div>
            <div className="footer-link-items">
                <h2>Social Media</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
            </div>
        </div>
      </div>

        <section className="social-media">
            <div className="social-media-wrapper">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        <GiMetalHand className="navbar-icon" />
                        WAJID
                        </Link>
                </div>
                <small className="website-rights">WAJID &copy; 2021 </small>
                <div className="social-icons">
                    <Link to={'//www.facebook.com/sherali.khan.1650332'} target="_blank" aria-label="Facebook" className="social-icon-link"><FaFacebook  /></Link>
                    <Link to={
                        '//www.instagram.com/wajid_ali_khan04/'
                    } target="_blank" aria-label="Instagram" className="social-icon-link"><FaInstagram /></Link>
                    <Link to={
                        '//twitter.com/WajidAl42111'
                    } target="_blank" aria-label="Twitter" className="social-icon-link"><FaTwitter /></Link>
                    <Link to='/' target="_blank" aria-label="Youtube" className="social-icon-link"><FaYoutube /></Link>  
                    <Link to={
                        '//www.linkedin.com/in/wajid-ali-khan-364bb9220/'
                    } target="_blank" aria-label="Linkedin" className="social-icon-link"><FaLinkedin/></Link>
                </div>

            </div>
        </section>

    </div>
  );
}
