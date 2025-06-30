import s from './RecentCustomers.module.css';

const RecentCustomers = () => {
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
        <tr>
          <td className={s.name}>
            {' '}
            <div className={s.image}></div>
            Alex Shatov
          </td>
          <td>alexshatov@gmail.com</td>
          <td>2,890.66</td>
        </tr>
        <tr>
          <td className={s.name}>
            {' '}
            <div className={s.image}></div>
            Philip Harbach
          </td>
          <td>philip.h@gmail.com</td>
          <td>2,767.04</td>
        </tr>
        <tr>
          <td className={s.name}>
            {' '}
            <div className={s.image}></div>
            Mirko Fisuk
          </td>
          <td>mirkofisuk@gmail.com</td>
          <td>2,996.00</td>
        </tr>
      </tbody>
    </table>
  );
};
export default RecentCustomers;
