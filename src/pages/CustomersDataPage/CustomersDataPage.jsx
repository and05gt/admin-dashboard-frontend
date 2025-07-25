import UserNameFilter from "../../components/UserNameFilter/UserNameFilter.jsx";
import CustomersDataTable from "../../components/CustomersDataTable/CustomersDataTable.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCustomers } from "../../redux/customers/operations.js";
import s from "./CustomersDataPage.module.css";

const CustomersDataPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <section className={s.customersSection}>
      <UserNameFilter />
      <div className={s.tableWrapper}>
        <CustomersDataTable />
      </div>
      <Pagination />
    </section>
  );
};
export default CustomersDataPage;
