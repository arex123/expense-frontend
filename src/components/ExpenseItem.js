
import "./ExpenseItem.css";
let months = [
  "January","February","March","April","May","June","July","August","September","October","November","December"
]
function ExpenseItem(props) {
  let month = props.date.getMonth()
  let day = props.date.getDate()
  let year = props.date.getFullYear()
  return (
    <div className="expense-item">
      <div>
      <div>{months[month]}</div>
      <div>{year}</div>
      <div>{day==1?"01":day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      
    </div>
  );
}

export default ExpenseItem;