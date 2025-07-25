import { useSelector } from "react-redux";
import {
  selectCustomers,
  selectIsError,
  selectIsLoading,
} from "../../redux/customers/selectors.js";
import s from "./CustomersDataTable.module.css";

const CustomersDataTable = () => {
  const customers = useSelector(selectCustomers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>{isError}</h3>}
      <table className={s.table}>
        <caption className={s.tableCaption}>Customers Data</caption>
        <thead>
          <tr>
            <th className={s.name}>User Info</th>
            <th className={s.email}>Email</th>
            <th className={s.address}>Address</th>
            <th className={s.phone}>Phone</th>
            <th className={s.date}>Register date</th>
          </tr>
        </thead>

        <tbody>
          {customers.map(customer => (
            <tr key={customer._id}>
              <td className={s.userInfo}>
                <img
                  className={s.image}
                  src={customer.photo}
                  alt="Customer Image"
                />
                {customer.name}
              </td>
              <td className={s.customerEmail}>{customer.email}</td>
              <td>{customer.address}</td>
              <td>{customer.phone}</td>
              <td>{customer.register_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default CustomersDataTable;
