import React from "react";

function SDNavDropdown ({toggleMenu}) {
    return (
        <div className="SDNavDropdown">
            <i className="material-icons exit" onClick={toggleMenu}>close</i>
            <div className="top-container">
                <h4>New Arrivals</h4>
                <h4>Clothing</h4>
                <h4>Dresses</h4>
                <h4>Accessories</h4>
                <h4>Shoes</h4>
                <h4>Collections</h4>
                <h4>GANNI World</h4>
                <h4>Vacation Shop</h4>
        </div>
        <div className="bottom-container">
            <h4>Store Locator</h4>
            <h4>Customer Service</h4>
        </div>
    </div>
    )
}
export default SDNavDropdown;