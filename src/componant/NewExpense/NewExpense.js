import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);

  const handleSavedExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };

  const handleAddingExpense = () => {
    setAddingExpense(true);
  };

  const handlestopAddingExpense = () => {
    setAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!addingExpense && (
        <button onClick={handleAddingExpense}>Add New Expense</button>
      )}
      {addingExpense && (
        <ExpenseForm
          onSaveExpenseData={handleSavedExpenseData}
          onCancle={handlestopAddingExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
