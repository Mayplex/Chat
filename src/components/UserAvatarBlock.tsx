import Online from "./Online";
import UserAvatar from "./UsersAvatar";
import s from "./UserAvatarBlock.module.scss";

const UserAvatarBlock = () => {
  return (
    <div className={s.theme}>
      <UserAvatar />
      <Online />
    </div>
  );
};

export default UserAvatarBlock;
