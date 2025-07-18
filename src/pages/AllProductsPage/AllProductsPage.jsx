import AllProductsTable from '../../components/AllProductsTable/AllProductsTable.jsx';
import Pagination from '../../components/Pagination/Pagination.jsx';
import ProductNameFilter from '../../components/ProductNameFilter/ProductNameFilter.jsx';
import sprite from '../../assets/sprite.svg';
import s from './AllProductsPage.module.css';
import { useModal } from '../../components/ModalContext.jsx';
import AddNewProduct from '../../components/AddNewProduct/AddNewProduct.jsx';

const AllProductsPage = () => {
  const { openModal } = useModal();

  return (
    <section className={s.productsSection}>
      <div className={s.filterWrap}>
        <ProductNameFilter />
        <div className={s.btnWrapper}>
          <button
            className={s.btn}
            type="button"
            onClick={() => openModal(<AddNewProduct />)}>
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
  );
};
export default AllProductsPage;
