import Chart from "../Chart/Chart";

const ExpnseChart = (props) => {
  return (
    <div>
      <Chart chartExpense={props.expensesData}/>
    </div>
  );
};
export default ExpnseChart;
