import styles from "./Login.module.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

const Login = () => {
  return (
    <div className={styles.form}>
      <h2>
        Talkative{" "}
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://cdn-icons-png.flaticon.com/128/1246/1246332.png"
          alt="Logo"
        />
      </h2>

      <Box
        className={styles.box}
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
      >
        <TextField
          InputProps={{
            style: { borderColor: "green" },
          }}
          id="outlined-basic"
          label="E-Mail"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />

        <button className={styles.button}>
          <span>Log in </span>
        </button>
        <Link to="/signup" className={styles.text}>
          Don't have an account yet?
        </Link>
      </Box>
    </div>
  );
};

export default Login;
