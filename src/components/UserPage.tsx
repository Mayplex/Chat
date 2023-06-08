import UserAvatarBlock from "./UserAvatarBlock";
import UserInfoBlock from "./UserInfoBlock";
import s from "./UserPage.module.scss";

const UserPage = () => {
  return (
    <div className={s.info}>
      <UserAvatarBlock />
      <UserInfoBlock />
    </div>
  );
};

export default UserPage;
