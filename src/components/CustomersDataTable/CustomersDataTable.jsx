import s from './CustomersDataTable.module.css';

const CustomersDataTable = () => {
  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>Customers Data</caption>
      <thead>
        <tr>
          <th>User Info</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Register date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className={s.userInfo}>
            {' '}
            <div className={s.image}></div>
            Alex Shatov
          </td>
          <td>alexshatov@gmail.com</td>
          <td>Mripur-1</td>
          <td>+8801736985253</td>
          <td>Aug 1, 2023</td>
        </tr>
        <tr>
          <td className={s.userInfo}>
            {' '}
            <div className={s.image}></div>
            Philip Harbach
          </td>
          <td>philip.h@gmail.com</td>
          <td>Dhonmondi</td>
          <td>+8801636985275</td>
          <td>Aug 1, 2023</td>
        </tr>
        <tr>
          <td className={s.userInfo}>
            {' '}
            <div className={s.image}></div>
            Mirko Fisuk
          </td>
          <td>mirkofisuk@gmail.com</td>
          <td>Uttara-6</td>
          <td>+8801336985214</td>
          <td>Aug 1, 2023</td>
        </tr>
      </tbody>
    </table>
  );
};
export default CustomersDataTable;
