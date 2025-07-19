import { useSelector } from "react-redux";
import { selectIncomeExpenses } from "../../redux/dashboard/selectors.js";
import s from "./IncomeExpenses.module.css";

const IncomeExpenses = () => {
  const incomeExpenses = useSelector(selectIncomeExpenses);

  return (
    <table className={s.table}>
      <caption className={s.tableCaption}>Income/Expenses</caption>
      <thead>
        <tr>
          <th>Today</th>
        </tr>
      </thead>

      <tbody>
        {incomeExpenses.map(item => (
          <tr key={item._id}>
            <td className={s.status}>
              <span
                className={
                  (item.type === "Expense" && s.expense) ||
                  (item.type === "Income" && s.income) ||
                  (item.type === "Error" && s.error)
                }>
                {item.type}
              </span>
            </td>
            <td className={s.name}>{item.name}</td>
            <td
              className={`${s.price} ${
                (item.type === "Expense" && s.red) ||
                (item.type === "Income" && s.green) ||
                (item.type === "Error" && s.black)
              }`}>
              {item.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default IncomeExpenses;
