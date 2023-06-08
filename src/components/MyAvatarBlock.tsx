import Avatar from "./MyAvatar";
import styles from "./MyAvatarBlock.module.scss";
import Online from "./Online";

const MyAvatarBlock = () => {
  return (
    <div className={styles.theme}>
      <Avatar />
      <Online />
    </div>
  );
};

export default MyAvatarBlock;
