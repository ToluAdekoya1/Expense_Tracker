// import React from "react";
// import { useState } from "react";

import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props: any) {
  if (props.items.length === 0) {
    return (
      <h2 className="text-white font-bold items-center text-[1rem] pt-[1rem]">
        No Expense Found.
      </h2>
    );
  }
  return (
    <ul>
      {props.items.map((expense: any) => {
        return (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}
