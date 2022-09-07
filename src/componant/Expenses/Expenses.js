import React, { useState } from "react";
import "./Expenses.css";
import Card from "../Ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("Select");

  const handleChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const getfilteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={handleChangeFilter}
      />
      <ExpensesList items={getfilteredExpenses}/>
      
    </Card>
  );
}

export default Expenses;
