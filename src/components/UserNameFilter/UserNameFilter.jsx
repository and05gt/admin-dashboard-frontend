import sprite from "../../assets/sprite.svg";
import { useForm } from "react-hook-form";
import s from "./UserNameFilter.module.css";

const UserNameFilter = ({ handleChangeFilterName }) => {
  const { register, handleSubmit, reset, watch } = useForm({
    mode: "onSubmit",
  });

  const query = watch("search");

  const onSubmit = () => {
    handleChangeFilterName(query);
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("search")}
        className={s.input}
        type="text"
        placeholder="User Name"
      />
      <button className={s.btn} type="submit">
        <svg className={s.iconBtn} width={14} height={14}>
          <use href={`${sprite}#icon-filter`}></use>
        </svg>
        Filter
      </button>
    </form>
  );
};
export default UserNameFilter;
