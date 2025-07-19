import { useDispatch, useSelector } from "react-redux";
import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses.jsx";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers.jsx";
import Statistics from "../../components/Statistics/Statistics.jsx";
import { useEffect } from "react";
import { getDashboardData } from "../../redux/dashboard/operations.js";
import {
  selectIsError,
  selectIsLoading,
} from "../../redux/dashboard/selectors.js";
import s from "./DashboardPage.module.css";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);

  return (
    <>
      <section className={s.dashboardSection}>
        {isLoading && !isError && <h3>Loading...</h3>}
        <Statistics />
        <div className={s.tableWrapper}>
          <RecentCustomers />
          <IncomeExpenses />
        </div>
      </section>
    </>
  );
};
export default DashboardPage;
