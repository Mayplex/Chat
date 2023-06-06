import styles from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2>
        Talkative{" "}
        <img
          style={{ width: "30px", height: "30px" }}
          src="https://cdn-icons-png.flaticon.com/128/1246/1246332.png"
          alt="Logo"
        />
      </h2>
      <ul className={styles.nav}>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
            alt="Profile"
          />
          Profile
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
            alt="Profile"
          />
          Messages
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
            alt="Profile"
          />
          Friends
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
            alt="Profile"
          />
          Video
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
            alt="Profile"
          />
          Music
        </Link>
        <Link to="/" className={styles.link}>
          <img
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
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
