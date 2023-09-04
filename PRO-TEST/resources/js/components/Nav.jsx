import React, { useEffect, useState } from "react";
import "../../css/Header.css"
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import lg1 from "../../../public/image/lg1.png"
import lg2 from "../../../public/image/lg2.png"
function Nav() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [ConOpen, setConOpen] = useState(false);
  const [BoxSh, setBoxSh] = useState("none");







  function scrollFunction() {
    if (window.scrollY >= 10) {
      setBoxSh("0px 3px 3px #5d5d5d30");
    } else {
      setBoxSh("none");
    }
  }
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setConOpen(!ConOpen);
  };
  const closeN=()=>{
    setShowNavbar(false);
    setConOpen(false);
  }




  /************************************ */

  const headRef = useRef("null");

  window.onscroll = function () {
    scrollFunction();
  };
  /**************************************** */

  const Hamburger = () => (
    <div>
      <div className={ConOpen ? "open" : ""} id="nav-icon1">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
  /****************************** */
  const url = "http://localhost:8000/CV.pdf";
  const downloadFileAtURL = () => {
    const atg = document.createElement("a");
    atg.href = url;
    atg.setAttribute("download",'CV.pdf');
    document.body.appendChild(atg);
   atg.click()
    console.log(atg)
  };
  /***************************** */






const [btnn,setBtnn]=useState(<div onClick={downloadFileAtURL}className="cvbtn"> MY RESUME</div>)
useEffect(()=>{
const a=document.getElementById("ppp").getAttribute('data-auth')
if(1==a){
 setBtnn(<NavLink to="/HomeAdmin"onClick={closeN} >DASHBOARD</NavLink>)
}else{
    setBtnn(<div onClick={downloadFileAtURL}className="cvbtn"> MY RESUME</div>)
}
},[])



  /********************************************* */
  const Logo = () => (
    <div className="logo">
      <img src={lg1} className="img1" alt="" />
      <img src={lg2} className="img2" alt="" />
    </div>
  );

  return (
    <header>
      <nav
        className="navbarr"
        ref={headRef}
        style={{ boxShadow: BoxSh }}
        id="head"
      >
        <div className="containerr">
          <div>
            <Logo />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/"  onClick={closeN}>HOME</NavLink>
              </li>
              <li>
                <NavLink to="/Projects"  onClick={closeN}>PROJECTS</NavLink>
              </li>
              <li>
                <NavLink to="/contact"  onClick={closeN}>CONTACT</NavLink>
              </li>
              <li>
                <NavLink to="/About"  onClick={closeN}>ABOUT</NavLink>
              </li>
              <li>
               {btnn}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
