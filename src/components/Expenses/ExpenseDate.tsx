// import React from 'react';

// import './ExpenseDate.css';

export default function ExpenseDate(props: any){
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date flex flex-col p-2 h-[5rem] border-1 bg-[#2a2a2a] rounded-xl items-center justify-center'>
      <div className='expense-date__month font-bold '>{month}</div>
      <div className='expense-date__year text-[0.8rem]'>{year}</div>
      <div className='expense-date__day text-[1.3rem] font-bold'>{day}</div>
    </div>
  );
};

