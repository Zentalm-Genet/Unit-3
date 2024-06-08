import React from "react";
import styles from "./Home.module.css";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div
      className={styles.ad_banner}
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.ad_text}>
        <h3>New Recipe</h3>
        <h1>Spciy Pineapple Salmon</h1>
        <h3>
          SWEET AND SPICY PINEAPPLE SALMON — Salmon is roasted in a sweet and spicy pineapple sauce, along with pineapple slices, in this easy, healthy meal that’s ready in 30 minutes or less!
        </h3>
        <Link to="/recipe/3">
          <button className="blue-btn">Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
