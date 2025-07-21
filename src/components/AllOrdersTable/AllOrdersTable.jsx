import { useSelector } from "react-redux";
import {
  selectIsError,
  selectIsLoading,
  selectOrders,
} from "../../redux/orders/selectors.js";
import s from "./AllOrdersTable.module.css";

const AllOrdersTable = () => {
  const orders = useSelector(selectOrders);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return (
    <>
      {isLoading && !isError && <h3>Loading...</h3>}
      {isError && <h3>{isError}</h3>}
      <table className={s.table}>
        <caption className={s.tableCaption}>All orders</caption>
        <thead>
          <tr>
            <th className={s.userInfo}>User Info</th>
            <th className={s.address}>Address</th>
            <th className={s.products}>Products</th>
            <th className={s.order_date}>Order date</th>
            <th className={s.price}>Price</th>
            <th className={s.status}>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td className={s.userInfo}>
                <img className={s.image} src={order.photo} alt="Order image" />
                {order.name}
              </td>
              <td className={s.address}>{order.address}</td>
              <td>{order.products}</td>
              <td>{order.order_date}</td>
              <td>{order.price}</td>
              <td>
                <div
                  className={`${s.statusBadge} ${
                    (order.status === "Completed" && s.completed) ||
                    (order.status === "Confirmed" && s.confirmed) ||
                    (order.status === "Pending" && s.pending) ||
                    (order.status === "Cancelled" && s.cancelled) ||
                    (order.status === "Processing" && s.processing)
                  }`}>
                  {order.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default AllOrdersTable;
