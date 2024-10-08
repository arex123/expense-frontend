import ExpenseItem from './ExpenseItem.js'
import './Expenses.css'
import Card from '../UI/Card.js'
function Expenses({expenses,newExpense}){

  console.log("-->> new expene ",newExpense)

  return <Card className="expenses"> {expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          />
        );
      })}</Card>
}
export default Expenses