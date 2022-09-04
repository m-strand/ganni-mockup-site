import React from "react";

function Footer () {
    return (
        <div className="footer-component">
          <div className="footer-column">
            <h2>SUPPORT</h2>
            <p className="fLine">HELP</p>
            <p className="fLine">FAQ</p>
            <p className="fLine">STORE LOCATOR</p>
            <p className="fLine">E-GIFTCARD</p>
            <p className="fLine">SHIPPING</p>
            <p className="fLine">RETURNS</p>
            <p className="fLine">BOOK AN APPOINTMENT</p>
          </div>
        <div className="footer-column">
          <h2>TERMS & CONDITIONS</h2>
          <p className="fLine">TERMS & CONDITIONS</p>
          <p className="fLine">PRIVACY POLICY</p>
          <p className="fLine">COOKIES</p>
          <p className="fLine">COOKIES SETTINGS</p>
        </div>
  
        <div className="footer-column">
          <h2>ABOUT US</h2>
          <p className="fLine">ABOUT GANNI</p>
          <p className="fLine">RESPONSIBILITY</p>
          <p className="fLine">2021 RESPONSIBILITY REPORT</p>
          <p className="fLine">PRESS</p>
          <p className="fLine">CAREERS</p>
          <p className="fLine">GANNI WORLD</p>
          <p className="fLine">STUDENT REWARDS</p>
          <p className="fLine">REFER A FRIEND</p>
        </div>
  
        <div className="footer-column">
          <h2>CAMPAIGNS</h2>
          <p className="fLine">REPACK</p>
          <p className="fLine">POSTMODERN</p>
        </div>
  
      <div className="footer-column last">
        <h2>BE THE FIRST TO KNOW</h2>
        <p className="newsletter">Sign up to our newsletter to hear about exclusives, future collections, and get first access to SALE</p>
        <button className="signUp">SIGN UP</button>
      </div>
    </div>
    );
};

export default Footer;