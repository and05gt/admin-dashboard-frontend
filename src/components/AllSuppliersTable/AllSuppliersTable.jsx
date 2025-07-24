import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import EditSupplierData from "../EditSupplierData/EditSupplierData.jsx";
import { useModal } from "../ModalContext.jsx";
import {
  selectIsError,
  selectIsLoading,
  selectSuppliers,
} from "../../redux/suppliers/selectors.js";
import s from "./AllSuppliersTable.module.css";

const AllSuppliersTable = () => {
  const { openModal } = useModal();
  const suppliers = useSelector(selectSuppliers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>{isError}</h3>}
      <table className={s.table}>
        <caption className={s.tableCaption}>All suppliers</caption>
        <thead>
          <tr>
            <th className={s.name}>Suppliers Info</th>
            <th className={s.address}>Address</th>
            <th className={s.company}>Company</th>
            <th className={s.date}>Delivery date</th>
            <th className={s.amount}>Amount</th>
            <th className={s.status}>Status</th>
            <th className={s.action}>Action</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier._id}>
              <td>{supplier.name}</td>
              <td>{supplier.address}</td>
              <td>{supplier.suppliers}</td>
              <td>{supplier.date}</td>
              <td>{supplier.amount}</td>
              <td>
                <div
                  className={`${
                    (supplier.status === "Active" && s.statusActive) ||
                    (supplier.status === "Deactive" && s.statusDeactive)
                  }`}>
                  {supplier.status}
                </div>
              </td>
              <td>
                <button
                  className={s.buttonEdit}
                  onClick={() =>
                    openModal(<EditSupplierData supplier={supplier} />)
                  }>
                  <svg className={s.buttonEditIcon} width={14} height={14}>
                    <use href={`${sprite}#icon-edit`}></use>
                  </svg>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default AllSuppliersTable;
