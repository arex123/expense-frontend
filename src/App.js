import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  // const expenses = [
  //   { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
  //   { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
  //   { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
  //   { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  // ];

  const [expenses, setExpenses] = useState([
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
    { id: 4, title: "Laptop 0", date: new Date(2024, 9, 17), price: 200 },
    { id: 5, title: "Laptop 1", date: new Date(2023, 9, 17), price: 200 },
    { id: 6, title: "Laptop 2", date: new Date(2025, 9, 17), price: 200 },
  ]);

  
  const newExpenseHandler = (data) => {
    console.log("new exepens  in app: ", data);
    
    setExpenses((prev)=>[...prev,data])
  };
  return (
    <div>
      <NewExpense onNewExpenseSave={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
