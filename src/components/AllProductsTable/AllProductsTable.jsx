import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import EditProductData from "../EditProductData/EditProductData.jsx";
import { useModal } from "../ModalContext.jsx";
import {
  selectIsError,
  selectIsLoading,
  selectProducts,
} from "../../redux/products/selectors.js";
import { deleteProduct } from "../../redux/products/operations.js";
import s from "./AllProductsTable.module.css";

const AllProductsTable = () => {
  const { openModal } = useModal();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>{isError}</h3>}
      <table className={s.table}>
        <caption className={s.tableCaption}>All products</caption>
        <thead>
          <tr>
            <th className={s.name}>Product Info</th>
            <th className={s.category}>Category</th>
            <th className={s.stock}>Stock</th>
            <th className={s.suppliers}>Suppliers</th>
            <th className={s.price}>Price</th>
            <th className={s.action}>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>{product.suppliers}</td>
              <td>{product.price}</td>
              <td className={s.actionWrapper}>
                <button
                  className={s.buttonEdit}
                  onClick={() =>
                    openModal(<EditProductData product={product} />)
                  }>
                  <svg className={s.buttonEditIcon} width={16} height={16}>
                    <use href={`${sprite}#icon-edit`}></use>
                  </svg>
                </button>
                <button
                  className={s.buttonTrash}
                  onClick={() => dispatch(deleteProduct(product._id))}>
                  <svg className={s.buttonTrashIcon} width={16} height={16}>
                    <use href={`${sprite}#icon-trash`}></use>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default AllProductsTable;
