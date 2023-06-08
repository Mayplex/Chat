import styles from "./UsersAvatar.module.scss";

const UserAvatar = (props: any) => {
  return (
    <div className={styles.block}>
      <div className={styles.img}>
        <img
          style={{ width: "70px", height: "70px" }}
          src={props.picture}
          alt="Photo"
        />
      </div>
      {props.firstName}
      {props.lastName}
    </div>
  );
};

export default UserAvatar;
