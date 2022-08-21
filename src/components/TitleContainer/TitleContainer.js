import React from "react";
import styles from "./TitleContainer.module.scss";
import { AiFillPhone, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

const TitleContainer = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.left}>
        <h1>FARHAD FARAJI</h1>
        <h3>Web Developer</h3>
      </div>
      <div className={styles.right}>
        <p>
          <span>
            <AiFillPhone />
          </span>
          0090 (543) 455 2160
        </p>
        <p>
          <a href="mailto:farhadham2@gmail.com">
            <span>
              <AiOutlineMail />
            </span>
            farhadham2@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://farhadf.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <BsGlobe />
            </span>
            www.farhadf.com
          </a>
        </p>
        <p>
          <span>
            <BiCurrentLocation />
          </span>
          Turkey / Iran
        </p>
      </div>
    </div>
  );
};

export default TitleContainer;
