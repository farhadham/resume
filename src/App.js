import styles from "./App.module.scss";
import TitleContainer from "./components/TitleContainer/TitleContainer";
import Summary from "./components/Summary/Summary";
import MainLeft from "./components/MainLeft/MainLeft";
import MainRight from "./components/Right/MainRight";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.paper}>
        <TitleContainer />
        <Summary />
        <div className={styles.main}>
          <MainLeft />
          <MainRight />
        </div>
        {/* <a href="https://farhadf.com/cv.pdf">
          <button>Download PDF</button>
        </a> */}
      </div>
    </div>
  );
}

export default App;
