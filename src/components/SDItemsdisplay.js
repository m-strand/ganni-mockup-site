import React, {useState, useEffect} from "react";
import ItemCard from "./ItemCard.js";

function ItemsDisplay ({toggleFilterMenu, change, category, color, size}) {
    useEffect(() => {
        fetch("http://localhost:3000/items", {
            headers: { 
                'Accept': 'application/json'
           }})
        .then((response) => response.json())
        .then((data) => {setItems(data)});
    },[]);

    const [items, setItems]=useState([]);

    const itemsToCat = items.filter((item) => {
        if (category === "All") {
          return true;
        } 
        else {
            return item.category === category;
        }
         });
     
    const itemsToColor = itemsToCat.filter((item) => {
        if (color === "All") {
            return true;
        }
        else {
            return item.colors === color;
        }
    });

    const itemsToSize = itemsToColor.filter((item) => {
        if (size) {
            return true;
        }
        else {
            return item.sizes.includes(size);
        }
    })

    return (
        <div className={change? "itemWithLang items-display-component": "itemNormal items-display-component"}>
            <div className="filter-line" onClick={toggleFilterMenu}>
                <i className="material-icons">sort</i>
                <h5>FILTER</h5> 
            </div>
            <div className="items-div">
                {itemsToSize.map((item) => {
                    return (
                        <ItemCard key={item.id} image={item.img} image2={item.img2} title={item.item_name} price={item.price} sizes={item.sizes}/>
                    );
                })}
            </div>
        </div>
        );
        
};

export default ItemsDisplay;