import React from "react";
import styles from "./basic.module.css";

const Basic = () => {
  return (
    <div>
      <h1>Transition</h1>
      <ul>
        <li>
          CSS Transitions allows property changes in CSS values to occur
          smoothly over a specific duration
        </li>
      </ul>
      <div className={styles.transition}></div>
    </div>
  );
};

export default Basic;
