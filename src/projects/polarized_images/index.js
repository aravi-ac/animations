import React from "react";
import styles from "./index.module.css";

import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image7.jpg";
import image8 from "../../images/image8.jpg";

const arr = [image1, image2, image3, image4, image5, image6, image7, image8];

const PolarizedImage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Polarized Image gallery</h1>
      {arr.map((item, index) => (
        <figure key={index} className={styles.card}>
          <img
            className={styles.image}
            src={item}
            alt="flower"
            width="200"
            height="200"
          />
          <figcaption className={styles.caption}>rose</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PolarizedImage;
