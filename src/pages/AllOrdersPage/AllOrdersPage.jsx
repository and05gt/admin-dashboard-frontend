import AllOrdersTable from '../../components/AllOrdersTable/AllOrdersTable.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter.jsx';
import s from './AllOrdersPage.module.css';

const AllOrdersPage = () => {
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
