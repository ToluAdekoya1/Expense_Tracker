// import React from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props: any) {
  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense w-full max-w-4xl pb-10 pt-4">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
    </div>
  );
}
