import React from "react";
import styles from "./timing-function.module.css";

const TimingFunctionCubic = () => {
  return (
    <div>
      <h1>Transition Timing Function : cubic-bezier()</h1>
      <div className={styles.container}>
        <div className={styles.cubic}>
          <p>cubic bezier</p>
        </div>
      </div>
    </div>
  );
};

export default TimingFunctionCubic;
