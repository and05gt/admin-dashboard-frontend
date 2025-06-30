import AllProductsTable from '../../components/AllProductsTable/AllProductsTable.jsx';
import Container from '../../components/Container/Container.jsx';
import ProductNameFilter from '../../components/ProductNameFilter/ProductNameFilter.jsx';

const AllProductsPage = () => {
  return (
    <main>
      <Container>
        <section>
          <ProductNameFilter />
          <AllProductsTable />
        </section>
      </Container>
    </main>
  );
};
export default AllProductsPage;
