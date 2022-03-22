import React from "react";
// How I routed my pages together
import { Link } from "react-router-dom";
const hero = { backgroundImage: `url(assets/images/three.jpeg)` };
function HeroImage() {
  return (
    // change to className

    <div className="hero-image" style={hero}>
      <div className="hero-text">
        <section className="hero-text-info">
          <h2>
            <strong>
              <i>Discover</i>
            </strong>{" "}
            bottles that fit all your
            <i>needs</i>
          </h2>
          <br />
          <div className="horizontal"></div>
          <br />
          <br />
          <h3>
            <i>Never Thirst</i> headquarters is located in Charlotte, NC and we
            custom design every bottle to fit your adventurous lifestyle!
          </h3>
          <br />
          <div>
            <div className="cta-button">
              <Link to="/products">Click to Explore Products</Link>
            </div>
          </div>
          <br />
          <div className="horizontal"></div>
        </section>
      </div>
    </div>
  );
}

export default HeroImage;
