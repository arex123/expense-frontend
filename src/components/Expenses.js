import ExpenseItem from './ExpenseItem.js'
// Write your code here
function Expenses({expenses}){
  return <div> {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}</div>
}
export default Expenses