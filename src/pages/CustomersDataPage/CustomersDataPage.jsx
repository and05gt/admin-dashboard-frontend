import UserNameFilter from "../../components/UserNameFilter/UserNameFilter.jsx";
import CustomersDataTable from "../../components/CustomersDataTable/CustomersDataTable.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCustomers } from "../../redux/customers/operations.js";
import { setQueryParams } from "../../utils/setQueryParams.js";
import { selectTotalPages } from "../../redux/customers/selectors.js";
import s from "./CustomersDataPage.module.css";

const CustomersDataPage = () => {
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
    dispatch(fetchCustomers({ page: currentPage, queryParams }));
  }, [dispatch, currentPage, queryParams]);

  return (
    <section className={s.customersSection}>
      <UserNameFilter handleChangeFilterName={handleChangeFilterName} />
      <div className={s.tableWrapper}>
        <CustomersDataTable />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </section>
  );
};
export default CustomersDataPage;
