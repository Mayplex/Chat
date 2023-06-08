import Search from "./Search";
import styles from "./FriendList.module.scss";
import Recomendations from "./Recomendations";
import { useState } from "react";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  return (
    <div className={styles.block}>
      <Search />
      <Recomendations />
      <ul className={styles.list}>
        <h2>My Friends</h2>
        <li>user</li>
        <li>user</li>
        <li>user</li>
        <li>user</li>
        <li>user</li>
      </ul>
    </div>
  );
};

export default FriendsList;
