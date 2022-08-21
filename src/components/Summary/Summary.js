import React from "react";
import styles from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>
      <p className={styles.text}>
        I started my coding journey in Jan 2022. Still, with my Extreme passion
        and tireless mindset toward learning new tech and prior skills in
        engineering and solving issues, I built my first fully functional
        e-commerce application using React Native, Express.js, and MongoDB in
        only one month. Coding has become my primary hobby, and I enjoy reading
        Docs and facing bugs.
      </p>
    </div>
  );
};

export default Summary;
