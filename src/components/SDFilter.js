import React, {useState} from "react";
import { CSSTransition } from 'react-transition-group';

function SDFilter ({toggleFilterMenu, updateCategory, updateColor, updateSize}) {
    const [listDownCategory, setListDownCat]=useState(false);
    const [listDownColor, setListDownCol]=useState(false);
    const [listDownSize, setListDownSiz]=useState(false);
    function toggleDropdownCat () {
        setListDownCat(!listDownCategory);
    }

    function toggleDropdownCol () {
        setListDownCol(!listDownColor);
    }

    function toggleDropdownSiz () {
        setListDownSiz(!listDownSize);
    }

    return (
        <div className="SDfilter-component">
            <i className="material-icons fil-exit" onClick={toggleFilterMenu}>close</i>
            <h3 className="SDfilter-by">FILTER BY</h3>

            <div className="select-category">
                <i className="material-icons expand-option" onClick={toggleDropdownCat}>expand_more</i>
                <p>CATEGORY</p>
                
                <CSSTransition 
                in={listDownCategory}
                classNames="filter"
                unmountOnExit>
                <form>
                <div className="option">
                    <label>New in Shoes</label><input type="radio" id="shoes" name="garment" value="Shoes" onChange={updateCategory}/>  
                </div>
                <div className="option">
                    <label>New in Tops</label><input type="radio" id="tops" name="garment" value="Tops" onChange={updateCategory}/>
                </div>
                <div className="option">
                    <label>New in Knitwear</label><input type="radio" id="knit" name="garment" value="Knit" onChange={updateCategory}/> 
                </div>
                <div className="option">
                    <label>New in Dresses</label><input type="radio" id="dresses" name="garment" value="Dresses" onChange={updateCategory}/>
                </div>
                <div className="option">
                    <label>New in Bags</label><input type="radio" id="bags" name="garment" value="Bags" onChange={updateCategory}/>
                </div>
                </form> 
                </CSSTransition>
            </div>

        <div className="select-category">
            <i className="material-icons expand-option" onClick={toggleDropdownCol}>expand_more</i>
            <p>COLOR</p>
            
            <CSSTransition 
                in={listDownColor}
                classNames="filter"
                unmountOnExit>
                <form>
                    <div className="option">
                        <label><span className="black_dot dot"></span> Black</label>
                        <input type="radio" id="color1" name="color" value="black" onChange={updateColor}/>
                    </div>
                    <div className="option">
                        <label><span className="grey_dot dot"></span> Grey</label>
                        <input type="radio" id="color2" name="color" value="grey" onChange={updateColor}/>
                    </div>
                    <div className="option">
                        <label><span className="white_dot dot"></span> White</label>
                        <input type="radio" id="color3" name="color" value="white" onChange={updateColor}/>
                    </div>
                    <div className="option">
                        <label><span className="brown_dot dot"></span> Brown</label>
                        <input type="radio" id="color4" name="color" value="brown" onChange={updateColor}/>
                    </div>
                    <div className="option">
                        <label><span className="beige_dot dot"></span> Beige</label>
                        <input type="radio" id="color5" name="color" value="beige" onChange={updateColor}/>
                    </div>
                    <div className="option">
                        <label><span className="red_dot dot"></span> Red</label>
                        <input type="radio" id="color6" name="color" value="red" onChange={updateColor}/>
                    </div>
                    <div className="option">
                        <label><span className="pink_dot dot"></span> Pink</label>
                        <input type="radio" id="color7" name="color" value="pink" onChange={updateColor}/>
                     </div>
                    <div className="option">
                        <label><span className="purple_dot dot"></span> Purple</label>
                        <input type="radio" id="color8" name="color" value="purple" onChange={updateColor}/>
                    </div>
                    <div className="option">
                        <label><span className="blue_dot dot"></span> Blue</label>
                        <input type="radio" id="color9" name="color" value="blue" onChange={updateColor}/>
                    </div>
            </form>
            </CSSTransition>
        </div>

        <div className="select-category">
            <i className="material-icons expand-option" onClick={toggleDropdownSiz}>expand_more</i>
            <p>SIZE</p>
            
            <CSSTransition 
                in={listDownSize}
                classNames="filter"
                unmountOnExit>
            <form>
                <div className="option">
                    <label> XXS</label>
                    <input type="radio" id="size1" name="size" value="xxs" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> XS</label>
                    <input type="radio" id="size2" name="size" value="xs" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> S</label>
                    <input type="radio" id="size3" name="size" value="s" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> M</label>
                    <input type="radio" id="size4" name="size" value="m" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> L</label>
                    <input type="radio" id="size5" name="size" value="large" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> XL</label>
                    <input type="radio" id="size6" name="size" value="blue" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> 25</label>
                    <input type="radio" id="size7" name="size" value="blue" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> 26</label>
                    <input type="radio" id="size8" name="size" value="blue" onChange={updateSize}/>
                </div>
                <div className="option">
                    <label> 27</label>
                    <input type="radio" id="size9" name="size" value="blue" onChange={updateSize}/>
                </div>
            </form>
            </CSSTransition>
        </div>
        <button className="viewItems" onClick={toggleFilterMenu}>VIEW ITEMS</button>
    </div>
    );
};

export default SDFilter;