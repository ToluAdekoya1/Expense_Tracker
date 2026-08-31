// import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
// type ExpenseItemProps = {
//   expense: {
//     id: number;
//     name: string;
//     amount: string;
//     year: number;
//     month: string;
//     date: number;
//   };
// };
export default function ExpenseItem(props: any) {// a typescript property
  // const [name, setName] = useState(props.name); //--> Value is stored here
  // const clickHandler = () => {
  //   setName("Updated!");
  //   console.log("Updated name:", name);
  // };
  return (
    <Card className='expense-item flex items-center p-3 my-4 mx-0 bg-[#3b3b3b] min-[580px]:flex-1 min-[5809px]:text-[1.25rem]'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description flex flex-wrap justify-start flex-1'>
        <h2 className="pt-2 min-[580px]:text-[1.25rem]">{props.name}</h2>
        <div className='expense-item__price min-[580px]:text-[1.25rem] font-bold text-white bg-[#fb4f16] border-1 border-white-300 p-2 rounded-xl'>N{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}
