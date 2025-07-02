import IncomeExpenses from '../../components/IncomeExpenses/IncomeExpenses.jsx';
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers.jsx';
import Statistics from '../../components/Statistics/Statistics.jsx';
import s from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <section className={s.dashboardSection}>
      <Statistics />
      <div className={s.tableWrapper}>
        <RecentCustomers />
        <IncomeExpenses />
      </div>
    </section>
  );
};
export default DashboardPage;
