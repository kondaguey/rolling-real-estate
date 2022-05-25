import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
  <div className="footer">
    <ul className="nav">
      <li className="nav__item">
        <a href="#" className="nav__link">Find your dream home</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">Request Estimate</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">Download Van Planner</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">Contact US</a>
      </li>
      <li className="nav__item">
        <a href="#" className="nav__link">Collab on a Van</a>
      </li>
    </ul>
    <p className="copyright">
      &copy;{year} by Rolling Real Estate LLC.
      <img src="./img/logo-simplified.png" alt="logo" className="footer__logo" />
    </p>
  </div>
  );
}

export default Footer;