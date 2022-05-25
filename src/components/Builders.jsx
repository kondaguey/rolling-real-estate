import React from "react";

function Builders() {
  return (
  <div className="builders">
    <h3 className="mb-sm heading-3">Top 3 Builders</h3>
    <div className="builders__list">

      <img src="./img/builder1.jpg" alt="builders" className="builders__img" />
      <div className="builders__details">
        <h4 className="heading--4 heading4--light">Lucy Anderson</h4>
        <p className="builders__sold">30+ builds and counting...</p>
      </div>

      <img src="./img/builder2.jpg" alt="builders" className="builders__img" />
      <div className="builders__details">
        <h4 className="heading--4 heading4--light">Josh Broderick</h4>
        <p className="builders__sold">20+ builds and counting...</p>
      </div>

      <img src="./img/builder3.jpg" alt="builders" className="builders__img" />
      <div className="builders__details">
        <h4 className="heading--4 heading4--light">Matt Corbell</h4>
        <p className="builders__sold">40+ builds and counting...</p>
      </div>
    </div>
  </div>
  );
}

export default Builders; 