import React from "react";

function Header ({change}) {
    return (
        <div className={change? "withLangHeader header-component": "normalHeader header-component"}>
            <h1 className="newArriv">NEW ARRIVALS</h1>
            <div className="newBtnCtner">
                <h6 className="newBtn">NEW IN DRESSES</h6>
                <h6 className="newBtn">NEW IN TOPS</h6>
                <h6 className="newBtn">NEW IN T-SHIRTS</h6>
                <h6 className="newBtn">NEW IN DENIM</h6>
                <h6 className="newBtn">MORE</h6>
            </div>
            <p className="newDescript">NEW IN AT GANNI. All the pieces you've had your eye on are here. Discover the latest pieces to drop on GANNI.com, from our newest collection ...</p>
        </div>
    );
};

export default Header;