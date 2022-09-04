import React from "react";

function LanguageSelection ({toggleChange, change}) {
    return (
        <div className={change? "visible change-lang-component": "hidden change-lang-component"}>
            <i className="material-icons exit" onClick={toggleChange}>close</i> 
                        <div className="change-header">
                                <h1>WELCOME TO GANNI</h1>
                                <h4>Select your language and country</h4>
                        </div>
            <div className="change-selection">
                        <div className="lang-count-change"> 
                                <div className="change-div">
                                    <span className="lang">Country</span><br/>
                                    <span className="selected-option">UNITED STATES</span>
                                    <i className="material-icons expand-option">expand_more</i>
                                </div>
 
                                <div className="change-div">
                                    <span className="lang">Language</span><br/>
                                    <span className="selected-option">ENGLISH(US)</span>
                                    <i className="material-icons expand-option">expand_more</i>
                                </div>
                                <div className="save_selection">
                                    <input type="checkbox"/>
                                    <label>Save my Selection</label>
                                </div>
                        </div>
                <button className="letsgo">LET'S GO</button>
            </div>
        </div>
        
    );
};

export default LanguageSelection;