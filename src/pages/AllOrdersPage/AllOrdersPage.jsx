import { useDispatch, useSelector } from "react-redux";
import AllOrdersTable from "../../components/AllOrdersTable/AllOrdersTable.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter.jsx";
import { useEffect, useState } from "react";
import { fetchOrders } from "../../redux/orders/operations.js";
import { setQueryParams } from "../../utils/setQueryParams.js";
import { selectTotalPages } from "../../redux/orders/selectors.js";
import s from "./AllOrdersPage.module.css";

const AllOrdersPage = () => {
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState("");
  const queryParams = setQueryParams(filterName);
  const totalPages = useSelector(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  const handleChangeFilterName = value => {
    setFilterName(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(fetchOrders({ page: currentPage, queryParams }));
  }, [dispatch, currentPage, queryParams]);

  return (
    <section className={s.ordersSection}>
      <UserNameFilter handleChangeFilterName={handleChangeFilterName} />
      <div className={s.tableWrapper}>
        <AllOrdersTable />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </section>
  );
};
export default AllOrdersPage;
