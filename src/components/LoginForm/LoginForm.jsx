import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import sprite from "../../assets/sprite.svg";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    )
    .required("Email is required!"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required!"),
});

const LoginForm = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = data => {
    console.log(data);

    reset();
  };

  const passwordValue = watch("password");

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputWrapper}>
        <label className={s.label}>
          <input
            {...register("email")}
            type="text"
            className={s.input}
            placeholder="Email address"
          />
          {errors.email && <p className={s.error}>{errors.email?.message}</p>}
        </label>
        <label className={s.label}>
          <input
            {...register("password")}
            type={isVisiblePassword ? "text" : "password"}
            className={s.input}
            placeholder="Password"
          />
          {passwordValue && (
            <button
              className={`${s.togglePwdBtn}`}
              type="button"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
              {isVisiblePassword ? (
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-eye`}></use>
                </svg>
              ) : (
                <svg width={18} height={18}>
                  <use href={`${sprite}#icon-eye-off`}></use>
                </svg>
              )}
            </button>
          )}
          {errors.password && (
            <p className={s.error}>{errors.password?.message}</p>
          )}
        </label>
      </div>
      <button className={s.btn} type="submit">
        Log in
      </button>
    </form>
  );
};
export default LoginForm;
