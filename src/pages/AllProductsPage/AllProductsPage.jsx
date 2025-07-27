import AllProductsTable from "../../components/AllProductsTable/AllProductsTable.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import ProductNameFilter from "../../components/ProductNameFilter/ProductNameFilter.jsx";
import sprite from "../../assets/sprite.svg";
import { useModal } from "../../components/ModalContext.jsx";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/products/operations.js";
import { setQueryParams } from "../../utils/setQueryParams.js";
import { selectTotalPages } from "../../redux/products/selectors.js";
import s from "./AllProductsPage.module.css";

const AllProductsPage = () => {
  const { openModal } = useModal();
  const dispatch = useDispatch();
  const [filterName, setFilterName] = useState("");
  const queryParams = setQueryParams(filterName);
  const totalPages = useSelector(selectTotalPages);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangePage = page => {
    setCurrentPage(page);
  };

  const handleChangeFilterName = value => {
    setFilterName(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(fetchProducts({ page: currentPage, queryParams }));
  }, [dispatch, currentPage, queryParams]);

  return (
    <section className={s.productsSection}>
      <div className={s.filterWrap}>
        <ProductNameFilter handleChangeFilterName={handleChangeFilterName} />
        <div className={s.btnWrapper}>
          <button
            className={s.btn}
            type="button"
            onClick={() =>
              openModal(<AddNewProduct currentPage={currentPage} />)
            }>
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
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
    </section>
  );
};
export default AllProductsPage;
