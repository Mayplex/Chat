import TextField from "@mui/material/TextField";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

interface IFormInputs {
  firstname: string;
  secondname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    defaultValues: { firstname: "", secondname: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.box}>
      <h2>Sign Up</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstname"
          control={control}
          rules={{
            required: "This field is required!",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "Please,enter a valid value!",
            },
          }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="FirstName"
              variant="outlined"
              error={!!errors.firstname}
              helperText={errors.firstname?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="secondname"
          control={control}
          rules={{
            required: "This field is required!",
            pattern: {
              value: /^[a-z ,.'-]+$/i,
              message: "Please,enter a valid value!",
            },
          }}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="SecondName"
              variant="outlined"
              error={!!errors.secondname}
              helperText={errors.secondname?.message}
              {...field}
            />
          )}
        />
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
          <span>Create account</span>
        </button>
        <Link to="/login" className={styles.text}>
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default Signup;
