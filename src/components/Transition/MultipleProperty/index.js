import React from "react";
import styles from "./multiple.module.css";

const Multiple = () => {
  return (
    <div>
      <h1>Multiple transition property</h1>
      <div className={styles.container}>
        <div className={styles.transition}></div>
      </div>
    </div>
  );
};

export default Multiple;
