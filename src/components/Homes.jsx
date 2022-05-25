import React from "react";
import { GiMountainRoad } from "react-icons/gi";
import { BsFillPinMapFill } from "react-icons/bs";
import { CgSize } from "react-icons/cg";
import { FaRuler, FaBitcoin, FaHeart } from "react-icons/fa";





function Homes() {
  return (
  <div className="homes">
  
    <div className="home">

      <img className="home__img" src="./img/lush.jpg" alt="home 1" />
      <i className="home__heart"><FaHeart /></i>
      <h5 className="home__name">Rugged Mountain Climber</h5>

      <div className="home__location">
        <i className="home__location--icon"><BsFillPinMapFill /></i>
        <p>Good for green hills</p>
      </div>

      <div className="home__spaces">
      <i className="home__spaces--icon"><CgSize /></i>
        <p>2 Spaces</p>
      </div>

      <div className="home__size">
        <i className="home__size--icon"><FaRuler /></i>
        <p>34m<sup>2</sup></p> 
      </div>

      <div className="home__price">
        <i className="home__price--icon"><FaBitcoin /></i>
        <p>2.5432943 BTC</p>
      </div>

      <button className="home__btn">
        Contact Builder
      </button>

    </div>

    <div className="home">
      <img className="home__img" src="./img/alpine.jpg" alt="home 2" />
      <i className="home__heart"><FaHeart /></i>
      <h5 className="home__name">Forest Explorer</h5>
      <div className="home__location">
        <i className="home__location--icon"><BsFillPinMapFill /></i>
        <p>Deep Alpine Forests</p>
      </div>
      <div className="home__spaces">
      <i className="home__spaces--icon"><CgSize /></i>
        <p>2 Spaces</p>
      </div>
      <div className="home__size">
        <i className="home__size--icon"><FaRuler /></i>
        <p>37m<sup>2</sup></p> 
      </div>
      <div className="home__price">
        <i className="home__price--icon"><FaBitcoin /></i>
        <p>2.78933 BTC</p>
      </div>
      <button className="home__btn">
        Contact Builder
      </button>
    </div>

    <div className="home">
      <img className="home__img" src="./img/military-1.png" alt="home 3" />
      <i className="home__heart"><FaHeart /></i>
      <h5 className="home__name">Military Man</h5>
      <div className="home__location">
        <i className="home__location--icon"><BsFillPinMapFill /></i>
        <p>All Terrain. Secure in cities.</p>
      </div>
      <div className="home__spaces">
      <i className="home__spaces--icon"><CgSize /></i>
        <p>5 Spaces</p>
      </div>
      <div className="home__size">
        <i className="home__size--icon"><FaRuler /></i>
        <p>45m<sup>2</sup></p> 
      </div>
      <div className="home__price">
        <i className="home__price--icon"><FaBitcoin /></i>
        <p>3.003483 BTC</p>
      </div>
      <button className="home__btn">
        Contact Builder
      </button>
    </div>

    <div className="home">
      <img className="home__img" src="./img/purple-night.jpg" alt="home 4" />
      <i className="home__heart"><FaHeart /></i>
      <h5 className="home__name">Nature's Delight</h5>
      <div className="home__location">
        <i className="home__location--icon"><BsFillPinMapFill /></i>
        <p>Thrives in Temperate Climates</p>
      </div>
      <div className="home__spaces">
      <i className="home__spaces--icon"><CgSize /></i>
        <p>3 Spaces</p>
      </div>
      <div className="home__size">
        <i className="home__size--icon"><FaRuler /></i>
        <p>40m<sup>2</sup></p> 
      </div>
      <div className="home__price">
        <i className="home__price--icon"><FaBitcoin /></i>
        <p>2.178392 BTC</p>
      </div>
      <button className="home__btn">
        Contact Builder
      </button>
    </div>

    <div className="home">
      <img className="home__img" src="./img/schoolie-1.png" alt="home 5" />
      <i className="home__heart"><FaHeart /></i>
      <h5 className="home__name">The Homebody</h5>
      <div className="home__location">
        <i className="home__location--icon"><BsFillPinMapFill /></i>
        <p>Best on the open road</p>
      </div>
      <div className="home__spaces">
      <i className="home__spaces--icon"><CgSize /></i>
        <p>7 Spaces</p>
      </div>
      <div className="home__size">
        <i className="home__size--icon"><FaRuler /></i>
        <p>69m<sup>2</sup></p> 
      </div>
      <div className="home__price">
        <i className="home__price--icon"><FaBitcoin /></i>
        <p>2.998748 BTC</p>
      </div>
      <button className="home__btn">
        Contact Builder
      </button>
    </div>

    <div className="home">
      <img className="home__img" src="./img/canyon.jpg" alt="home 6" />
      <i className="home__heart"><FaHeart /></i>
      <h5 className="home__name">The Classic Vanlifer</h5>
      <div className="home__location">
        <i className="home__location--icon"><BsFillPinMapFill /></i>
        <p>Take it anywhere</p>
      </div>
      <div className="home__spaces">
      <i className="home__spaces--icon"><CgSize /></i>
        <p>3 Spaces</p>
      </div>
      <div className="home__size">
        <i className="home__size--icon"><FaRuler /></i>
        <p>37m<sup>2</sup></p> 
      </div>
      <div className="home__price">
        <i className="home__price--icon"><FaBitcoin /></i>
        <p>2.0343244 BTC</p>
      </div>
      <button className="home__btn">
        Contact Builder
      </button>
    </div>

  </div>
  );
}

export default Homes;