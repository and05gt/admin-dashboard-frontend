import { useDispatch } from "react-redux";
import AllOrdersTable from "../../components/AllOrdersTable/AllOrdersTable.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter.jsx";
import { useEffect } from "react";
import { fetchOrders } from "../../redux/orders/operations.js";
import s from "./AllOrdersPage.module.css";

const AllOrdersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <section className={s.ordersSection}>
      <UserNameFilter />
      <div className={s.tableWrapper}>
        <AllOrdersTable />
      </div>
      <Pagination />
    </section>
  );
};
export default AllOrdersPage;
