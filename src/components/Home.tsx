import styles from "./Home.module.scss";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div className={styles.box}>
      <Sidebar />
    </div>
  );
};

export default Home;
