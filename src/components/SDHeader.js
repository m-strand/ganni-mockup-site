import React from "react";

function SDHeader ({change}) {
    return (
        <div className={change? "SDheader-component": "SDheader-component"}>
            <h1 className="SDnewArriv">NEW ARRIVALS</h1>
            <p className="SDnewDescript">NEW IN AT GANNI. All the pieces you've had your eye on are here. Discover the latest pieces to drop on GANNI.com, from our newest collection ...</p>
            <div className="SDnewBtnCtner">
                <h6 className="SDnewBtn">NEW IN DRESSES</h6>
                <h6 className="SDnewBtn">NEW IN TOPS</h6>
                <h6 className="SDnewBtn">NEW IN T-SHIRTS</h6>
                <h6 className="SDnewBtn">NEW IN DENIM</h6>
                <h6 className="SDnewBtn">MORE</h6>
            </div>
            
        </div>
    );
};

export default SDHeader;