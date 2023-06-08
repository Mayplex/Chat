import FriendsList from "./FriendList";
import styles from "./FriendsBlock.module.scss";

import Sidebar from "./Sidebar";
import { useState } from "react";

const FriendsBlock = () => { 

  return (
    <div className={styles.box}>
      <Sidebar />      
      <FriendsList />
    </div>
  );
};

export default FriendsBlock;
