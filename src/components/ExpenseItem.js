/*  A component in React is just a Jasvascript function that returns HTML
    Only one root element is allowed in html code returned by functions component
*/
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
