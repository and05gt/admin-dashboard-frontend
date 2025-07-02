import s from './AllOrdersTable.module.css';

const AllOrdersTable = () => {
  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>All orders</caption>
      <thead>
        <tr>
          <th>User Info</th>
          <th>Address</th>
          <th>Products</th>
          <th>Order date</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className={s.userInfo}>
            {' '}
            <div className={s.image}></div>
            Alex Shatov
          </td>
          <td>Mripur-1</td>
          <td>12</td>
          <td>July 31, 2023</td>
          <td>890.66</td>
          <td>
            <div className={`${s.status} ${s.completed}`}>Completed</div>
          </td>
        </tr>
        <tr>
          <td className={s.userInfo}>
            {' '}
            <div className={s.image}></div>
            Philip Harbach
          </td>
          <td>Dhonmondi</td>
          <td>19</td>
          <td>July 31, 2023</td>
          <td>340.16</td>
          <td>
            <div className={`${s.status} ${s.confirmed}`}>Confirmed</div>
          </td>
        </tr>
        <tr>
          <td className={s.userInfo}>
            {' '}
            <div className={s.image}></div>
            Mirko Fisuk
          </td>
          <td>Uttara-6</td>
          <td>09</td>
          <td>July 31, 2023</td>
          <td>530.76</td>
          <td>
            <div className={`${s.status} ${s.pending}`}>Pending</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default AllOrdersTable;
