import React from "react";

import styles from "./Task4.module.css";

function Task4() {
  return (
    <>
      <h2>Task 4</h2>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <p>turnip </p>
          <p>greens </p>
          <p>yarrow </p>
          <p>ricebean </p>
        </div>

        <div className={styles.innerContainer}>
          <p>rutabaga </p>
          <p>endive </p>
          <p>cauliflower</p>
        </div>

        <div className={styles.innerContainer}>
          <p>sealettuce</p>
          <p>kohlrabi </p>
          <p>amarnath </p>
        </div>
      </div>
    </>
  );
}

export default Task4;
