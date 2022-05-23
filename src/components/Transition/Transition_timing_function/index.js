import React from "react";
import styles from "./timing-function.module.css";

const TimingFunction = () => {
  return (
    <div>
      <h1>Transition Timing Function</h1>
      <div className={styles.container}>
        <div className={styles.ease}>
          <p>ease</p>
        </div>
        <div className={styles.ease_in}>
          <p>ease in</p>
        </div>
        <div className={styles.ease_out}>
          <p>ease out</p>
        </div>
        <div className={styles.ease_in_out}>
          <p>ease in out</p>
        </div>
        <div className={styles.step_start}>
          <p>step start</p>
        </div>
        <div className={styles.step_end}>
          <p>step end</p>
        </div>
      </div>
    </div>
  );
};

export default TimingFunction;
