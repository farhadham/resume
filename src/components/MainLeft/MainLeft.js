import React from "react";
import styles from "./MainLeft.module.scss";

const MainLeft = () => {
  return (
    <>
      <div className={styles.left}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div className={styles.rectangle}></div>
          <h1>WORK EXPERIENCE</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <h3>Full-Stack Web Developer - Freelance</h3>
          <span className={styles.span}>2022 - present</span>
        </div>

        <div className={styles.list}>
          <ul>
            <li>
              Provided effective troubleshooting and remediation for web
              applications.
            </li>
            <li>Interfaced with clients to identify business requirements.</li>
            <li>
              Worked with a proficient understanding of code conversion tools.
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <h3>Audio Engineer / Music Composer - Freelance</h3>
          <span className={styles.span}>2019 - 2022</span>
        </div>
        <div className={styles.list}>
          <ul>
            <li>
              Completed more than 180 projects for various clients including{" "}
              <a href="https://www.facebook.com/nhlstenden/videos/475244907279750/">
                NHL stenden
              </a>
              , and{" "}
              <a href="https://www.instagram.com/p/CW_P0o0KwTN/">
                Eventopeople
              </a>
              .
            </li>
            <li>5-star Reviews for all of the accomplished jobs </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div className={styles.rectangle}></div>
          <h1>FREELANCE PROJECTS</h1>
        </div>
        <h3>Karla Shop / Full-Stack E-Commerce Application</h3>
        <ul className={styles.list}>
          <li>Developed using React Native, Express.js, and MongoDB</li>
          <li>SMS Authentication, Email Notification, Payment System</li>
          <li>
            <a
              href="https://karla-online.com"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4f4f4f", textDecoration: "underline" }}
            >
              Website
            </a>
          </li>
        </ul>
        <h3>Radicalsecurity.io Landing Page</h3>
        <ul className={styles.list}>
          <li>Developed using Next.js and Tailwind.css</li>
          <li>Created a responsive page from the Figma design</li>
          <li>
            Under development{" "}
            <a
              href="https://radical-security.vercel.app/teams"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4f4f4f", textDecoration: "underline" }}
            >
              Link
            </a>
          </li>
        </ul>
        <h3>Sorex.eu Webpage</h3>
        <ul className={styles.list}>
          <li>Developed using Next.js and Framer-motion</li>
          <li>
            Created a responsive and multilingual webpage. Scroll-based 3d
            animations
          </li>
          <li>
            Under development{" "}
            <a
              href="https://sorex-landingpage.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4f4f4f", textDecoration: "underline" }}
            >
              Link
            </a>
          </li>
        </ul>
        <h3>then0bot.com Landing Page</h3>
        <ul className={styles.list}>
          <li>Developed using Next.js and Framer-motion</li>
          <li>Created a responsive page from the Figma design</li>
          <li>
            Under development{" "}
            <a
              href="https://then0tbot.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#4f4f4f", textDecoration: "underline" }}
            >
              Link
            </a>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div className={styles.rectangle}></div>
          <h1>EDUCATION</h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <h3>Civil Engineering BSc</h3>
          <span className={styles.span}>2013 - 2017</span>
        </div>
        <ul className={styles.list}>
          <li>University of Tabriz</li>
        </ul>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <div className={styles.rectangle}></div>
          <h1>CERTIFICATES</h1>
        </div>
        <div style={{ display: "flex", marginTop: "20px", flexWrap: "wrap" }}>
          <a
            href="https://drive.google.com/file/d/1zK0I6izWqq9z_R8VSEUUaFs3TTfhC921/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>CS50's Understanding Technology - Harvard University</h5>
          </a>
          <a
            href="https://drive.google.com/file/d/1zK0I6izWqq9z_R8VSEUUaFs3TTfhC921/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>The Fundamentals of Digital Marketing - Google Inc</h5>
          </a>
          <a
            href="https://coursera.org/verify/9R5JKA7BXBDW
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>Meta Back-End Developer - Programming in Python</h5>
          </a>
        </div>
      </div>
    </>
  );
};

export default MainLeft;
