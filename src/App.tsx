import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

interface Expense {
  id: string;
  amount: string
  date: Date;
  title: string; 
}
function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]); // ->Initial state value
  const addExpenseDataHandler = (expense: Expense) => {
    setExpenses((PrevExpenses) => {
      return [expense, ...PrevExpenses];
    }); //Automatically recieves the previous state snapshot.
    console.log("In App.tsx");
    console.log(expense);
  };

  return (
    <div className="bigbox flex flex-col items-center justify-center min-h-screen px-[8%] py-8">
      <NewExpense onAddExpense={addExpenseDataHandler} />
      <div className="box space-y-4 w-full max-w-4xl py-8 px-4 dark:backdrop-blur-lg rounded-xl shadow-xl">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;
