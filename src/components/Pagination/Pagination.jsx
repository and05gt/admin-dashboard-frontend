import clsx from "clsx";
import s from "./Pagination.module.css";

const Pagination = ({ totalPages, currentPage, handleChangePage }) => {
  return (
    totalPages > 1 && (
      <ul className={s.paginationList}>
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          return (
            <li className={s.paginationItem} key={page}>
              <button
                className={clsx(s.btn, page === currentPage && s.active)}
                onClick={() => handleChangePage(page)}></button>
            </li>
          );
        })}
      </ul>
    )
  );
};
export default Pagination;
