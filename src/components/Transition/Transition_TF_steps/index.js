import React from "react";
import styles from "./timing-function.module.css";

const TimingFunctionStep = () => {
  return (
    <div>
      <h1>Transition Timing Function : steps()</h1>
      <div className={styles.container}>
        {/* <div className={styles.steps}>
          <p>steps</p>
        </div> */}
        <div className={styles.steps_start}>
          <p>steps start</p>
        </div>
        <div className={styles.steps_end}>
          <p>steps end</p>
        </div>
      </div>
    </div>
  );
};

export default TimingFunctionStep;
