import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserAvatar from "./UsersAvatar";
import styles from "./Recomendations.module.scss";

const Recomendations = () => {
  const token = "6480c00c2ed019d290093401";
  const headers = {
    "app-id": token,
  };
  const [users, setUsers] = useState([]);

  const GetUsers = async () => {
    const response = await axios.get(
      "https://dummyapi.io/data/v1/user?limit=7",
      { headers }
    );
    setUsers(response.data.data);
  };

  useEffect(() => {
    GetUsers();
  }, []);

  return (
    <div className={styles.block}>
      <h2 className={styles.text}>Recomendations</h2>

      <ul className={styles.list}>
        {users &&
          users.map((user: any) => (
            <Link to="/user" key={user.id} className={styles.link}>
              <UserAvatar
                picture={user.picture}
                firstName={user.firstName}
                lastName={user.lastName}
              />
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Recomendations;
