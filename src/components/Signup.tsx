import TextField from "@mui/material/TextField";
import styles from "./Signup.module.scss";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.form}>
      <h2>Sign Up</h2>
      <Box
        className={styles.box}
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Repeat password"
          variant="outlined"
        />
        <button className={styles.button}>
          <span>Create account</span>
        </button>
        <Link to="/login" className={styles.text}>
          Already have an account?
        </Link>
      </Box>
    </div>
  );
};

export default Signup;
