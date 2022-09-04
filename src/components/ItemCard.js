import React, {useState} from "react";

function ItemCard ({image, image2, title, price,sizes}) {
    const [hoverImg, setHoverImg]=useState(false);
    function handleToggleItem () {
      setHoverImg(!hoverImg);
    }
    return (
        <div className="item-component">
        <img className="item-img" onMouseOver={handleToggleItem} onMouseOut={handleToggleItem} src={hoverImg? image2:image} />
        <div className="item-info">
          <span className="item">{hoverImg? "AVAILABLE IN":title}</span>
          <span className="price">{hoverImg? "1 COLOUR(S)": "$"+ price}</span><br></br>
          {hoverImg? <span className="size">{sizes.join(' ')}</span>: null}
        </div>
      </div>
    );
};
export default ItemCard;