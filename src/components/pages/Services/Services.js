import React from "react";
import { Button } from "../../Button";
import "./Services.css";
import image1 from "./../../../assets/images/total_deposit.png";
import image2 from "./../../../assets/images/total_members.png";
import image3 from "./../../../assets/images/total_payments.png";
import image4 from "./../../../assets/images/world_country.png";
import { Link } from "react-router-dom";

const Box = ({ price, image, heading }) => {
  return (
    <div className="box-container">
      <div className="box-container-wrapper">
        <p className="box-price">{price}</p>
        <div className="image-box">
          <img src={image} alt="image" className="image" />
        </div>
        <p className="box-heading">{heading}</p>
      </div>
    </div>
  );
};

const DepositeBox = ({ heading, price, validity, profit, date, children }) => {
  return (
    <div className="deposite-box">
      <div className="depostie-box-wrapper">
        <div className="content-box">
          <p className="deposite-heading">{heading}</p>
          <p className="deposite-price">{price}</p>
          <p className="deposite-validity">Validity: {validity}</p>
          <p className="deposite-profit">Expected Profit UpTo: {profit}</p>
          <p className="deposite-date">Profit Distribute: {date}</p>
        </div>
        <div>
          <Button
            children={children}
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            buttonColor="blue"
          />
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <div className="services-container">
      <div className="first-hero-section">
        <div className="fist-hero-section-container">
          <div className="container-contents">
            <div className="container-contents-texts">
              <p className="contents-para">OUR SERVICES</p>
              <p className="contents-description">
                We provide an efficient platform for the crypto lovers for
                trading and making investments in cryptocurrency. Join us to
                enjoy professional assistance for your growing.
              </p>
            </div>

            <div className="container-contents-buttons">
              <Button
                buttonStyle="btn--outline"
                buttonColor="blue"
                buttonSize="btn--large"
              >
                Get Started
              </Button>
              <Button
                buttonStyle="btn--outline"
                buttonColor="red"
                buttonSize="btn--large"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="second-section-container">
          <div className="box-same">
            <Box heading="TP Total Deposited" price="$1M+" image={image1} />
            <Box heading="Total Members" price="209K+" image={image2} />
          </div>
          <div className="box-same">
            <Box heading="Total Payments" price="$19M+" image={image3} />
            <Box heading="World Country" price="17K+" image={image4} />
          </div>
        </div>
      </div>

      <div className="third-container">
        <div className="third-container-wrapper">
          <div className="text-container">
            <p className="text-container-p">THE BEST CRYPTO MANAGEMENT PLAN</p>
          </div>
          <div className="main-box-container">
            <div className="main-box-wrapper">
              <DepositeBox
                children="Deposite"
                heading="Trade Base"
                date="7 Days"
                price="50 USDT"
                validity="450"
                profit="84%"
              />
              <DepositeBox
                children="Deposite"
                heading="Master Node"
                date="14 Days"
                price="2500 USDT"
                validity="600"
                profit="90%"
              />
              <DepositeBox
                children="Deposite"
                heading="Stack Base"
                date="21 Days"
                price="50 XLT"
                validity="800"
                profit="95%"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="last-container">
        <div className="last-container-wrapper">
          <div className="contents-container">
            <p className="last-p">OUR CRYPTO PLAN WORLD WIDE BUSINESS RELATIONS FOR DEVELOPMENT</p>
            <div className="btn-container">
              <Link to="/sign-up">
              <Button  children="SIGN UP NOW" buttonSize="btn--wide" buttonColor="blue" />
              </Link>
             
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}
