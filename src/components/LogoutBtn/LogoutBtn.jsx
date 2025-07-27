import { useDispatch } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { logOut } from "../../redux/auth/operations.js";
import s from "./LogoutBtn.module.css";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <button className={s.logoutBtn} onClick={() => dispatch(logOut())}>
      <svg className={s.logoutBtnIcon} width={16} height={16}>
        <use href={`${sprite}#icon-logout`}></use>
      </svg>
    </button>
  );
};
export default LogoutBtn;
