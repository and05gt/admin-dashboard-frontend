import sprite from '../../assets/sprite.svg';
import s from './UserNameFilter.module.css';

const UserNameFilter = () => {
  return (
    <form className={s.form}>
      <input
        className={s.input}
        type="text"
        name="name"
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
