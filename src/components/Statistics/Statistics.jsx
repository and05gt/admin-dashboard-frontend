import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import {
  selectAllCustomers,
  selectAllProducts,
  selectAllSuppliers,
} from "../../redux/dashboard/selectors.js";
import s from "./Statistics.module.css";

const Statistics = () => {
  const allProducts = useSelector(selectAllProducts);
  const allSuppliers = useSelector(selectAllSuppliers);
  const allCustomers = useSelector(selectAllCustomers);

  return (
    <ul className={s.statisticsList}>
      <li className={s.statisticsItem}>
        <div className={s.statItemTitle}>
          <svg className={s.statItemIcon} width={18} height={18}>
            <use href={`${sprite}#icon-coins`}></use>
          </svg>
          <p className={s.statItemText}>All products</p>
        </div>
        <p className={s.statItemValue}>{allProducts}</p>
      </li>
      <li className={s.statisticsItem}>
        <div className={s.statItemTitle}>
          <svg className={s.statItemIcon} width={18} height={18}>
            <use href={`${sprite}#icon-coins`}></use>
          </svg>
          <p className={s.statItemText}>All suppliers</p>
        </div>
        <p className={s.statItemValue}>{allSuppliers}</p>
      </li>
      <li className={s.statisticsItem}>
        <div className={s.statItemTitle}>
          <svg className={s.statItemIcon} width={18} height={18}>
            <use href={`${sprite}#icon-users`}></use>
          </svg>
          <p className={s.statItemText}>All customers</p>
        </div>
        <p className={s.statItemValue}>{allCustomers}</p>
      </li>
    </ul>
  );
};
export default Statistics;
