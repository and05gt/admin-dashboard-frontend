import AllOrdersTable from '../../components/AllOrdersTable/AllOrdersTable.jsx';
import Container from '../../components/Container/Container.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter.jsx';
import s from './AllOrdersPage.module.css';

const AllOrdersPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <section className={s.allOrdersSection}>
          <UserNameFilter />
          <div className={s.tableWrapper}>
            <AllOrdersTable />
          </div>
          <Pagination />
        </section>
      </Container>
    </main>
  );
};
export default AllOrdersPage;
