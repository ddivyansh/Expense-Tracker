import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editingState, setEditingState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const addHandler = () => {
    setEditingState(true);
  };
  const cancelHandler = () => {
    setEditingState(false);
  };
  return (
    <div className="new-expense">
      {!editingState && (
        <button onClick={addHandler}>
          Add Expense
        </button>
      )}
      {editingState && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={cancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
