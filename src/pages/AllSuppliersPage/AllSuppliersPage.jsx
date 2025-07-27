import { useDispatch, useSelector } from "react-redux";
import AddNewSupplier from "../../components/AddNewSupplier/AddNewSupplier.jsx";
import AllSuppliersTable from "../../components/AllSuppliersTable/AllSuppliersTable.jsx";
import { useModal } from "../../components/ModalContext.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter.jsx";
import { useEffect, useState } from "react";
import { fetchSuppliers } from "../../redux/suppliers/operations.js";
import { setQueryParams } from "../../utils/setQueryParams.js";
import { selectTotalPages } from "../../redux/suppliers/selectors.js";
import s from "./AllSuppliersPage.module.css";

const AllSuppliersPage = () => {
  const { openModal } = useModal();
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
    dispatch(fetchSuppliers({ page: currentPage, queryParams }));
  }, [dispatch, currentPage, queryParams]);

  return (
    <section className={s.suppliersSection}>
      <div className={s.filterWrap}>
        <UserNameFilter handleChangeFilterName={handleChangeFilterName} />
        <button
          className={s.btn}
          type="button"
          onClick={() =>
            openModal(<AddNewSupplier currentPage={currentPage} />)
          }>
          Add a new suppliers
        </button>
      </div>
      <div className={s.tableWrapper}>
        <AllSuppliersTable />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </section>
  );
};
export default AllSuppliersPage;
