// Write your code at relevant places in the code below:

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import FilterExpense from "./FilterExpense";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpnseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found</p>;

 if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      );
    });
 }

  return (
    <Card className="expenses">
      <FilterExpense
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpnseChart expensesData={filteredExpenses}/>
      {expensesContent}
      {filteredExpenses.length==1 &&  <p style={{color:"white"}}>Only one expense found. Please add more</p>}
  
      
    </Card>
  );
};

export default Expenses;
