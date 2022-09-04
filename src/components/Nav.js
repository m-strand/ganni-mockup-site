import React, {useState, useEffect} from "react";
import ShopCard from "./ShopCard.js";

function Nav ({change}) {
    const [shopCards, setShopCards] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/shopCard", {
            headers: { 
                'Accept': 'application/json'
           }})
        .then((response) => response.json())
        .then((data) => {
            setShopCards(data)
        });
    },[]);


    const newArrivalsCard = shopCards.filter((shop) =>{
        return shop.section == "New Arrivals";
    })
    const ClothingCard = shopCards.filter((shop) =>{
        return shop.section == "Clothing";
    })
    const DressesCard = shopCards.filter((shop) =>{
        return shop.section == "Dresses";
    })
    const AccessoriesCard = shopCards.filter((shop) =>{
        return shop.section == "Accessories";
    })
    const ShoesCard = shopCards.filter((shop) =>{
        return shop.section == "Shoes";
    })
    const CollectionsCard = shopCards.filter((shop) =>{
        return shop.section == "Collections";
    })
    const GANNIWorldCard = shopCards.filter((shop) =>{
        return shop.section == "GANNI World";
    })
    const VacationCard = shopCards.filter((shop) =>{
        return shop.section == "Vacation Shop";
    })


    return (
        <div className={change? "withLang nav-component": "normal nav-component"}>
            <div className="left-container">
                <div className="logo">
                    <h1>GANNI</h1>
                </div>
                <div className="navDropContainer">              
                    <h4 className="link">New Arrivals</h4>
                    {newArrivalsCard.map((shop) => {
                        return (
                        <div className="dropdownNA">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                        )
                    })}
                </div> 
                <div className="navDropContainer">
                    <h4 className="link">Clothing</h4>
                    {ClothingCard.map((shop) => {
                        return (
                        <div className="dropdownCl">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                         )
                        })}
                </div>
                <div className="navDropContainer">
                    <h4 className="link">Dresses</h4>
                    {DressesCard.map((shop) => {
                        return (
                        <div className="dropdownDr">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                         )
                        })}
                </div>
                <div className="navDropContainer">
                    <h4 className="link">Clothing</h4>
                    {AccessoriesCard.map((shop) => {
                        return (
                        <div className="dropdownAc">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                         )
                        })}
                </div>
                <div className="navDropContainer">
                    <h4 className="link">Shoes</h4>
                    {ShoesCard.map((shop) => {
                        return (
                        <div className="dropdownSh">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                         )
                        })}
                </div>
                <div className="navDropContainer">
                    <h4 className="link">Collections</h4>
                    {CollectionsCard.map((shop) => {
                        return (
                        <div className="dropdownCo">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                         )
                        })}
                </div>
                <div className="navDropContainer">
                    <h4 className="link">GANNI World</h4>
                    {GANNIWorldCard.map((shop) => {
                        return (
                        <div className="dropdownGA">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                         )
                        })}
                </div>
                <div className="navDropContainer">
                    <h4 className="link">Vacation Shop</h4>
                    {VacationCard.map((shop) => {
                        return (
                        <div className="dropdownVS">
                            <ShopCard key={shop.section} categories={shop.categories} img1={shop.img1} img2={shop.img2} title1={shop.title1} title2={shop.title2}/>
                        </div>
                         )
                        })}
                </div>  
            </div>
            
  
            <div className="right-container">
                <p>Create account</p>
                <span className="space">|</span>
                <p>Quick Login</p>
                <div className="icon-container">
                    <i className="material-icons headerIcon">sentiment_satisfied</i>
                    <i className="material-icons headerIcon">search</i>
                    <i className="material-icons headerIcon">shopping_bag</i>
                </div>
            </div>
        </div>
    );
};

export default Nav;