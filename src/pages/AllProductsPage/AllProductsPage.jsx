import AllProductsTable from '../../components/AllProductsTable/AllProductsTable.jsx';
import Container from '../../components/Container/Container.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import ProductNameFilter from '../../components/ProductNameFilter/ProductNameFilter.jsx';
import sprite from '../../assets/sprite.svg';
import s from './AllProductsPage.module.css';

const AllProductsPage = () => {
  return (
    <main className={s.main}>
      <Container>
        <section className={s.allProductsSection}>
          <div className={s.filterWrap}>
            <ProductNameFilter />
            <div className={s.btnWrapper}>
              <button className={s.btn} type="button">
                <svg className={s.btnIcon} width={16} height={16}>
                  <use href={`${sprite}#icon-plus`}></use>
                </svg>
              </button>
              <p className={s.btnText}>Add a new product</p>
            </div>
          </div>
          <div className={s.tableWrapper}>
            <AllProductsTable />
          </div>
          <Pagination />
        </section>
      </Container>
    </main>
  );
};
export default AllProductsPage;
