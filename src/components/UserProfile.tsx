import Sidebar from "./Sidebar";
import UserPage from "./UserPage";
import s from "./UserProfile.module.scss";

const UserProfile = () => {
  return (
    <div className={s.box}>
      <Sidebar />
      <UserPage />
    </div>
  );
};

export default UserProfile;
