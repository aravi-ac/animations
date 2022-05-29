import React from "react";
import styles from "./index.module.css";

const Rocket = () => {
  return (
    <div>
      <h1>Rocket launch animation with multiple transition</h1>
      <div className={styles.container}>
        <p className={styles.rocket}>&#128640;</p>
      </div>
    </div>
  );
};

export default Rocket;
