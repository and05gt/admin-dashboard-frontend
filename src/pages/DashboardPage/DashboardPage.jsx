import Container from '../../components/Container/Container.jsx';
import IncomeExpenses from '../../components/IncomeExpenses/IncomeExpenses.jsx';
import RecentCustomers from '../../components/RecentCustomers/RecentCustomers.jsx';
import Statistics from '../../components/Statistics/Statistics.jsx';
import s from './DashboardPage.module.css';

const DashboardPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <section className={s.dashboardSection}>
          <Statistics />
          <div className={s.tableWrapper}>
            <RecentCustomers />
            <IncomeExpenses />
          </div>
        </section>
      </Container>
    </main>
  );
};
export default DashboardPage;
