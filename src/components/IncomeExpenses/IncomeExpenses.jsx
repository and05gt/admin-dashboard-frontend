import s from './IncomeExpenses.module.css';

const IncomeExpenses = () => {
  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>Income/Expenses</caption>
      <thead>
        <tr>
          <th>Today</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className={s.status}>
            <span className={s.expense}>Expense</span>
          </td>
          <td className={s.name}>Qonto billing</td>
          <td className={`${s.price} ${s.red}`}>-49.88</td>
        </tr>
        <tr>
          <td className={s.status}>
            <span className={s.income}>Income</span>
          </td>
          <td className={s.name}>Cruip.com Market Ltd 70 Wilson St London</td>
          <td className={`${s.price} ${s.green}`}>+249.88</td>
        </tr>
        <tr>
          <td className={s.status}>
            <span className={s.error}>Error</span>
          </td>
          <td className={s.name}>App.com Market Ltd 70 Wilson St London</td>
          <td className={`${s.price} ${s.black}`}>+99.99</td>
        </tr>
        <tr>
          <td className={s.status}>
            <span className={s.income}>Income</span>
          </td>
          <td className={s.name}>Market Cap Ltd</td>
          <td className={`${s.price} ${s.green}`}>+1,200.88</td>
        </tr>
      </tbody>
    </table>
  );
};
export default IncomeExpenses;
