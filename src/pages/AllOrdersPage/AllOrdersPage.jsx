import AllOrdersTable from '../../components/AllOrdersTable/AllOrdersTable.jsx';
import Container from '../../components/Container/Container.jsx';
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter.jsx';

const AllOrdersPage = () => {
  return (
    <main>
      <Container>
        <section>
          <UserNameFilter />
          <AllOrdersTable />
        </section>
      </Container>
    </main>
  );
};
export default AllOrdersPage;
