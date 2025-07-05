import s from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <form className={s.form}>
      <div className={s.inputWrapper}>
        <input
          className={s.input}
          type="email"
          name="email"
          placeholder="Email address"
        />
        <input
          className={s.input}
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <button className={s.btn} type="submit">
        Log in
      </button>
    </form>
  );
};
export default LoginForm;
