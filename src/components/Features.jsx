import React from "react";
import { FaShuttleVan } from "react-icons/fa";
import{ GiUsaFlag } from "react-icons/gi";
import { MdOutlineGroups, MdOutlineSchool } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { BiBusSchool } from "react-icons/bi";


function Features(props) {
  return (
  <div className="features mt-hg mb-hg">

    <div className="feature">
      <i className="feature__icon"><FaShuttleVan /></i>
      <h4 className="heading-4 heading-4--dark">World's Best Adventure Vans</h4>
      <p className="feature__text">Our van's are unparalleled in quality, durability and emergency preparedness.</p>
    </div>

    <div className="feature">
      <i className="feature__icon"><GiUsaFlag /></i>
      <h4 className="heading-4 heading-4--dark">Only the best materials</h4>
      <p className="feature__text">All makes and parts made in USA. 'nuff said.</p>
    </div>

    <div className="feature">
      <i className="feature__icon"><MdOutlineGroups /></i>
      <h4 className="heading-4 heading-4--dark">No matter where you are...</h4>
      <p className="feature__text">We connect you with other Rollers in your area through our custom app. Community is key in times of uncertainty.</p>
    </div>

    <div className="feature">
      <i className="feature__icon feature__icon--lock"><AiFillLock /></i>
      <h4 className="heading-4 heading-4--dark">Security</h4>
      <p className="feature__text">As a standard feature in all vans, we install double steel-grade durable locks to all doors. We get it, people will be jealous of your home.</p>
    </div>

    <div className="feature">
      <i className="feature__icon"><MdOutlineSchool /></i>
      <h4 className="heading-4 heading-4--dark">Driving School</h4>
      <p className="feature__text">You may be a little intimidated in driving your new home if you've never driven big before. That's why with all purchases of a home, we offer a free 3-day van/trucks driver's school.</p>
    </div>

    <div className="feature">
      <i className="feature__icon feature__icon--bus"><BiBusSchool /></i>
      <h4 className="heading-4 heading-4--dark">The School Bus Series</h4>
      <p className="feature__text">Brand new School Bus Series For the real homebodies. Inquire within!</p>
    </div>
    
  </div>
  );
}

export default Features;