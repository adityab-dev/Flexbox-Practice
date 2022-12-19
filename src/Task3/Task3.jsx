import React from "react";

import styles from "./Task3.module.css";

function Task3() {
  return (
    <>
      <h2>Task3</h2>
      <div className={styles.parent}>
        <div className={styles.child}>
          <p>Center me.</p>
        </div>
      </div>
    </>
  );
}

export default Task3;
