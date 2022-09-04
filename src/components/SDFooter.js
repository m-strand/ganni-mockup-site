import React, {useState} from "react";

function SDFooter ({toggleChange}) {
    const [supportDown, setSupportDown]=useState(false);
    function handleSupportDown () {
        setSupportDown(!supportDown);
    }
    const [termsDown, setTermsDown]=useState(false);
    function handleTermsDown () {
        setTermsDown(!termsDown);
    }
    const [aboutDown, setAboutDown]=useState(false);
    function handleAboutDown () {
        setAboutDown(!aboutDown);
    }

    const [campaignDown, setCampaignDown]=useState(false);
    function handleCampaignDown () {
        setCampaignDown(!campaignDown);
    }
    return (
        <div className="SDfooter-component">
      <div className="SDfooter-column last">
        <p className="newsletter">Sign up to our newsletter to hear about exclusives, future collections, and get first access to SALE</p>
        <button className="signUp">SIGN UP</button>
      </div>
        <div className="SDfooter-column">
          <div className="SDFoot-header">
            <h2>SUPPORT</h2>
            <i className="material-icons expand-option" onClick={handleSupportDown}>expand_more</i>
          </div>
          {supportDown? 
          <div>
            <p className="fLine">HELP</p>
            <p className="fLine">FAQ</p>
            <p className="fLine">STORE LOCATOR</p>
            <p className="fLine">E-GIFTCARD</p>
            <p className="fLine">SHIPPING</p>
            <p className="fLine">RETURNS</p>
            <p className="fLine">BOOK AN APPOINTMENT</p>
          </div>
          : null}
        </div>
        
      <div className="SDfooter-column">
        <div className="SDFoot-header">
          <h2>TERMS & CONDITIONS</h2>
          <i className="material-icons expand-option" onClick={handleTermsDown}>expand_more</i>
        </div>
        {termsDown? 
        <div>
            <p className="fLine">TERMS & CONDITIONS</p>
            <p className="fLine">PRIVACY POLICY</p>
            <p className="fLine">COOKIES</p>
            <p className="fLine">COOKIES SETTINGS</p>
        </div>
        :null}
      </div>

      <div className="SDfooter-column">
        <div className="SDFoot-header">
          <h2>ABOUT US</h2>
          <i className="material-icons expand-option" onClick={handleAboutDown}>expand_more</i>
        </div>
        {aboutDown? 
        <div>
            <p className="fLine">ABOUT GANNI</p>
            <p className="fLine">RESPONSIBILITY</p>
            <p className="fLine">2021 RESPONSIBILITY REPORT</p>
            <p className="fLine">PRESS</p>
            <p className="fLine">CAREERS</p>
            <p className="fLine">GANNI WORLD</p>
            <p className="fLine">STUDENT REWARDS</p>
            <p className="fLine">REFER A FRIEND</p>
        </div>
        :null}
      </div>

      <div className="SDfooter-column">
        <div className="SDFoot-header">
          <h2>CAMPAIGNS</h2>
          <i className="material-icons expand-option" onClick={handleCampaignDown}>expand_more</i>
        </div>
        {campaignDown? 
        <div>
            <p className="fLine">REPACK</p>
            <p className="fLine">POSTMODERN</p>
        </div>
        :null}
      </div>
      <div className="SDlang-country">
         <div className="SDlcDiv">
            <h4>Country</h4>
            <p>UNITED STATES</p>
         </div>
         <div className="SDlcDiv">
            <h4>Language</h4>
            <p>ENGLISH US</p>
         </div>
         <button className="SDchange-btn" onClick={toggleChange}>CHANGE</button>
     </div>
</div>
    );
};

export default SDFooter;