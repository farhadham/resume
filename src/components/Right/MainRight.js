import React from "react";
import styles from "./MainRight.module.scss";

const MainRight = () => {
  return (
    <div className={styles.right}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div className={styles.rectangle}></div>
        <h1>SKILLS</h1>
      </div>
      <h4>HTML / CSS</h4>
      <h4>JavScript</h4>
      <h4>React.js</h4>
      <h4>Next.Js</h4>
      <h4>Redux</h4>
      <h4>Node.js</h4>
      <h4>Express.js</h4>
      <h4>MongoDB</h4>
      <h4>React Native</h4>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div className={styles.rectangle}></div>
        <h1>LANGUAGES</h1>
      </div>
      <h4>English</h4>
      <h4>Turkish</h4>
      <h4>Persian</h4>
      <h4>Azerbaijani</h4>
    </div>
  );
};

export default MainRight;
