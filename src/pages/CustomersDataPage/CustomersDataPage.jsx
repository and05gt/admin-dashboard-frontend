import UserNameFilter from '../../components/UserNameFilter/UserNameFilter.jsx';
import CustomersDataTable from '../../components/CustomersDataTable/CustomersDataTable.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import s from './CustomersDataPage.module.css';

const CustomersDataPage = () => {
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
