import React, {useState, useEffect} from "react";
import './App.css';
import Nav from "./components/Nav.js";
import SDNav from "./components/SDNav.js";
import Header from "./components/Header.js";
import SDHeader from "./components/SDHeader.js";
import SDFilter from "./components/SDFilter.js";
import ItemsDisplay from "./components/ItemsDisplay.js";
import SDItemsdisplay from "./components/SDItemsdisplay.js";
import Footer from "./components/Footer.js";
import SDFooter from "./components/SDFooter.js";
import Help from "./components/Help.js";
import SDHelp from "./components/SDHelp.js";
import LanguageSelection from "./components/LanguageSelection.js";
import SDNavDropdown from "./components/SDNavDropdown.js";


function App() {
  const [isDesktop, setDesktop] = useState(window.innerWidth < 1200);

  function updateWindowSize () {
    setDesktop(window.innerWidth < 1200);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  });

  const [change, setChange]=useState(false);

  function toggleChange () {
      setChange(!change);
      console.log(change);
  }

  const [menuUp, setMenu]=useState(false);

  function toggleMenu () {
      setMenu(!menuUp);
  }

  const [filmenuUp, setfilmenuUp]=useState(false);

  function toggleFilterMenu () {
    setfilmenuUp(!filmenuUp);
  }

  
  const [category, setCategory]=useState("All");
  const [color, setColor]=useState("All");
  const [size, setSize]=useState("All");

  function updateCategory (event) {
      setCategory(event.target.value);
  }

  function updateColor (event) {
      setColor(event.target.value);
  }

  function updateSize (event) {
      setSize(event.target.value)
  }

  return (
    <>
    {isDesktop? 
      <>
      {menuUp? <SDNavDropdown toggleMenu={toggleMenu}/> 
      :     
      <>
      {filmenuUp? <SDFilter toggleFilterMenu={toggleFilterMenu} updateCategory={updateCategory} updateColor={updateColor} updateSize={updateSize} /> 
      :
      <>  
      <LanguageSelection toggleChange={toggleChange} change={change} />
      <SDNav toggleMenu={toggleMenu}/>
      <SDHeader />
      <SDItemsdisplay  toggleFilterMenu={toggleFilterMenu} change={change} category={category} color={color} size={size} />
      <SDFooter toggleChange={toggleChange}/>
      <SDHelp />
      </>
      }
      </>
    }
      </>

      : 
      <>
      <LanguageSelection toggleChange={toggleChange} change={change} />
      <Nav change={change}/>
      <Header change={change}/>
      <ItemsDisplay change={change} category={category} color={color} size={size} updateCategory={updateCategory} updateColor={updateColor} updateSize={updateSize}/>
      <Footer/>
      <Help toggleChange={toggleChange}/> 
      </>
  
    }
    </>
  );
}

export default App;

