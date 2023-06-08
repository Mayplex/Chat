import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  password: string;
  email: string;
}

const Login = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.box}>
      <h2>
        Talkative
        <img
          style={{ width: "50px", height: "50px" }}
          src="https://cdn-icons-png.flaticon.com/128/1246/1246332.png"
          alt="Logo"
        />
      </h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "This field is required!",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please,enter a valid email!",
            },
          }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="E-Mail"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "This field is required!",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message: "Please,enter a valid password!",
            },
            maxLength: {
              value: 15,
              message: "Password is too long!",
            },
          }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />

        <button type="submit" className={styles.button}>
          <span>Log in </span>
        </button>
        <Link to="/signup" className={styles.text}>
          Don't have an account yet?
        </Link>
      </form>
    </div>
  );
};

export default Login;
