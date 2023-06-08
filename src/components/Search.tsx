import TextField from "@mui/material/TextField";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles.block}>
      <span className={styles.text}>Find a new Friend here :</span>
      <TextField
        id="outlined-basic"
        label="Search.."
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default Search;
