import styles from "./MyAvatar.module.scss";

const MyAvatar = () => {
  const storedData = sessionStorage.getItem("userData");
  const userData = storedData !== null ? JSON.parse(storedData) : null;

  return (
    <div className={styles.block}>
      <div className={styles.avatar}>
        <img
          style={{ width: "100px", height: "100px" }}
          src="https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg"
          alt="Photo"
        />
      </div>
      <span style={{ fontSize: "22px" }}>
        {userData.firstname + " " + userData.secondname}
      </span>
    </div>
  );
};

export default MyAvatar;
