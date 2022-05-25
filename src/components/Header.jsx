import React from "react";

function Header() {
  return (
  <div className="header">
    <img src="./img/logo-simplified.png" alt="logo" className="header__logo" />
    <h3 className="heading-3">Your own Off-grid Home:</h3>
    <h1 className="heading-1">The ultimate personal freedom</h1>
    <button className="mt-sm btn header__btn">View all "properties"</button>
    <div className="header__seenon-text">As Seen On</div>
    <div className="header__seenon-logos">
      <img className="header__seenon-logos--1" src="./img/REI_logo.svg.png " alt="REI" />
      <img className="header__seenon-logos--2"src="./img/logo-airbnb.png " alt="REI" />
      <img className="header__seenon-logos--3"src="./img/logo-trvlch.png " alt="REI" />
    </div>
  </div>
  );
}

export default Header;