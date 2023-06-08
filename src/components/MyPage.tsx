import MyAvatarBlock from "./MyAvatarBlock";
import MyInfoBlock from "./MyInfoBlock";
import styles from "./MyPage.module.scss";

const MyPage = () => {
  return (
    <div className={styles.info}>
      <MyAvatarBlock />
      <MyInfoBlock />
    </div>
  );
};

export default MyPage;
