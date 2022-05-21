import React from "react";
import styles from "./transformable.module.css";

const Transformable = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <span className={styles.inline}>Hello everyone</span>
      </div>
    </div>
  );
};

export default Transformable;
