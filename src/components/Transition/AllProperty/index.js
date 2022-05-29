import React from "react";
import styles from "./all.module.css";

const AllProprty = () => {
  return (
    <div>
      <h1>All transition property</h1>
      <div className={styles.container}>
        <div className={styles.transition}>transition</div>
      </div>
    </div>
  );
};

export default AllProprty;
