import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === selectedYear
  );

  const selectionHandler = (valueSelected) => {
    setSelectedYear(valueSelected);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSelection={selectionHandler} />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses = {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
