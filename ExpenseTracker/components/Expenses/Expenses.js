import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const newYearList = props.items.filter((item) => {
    // return item.date.getFullYear().toString() === filteredYear;
    if (item.date.getFullYear().toString() === filteredYear) return item;
    else return null;
  });
  //we can write JSX outside of return statement
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={newYearList}/>
      </Card>
    </div>
  );
};

export default Expenses;
