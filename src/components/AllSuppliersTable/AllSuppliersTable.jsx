import sprite from '../../assets/sprite.svg';
import EditSupplierData from '../EditSupplierData/EditSupplierData.jsx';
import { useModal } from '../ModalContext.jsx';
import s from './AllSuppliersTable.module.css';

const AllSuppliersTable = () => {
  const { openModal } = useModal();

  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>All suppliers</caption>
      <thead>
        <tr>
          <th>Suppliers Info</th>
          <th>Address</th>
          <th>Company</th>
          <th>Delivery date</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Alex Shatov</td>
          <td>Mripur-1</td>
          <td>Square</td>
          <td>August 1, 2023</td>
          <td>6952.53</td>
          <td>
            <div className={s.statusActive}>Active</div>
          </td>
          <td>
            <button
              className={s.buttonEdit}
              onClick={() => openModal(<EditSupplierData />)}>
              <svg className={s.buttonEditIcon} width={14} height={14}>
                <use href={`${sprite}#icon-edit`}></use>
              </svg>
              Edit
            </button>
          </td>
        </tr>
        <tr>
          <td>Philip Harbach</td>
          <td>Dhonmondi</td>
          <td>Acme</td>
          <td>August 1, 2023</td>
          <td>8527.58</td>
          <td>
            <div className={s.statusActive}>Active</div>
          </td>
          <td>
            <button className={s.buttonEdit}>
              <svg className={s.buttonEditIcon} width={14} height={14}>
                <use href={`${sprite}#icon-edit`}></use>
              </svg>
              Edit
            </button>
          </td>
        </tr>
        <tr>
          <td>Burak Long</td>
          <td>Mirpur-12</td>
          <td>Uniliver</td>
          <td>August 1, 2023</td>
          <td>1736.90</td>
          <td>
            <div className={s.statusDeactive}>Deactive</div>
          </td>
          <td>
            <button className={s.buttonEdit}>
              <svg className={s.buttonEditIcon} width={14} height={14}>
                <use href={`${sprite}#icon-edit`}></use>
              </svg>
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default AllSuppliersTable;
