import React from "react";


function SDNav ({toggleMenu, menuUp}) {
    return (
        <div className={menuUp? "hidden SDnav-component": "SDnav-component"}>
            <div className="logo">
                <h1>GANNI</h1>
            </div>
            <div>
                <div>
                    <i className="material-icons headerIcon">sentiment_satisfied</i>
                    <i className="material-icons headerIcon">search</i>
                    <i className="material-icons headerIcon">shopping_bag</i>
                    <i className="material-icons headerIcon" onClick={toggleMenu}>menu</i>
                </div>
            </div>
        </div>
    )

}

export default SDNav;