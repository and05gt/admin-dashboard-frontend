import s from './Pagination.module.css';

const Pagination = () => {
  return (
    <ul className={s.paginationList}>
      <li className={s.paginationItem}>
        <button className={s.active} type="button"></button>
      </li>
      <li className={s.paginationItem}>
        <button className={s.btn} type="button"></button>
      </li>
      <li className={s.paginationItem}>
        <button className={s.btn} type="button"></button>
      </li>
      <li className={s.paginationItem}>
        <button className={s.btn} type="button"></button>
      </li>
      <li className={s.paginationItem}>
        <button className={s.btn} type="button"></button>
      </li>
    </ul>
  );
};
export default Pagination;
