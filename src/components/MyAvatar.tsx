import styles from "./MyAvatar.module.scss";

const MyAvatar = () => {
  return (
    <div className={styles.avatar}>
      <img
        style={{ width: "100px", height: "100px" }}
        src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg"
        alt="Photo"
      />
    </div>
  );
};

export default MyAvatar;
