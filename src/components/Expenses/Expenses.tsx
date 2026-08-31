import { useState } from "react";

import Card from "../UI/Card";
import ExpensesList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props: any) {
  const [filteredYear, setFilteredYear] = useState('2025');

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense: any) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses p-4 bg-[#1f1f1f] mx-auto my-8 w-[50rem] max-w-[95%]">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
}
