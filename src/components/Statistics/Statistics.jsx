import sprite from '../../assets/sprite.svg';
import s from './Statistics.module.css';

const Statistics = () => {
  return (
    <ul className={s.statisticsList}>
      <li className={s.statisticsItem}>
        <div className={s.statItemTitle}>
          <svg className={s.statItemIcon} width={18} height={18}>
            <use href={`${sprite}#icon-coins`}></use>
          </svg>
          <p className={s.statItemText}>All products</p>
        </div>
        <p className={s.statItemValue}>8,430</p>
      </li>
      <li className={s.statisticsItem}>
        <div className={s.statItemTitle}>
          <svg className={s.statItemIcon} width={18} height={18}>
            <use href={`${sprite}#icon-coins`}></use>
          </svg>
          <p className={s.statItemText}>All suppliers</p>
        </div>
        <p className={s.statItemValue}>211</p>
      </li>
      <li className={s.statisticsItem}>
        <div className={s.statItemTitle}>
          <svg className={s.statItemIcon} width={18} height={18}>
            <use href={`${sprite}#icon-users`}></use>
          </svg>
          <p className={s.statItemText}>All customers</p>
        </div>
        <p className={s.statItemValue}>140</p>
      </li>
    </ul>
  );
};
export default Statistics;
