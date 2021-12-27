/*  A component in React is just a Jasvascript function that returns HTML
    Only one root element is allowed in html code returned by functions component
*/
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title); // Should be used only in function components

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
