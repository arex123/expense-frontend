import ChartBar from "./CharBar"
import "./Chart.css"
const Chart = (props)=>{
    console.log("pp",props)
    const chartData=[
        {expenseMonth:"Jan",expenseValue:0},
        {expenseMonth:"Feb",expenseValue:0},
        {expenseMonth:"Mar",expenseValue:0},
        {expenseMonth:"Apr",expenseValue:0},
        {expenseMonth:"May",expenseValue:0},
        {expenseMonth:"Jun",expenseValue:0},
        {expenseMonth:"Jul",expenseValue:0},
        {expenseMonth:"Aug",expenseValue:0},
        {expenseMonth:"Sep",expenseValue:0},
        {expenseMonth:"Oct",expenseValue:0},
        {expenseMonth:"Nov",expenseValue:0},
        {expenseMonth:"Dec",expenseValue:0},

    ]

    const maxValue = Math.max(...props.chartExpense.map((expense)=>expense.price))
    console.log("maxval : ",maxValue)

    for(let expense of props.chartExpense){
        chartData[expense.date.getMonth()].expenseValue+=expense.price
    }

    console.log("enw char data ",chartData)

    return (<div className="chart">
        {chartData.map((monthly)=>{
            return (<ChartBar key={monthly.expenseMonth} label={monthly.expenseMonth} value={monthly.expenseValue} maxValue={maxValue}/>)
        })}
    </div>)
    
}

export default Chart