import { useSelector } from "react-redux";
import { selectLastCustomers } from "../../redux/dashboard/selectors.js";
import s from "./RecentCustomers.module.css";

const RecentCustomers = () => {
  const lastCustomers = useSelector(selectLastCustomers);

  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>Recent Customers</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Spent</th>
        </tr>
      </thead>

      <tbody>
        {lastCustomers.map(customer => (
          <tr key={customer._id}>
            <td className={s.name}>
              <img
                className={s.image}
                src={customer.photo}
                alt="Customer Image"
              />
              {customer.name}
            </td>
            <td className={s.email}>{customer.email}</td>
            <td className={s.spent}>{customer.spent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default RecentCustomers;
