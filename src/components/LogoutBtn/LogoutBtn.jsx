import sprite from '../../assets/sprite.svg';
import s from './LogoutBtn.module.css';

const LogoutBtn = () => {
  return (
    <button className={s.logoutBtn}>
      <svg className={s.logoutBtnIcon} width={16} height={16}>
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
    </button>
  );
};
export default LogoutBtn;
