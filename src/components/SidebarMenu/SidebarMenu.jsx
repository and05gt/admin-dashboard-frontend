import { NavLink } from "react-router-dom";
import clsx from "clsx";
import sprite from "../../assets/sprite.svg";
import s from "./SidebarMenu.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const SidebarMenu = () => {
  return (
    <nav className={s.navList}>
      <NavLink to="/dashboard" className={buildLinkClass}>
        <svg width={14} height={14} className={s.navIcon}>
          <use href={`${sprite}#icon-dashboard`}></use>
        </svg>
      </NavLink>
      <NavLink to="/orders" className={buildLinkClass}>
        <svg width={14} height={14} className={s.navIcon}>
          <use href={`${sprite}#icon-shopping-cart`}></use>
        </svg>
      </NavLink>
      <NavLink to="/products" className={buildLinkClass}>
        <svg width={14} height={14} className={s.navIcon}>
          <use href={`${sprite}#icon-flask`}></use>
        </svg>
      </NavLink>
      <NavLink to="/suppliers" className={buildLinkClass}>
        <svg width={14} height={14} className={s.navIcon}>
          <use href={`${sprite}#icon-local-pharmacy`}></use>
        </svg>
      </NavLink>
      <NavLink to="/customers" className={buildLinkClass}>
        <svg width={14} height={14} className={s.navIcon}>
          <use href={`${sprite}#icon-users-2`}></use>
        </svg>
      </NavLink>
    </nav>
  );
};
export default SidebarMenu;
