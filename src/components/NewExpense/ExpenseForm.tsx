// import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
//CTP- child to parent component communication
export default function ExpenseForm(props: any) {
  //The props parameter here is as a result of CTP
  //Tracks what the user types into each input field

  const [enteredName, setEnteredName] = useState(""); //enteredName - stores the value of the title input
  const [enteredAmount, setEnteredAmount] = useState(""); //enteredAmount - stores the value of the amount input (as a string)
  const [enteredDate, setEnteredDate] = useState(""); //enteredDate - stores the value of the date input
  const [showForm, setShowForm] = useState(false);

  //CHANGE HANDLERS: runs every time a user types into an input field.
  // They update the corresponding state variable with the new value.
  //Title click handler
  const nameClickHandler = (event: { target: { value: string } }) => {
    setEnteredName(event.target.value); //Updates enteredName
  };

  //Amount click handler
  const amountClickHandler = (event: { target: { value: string } }) => {
    // const numericValue = +event.target.value;
    setEnteredAmount(event.target.value); //Updates enteredAmount
  };

  //Date click handler
  const dateClickHandler = (event: { target: { value: string } }) => {
    setEnteredDate(event.target.value); //Updates enteredDate
  };

  const submitHandler = (event: any) => {
    //this function runs when the form is submitted
    event.preventDefault(); //stops the browser from reloading the page (the default behavior for form submission)
    const expenseData = {
      //saves the user input to the console. This object contains the final values from the state.
      name: enteredName,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData); //clears the user input from the UI. In a real app,
    // this would be replacedwith a function(passed down via props) that sends this data to parent component.
    props.onSaveExpenseData(expenseData); //Final step of the CTP
    setEnteredName("");
    setEnteredAmount("");
    setEnteredDate("");
    setShowForm(false);
  };

  const cancelHandler = () => {
    //resets the form fields
    setEnteredName("");
    setEnteredAmount("");
    setEnteredDate("");
    //Hide the form
    setShowForm(false);
  };

  if (!showForm) {
    return (
      <div
        className="expense_form-noShow flex flex-col gap-4 space-y-4 px-[4%] py-6 dark:backdrop-blur-lg 
       rounded-xl shadow-xl pb-6"
      >
        {" "}
        <button className="active2" onClick={() => setShowForm(true)}>
          Add New Expense
        </button>
      </div>
    );
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-4 space-y-4 px-[4%] py-6 dark:backdrop-blur-lg 
       rounded-xl shadow-xl pb-6"
    >
      <div className="new-expense_controls">
        <div className="md:flex md:gap-8">
          <div className="new-expense_control pb-6 w-full">
            <label htmlFor="title">Title: </label>
            <input
              className="w-full p-2"
              placeholder="e.g. Groceries"
              type="text"
              value={enteredName} //this sets the value displayed in the input field to be whatever is currently stord in the react state.
              onChange={nameClickHandler} //Whenever the user types anything, this event fires and calls the handler function, which updates the react state.
            />
          </div>
          <div className="new-expense_control pb-6 w-full">
            <label htmlFor="amount">Amount: </label>
            <input
              className="w-full p-2"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="e.g. 100"
              value={enteredAmount} //Two-way binding (it allows you to gather user input, and then change it.)
              onChange={amountClickHandler}
            />
          </div>
        </div>
        <div className="new-expense_control pb-6 ">
          <label htmlFor="date">Date: </label>
          <input
            className="w-full p-2"
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateClickHandler}
          />
        </div>
      </div>
      <div className="expense_form-button">
        <button type="button" className="cancel" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit" className="active">
          Add Expense
        </button>
      </div>
    </form>
  );
}
