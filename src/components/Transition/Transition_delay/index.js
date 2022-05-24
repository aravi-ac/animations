import React from "react";
import styles from "./delay.module.css";

const Delay = () => {
  return (
    <div>
      <h1>Transition Delay</h1>
      <div className={styles.container}>
        <div className={styles.delay1}>
          <p>delay1</p>
        </div>
        <div className={styles.delay2}>
          <p>delay2</p>
        </div>
        <div className={styles.delay3}>
          <p>delay3</p>
        </div>
        <div className={styles.delay4}>
          <p>delay4</p>
        </div>
        <div className={styles.delay5}>
          <p>delay5</p>
        </div>
      </div>
    </div>
  );
};

export default Delay;
