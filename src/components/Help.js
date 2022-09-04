import React, {useState} from "react";

function Help ({toggleChange}) {
    return (
        <div className="help-component">
            <div className="lang-country">
                <i className="material-icons">help_outline</i>
                <p className="help">Help</p>
                <i className="material-icons">language</i>
                <div className="lcDiv">
                    <p>Country</p>
                    <p>UNITED STATES</p>
                </div>
                <div className="lcDiv">
                    <p>Language</p>
                    <p>ENGLISH US</p>
                </div>
                <button className="change-btn" onClick={toggleChange}>CHANGE</button>
            </div>
            <div className="social-media">
                <i className="smIcon fa-brands fa-instagram"></i>
                <i className="smIcon fa-brands fa-facebook"></i>
                <i className="smIcon fa-brands fa-tiktok"></i>
                <i className="smIcon fa-brands fa-youtube"></i>
            </div>
        </div>
    );
};

export default Help;