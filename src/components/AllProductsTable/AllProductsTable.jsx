import sprite from '../../assets/sprite.svg';
import EditProductData from '../EditProductData/EditProductData.jsx';
import { useModal } from '../ModalContext.jsx';
import s from './AllProductsTable.module.css';

const AllProductsTable = () => {
  const { openModal } = useModal();

  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>All products</caption>
      <thead>
        <tr>
          <th>Product Info</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Suppliers</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Moringa</td>
          <td>Medicine</td>
          <td>12</td>
          <td>Square</td>
          <td>89.66</td>
          <td className={s.actionWrapper}>
            <button
              className={s.buttonEdit}
              onClick={() => openModal(<EditProductData />)}>
              <svg className={s.buttonEditIcon} width={16} height={16}>
                <use href={`${sprite}#icon-edit`}></use>
              </svg>
            </button>
            <button className={s.buttonTrash}>
              <svg className={s.buttonTrashIcon} width={16} height={16}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td>Antibiotic 250 mg</td>
          <td>Heart</td>
          <td>19</td>
          <td>Acme</td>
          <td>34.16</td>
          <td className={s.actionWrapper}>
            <button className={s.buttonEdit}>
              <svg className={s.buttonEditIcon} width={16} height={16}>
                <use href={`${sprite}#icon-edit`}></use>
              </svg>
            </button>
            <button className={s.buttonTrash}>
              <svg className={s.buttonTrashIcon} width={16} height={16}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </td>
        </tr>
        <tr>
          <td>Headache Relief</td>
          <td>Head</td>
          <td>09</td>
          <td>Beximco</td>
          <td>53.76</td>
          <td className={s.actionWrapper}>
            <button className={s.buttonEdit}>
              <svg className={s.buttonEditIcon} width={16} height={16}>
                <use href={`${sprite}#icon-edit`}></use>
              </svg>
            </button>
            <button className={s.buttonTrash}>
              <svg className={s.buttonTrashIcon} width={16} height={16}>
                <use href={`${sprite}#icon-trash`}></use>
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default AllProductsTable;
