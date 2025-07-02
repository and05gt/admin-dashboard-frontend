import AllSuppliersTable from '../../components/AllSuppliersTable/AllSuppliersTable.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter.jsx';
import s from './AllSuppliersPage.module.css';

const AllSuppliersPage = () => {
  return (
    <section className={s.suppliersSection}>
      <div className={s.filterWrap}>
        <UserNameFilter />
        <button className={s.btn} type="button">
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
