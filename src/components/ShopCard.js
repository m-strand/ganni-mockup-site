import React from "react";


function ShopCard ({categories, img1, img2, title1, title2}) {
    return (
        <div className="dropdown-component">
        <div className="shop-category">
            <div className="cat-column-1">
                <h4>SHOP BY CATEGORY</h4>
                {categories.map((category) => {
                    return (
                    <p>{category}</p>
                    )
                })}
            </div>

        </div>
            <div className="shop_div">
                <div className="shop-card">
                    <img src={img1} height="300px" width="550px"/>
                    <h3>{title1}</h3>
                    <p className="shop-now">Shop Now</p>
                </div>
                <div className="shop-card">
                    <img src={img2} height="300px" width="550px"/>
                    <h3>{title2}</h3>
                    <p className="shop-now">Shop Now</p>
                </div>
            </div>
    </div>
    )
}

export default ShopCard;