import styles from "./MyProfile.module.scss";
import Sidebar from "./Sidebar";
import MyPage from "./MyPage";

const MyProfile = () => {
  return (
    <div className={styles.box}>
      <Sidebar />
      <MyPage />
    </div>
  );
};

export default MyProfile;
