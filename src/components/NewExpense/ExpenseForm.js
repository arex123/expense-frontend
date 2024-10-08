// Write your code at relevant places in the code below:

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [data,setData]=useState({
    title:"",
    amount:"",
    date:""    
  })

  const changeHandler=(event)=>{
    // setData({
    //   data,
    //   [event.target.name]:event.target.value
    // })

    //in above way of updating states does not sync object with other setter functions
    setData((prev)=>{
        // console.log(prev.target.name)
        return {
            ...prev,
            [event.target.name]:event.target.value
        }
    })
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault()
    // console.log("form data ",data)
    const eData = {
        title:event.target.title.value,
        amount:event.target.amount.value,
        date:new Date(event.target.date.value)
    }
    props.onExpenseSave(eData)
    setData((prev)=>{return {
        ...prev,
        title:"",
        amount:"",
        date:""
    }})
    
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={changeHandler} name="title" value={data.title}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" onChange={changeHandler} name="amount" value={data.amount}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={changeHandler}
            name="date"
            value={data.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
