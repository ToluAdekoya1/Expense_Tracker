// import React from "react";

export default function ExpensesFilter(props: any) {

	//This function gets the selected value and passes it up to the parent via props.onChangeFilter()
  const dropDownChangeHandler = (event: any) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter text-white p-[0.1rem]">
      <div className="expenses-filter_control flex w-full items-center justify-between my-[1rem] font-bold mb-[0.5rem]">
        <label className="">Filter by year</label>
        {/* Displays a dropdown menu with years */}
        <select
          value={props.selected} //props.selected shows the currently selected year
          onChange={dropDownChangeHandler}
          className="ont-inherit bg-[#e0e0e0] text-[#2b2b2b] py-[0.5rem] px-[3rem] font-bold rounded-md"
        >
          {/*calls the handler when the selection changes*/}
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}
