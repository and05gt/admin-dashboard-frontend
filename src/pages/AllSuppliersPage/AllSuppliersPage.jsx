import { useDispatch } from "react-redux";
import AddNewSupplier from "../../components/AddNewSupplier/AddNewSupplier.jsx";
import AllSuppliersTable from "../../components/AllSuppliersTable/AllSuppliersTable.jsx";
import { useModal } from "../../components/ModalContext.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter.jsx";
import s from "./AllSuppliersPage.module.css";
import { useEffect } from "react";
import { getSuppliers } from "../../redux/suppliers/operations.js";

const AllSuppliersPage = () => {
  const { openModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSuppliers());
  }, [dispatch]);

  return (
    <section className={s.suppliersSection}>
      <div className={s.filterWrap}>
        <UserNameFilter />
        <button
          className={s.btn}
          type="button"
          onClick={() => openModal(<AddNewSupplier />)}>
          Add a new suppliers
        </button>
      </div>
      <div className={s.tableWrapper}>
        <AllSuppliersTable />
      </div>
      <Pagination />
    </section>
  );
};
export default AllSuppliersPage;
