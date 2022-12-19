import React from "react";

import styles from "./Task1.module.css";

function Task1() {
  return (
    <>
      <h2>Task 1</h2>
      <div
        className={`${styles.container} ${styles.padding}`}
      >
        <p>Home</p>
        <p>About Us</p>
        <p>Our Products</p>
        <p>Contact Us</p>
      </div>
    </>
  );
}

export default Task1;
