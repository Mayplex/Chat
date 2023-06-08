import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>
        Talkative
        <img
          style={{ width: "30px", height: "30px" }}
          src="https://cdn-icons-png.flaticon.com/128/1246/1246332.png"
          alt="Logo"
        />
      </h2>
      <ul className={styles.nav}>
        <Link to="/profile/me" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
            alt="Profile"
          />
          Profile
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/542/542638.png"
            alt="Profile"
          />
          Messages
        </Link>
        <Link to="/friends" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/880/880594.png"
            alt="Profile"
          />
          Friends
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/3024/3024584.png"
            alt="Profile"
          />
          Video
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/2972/2972365.png"
            alt="Profile"
          />
          Music
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/563/563541.png"
            alt="Profile"
          />
          Settings
        </Link>
      </ul>
      <Link to="/login" className={styles.button}>
        <span>Log out</span>
      </Link>
    </div>
  );
};

export default Sidebar;
