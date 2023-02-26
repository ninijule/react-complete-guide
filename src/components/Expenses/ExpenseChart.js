import Chart from "../Chart/Chart";

function ExpenseChart(props) {
    const chartDataPoint = [
        {
            label: "Jan", value: 0
        },
        {
            label: "Fab", value: 0
        },
        {
            label: "Mars", value: 0
        },
        {
            label: "Avril", value: 0
        },
        {
            label: "Mai", value: 0
        },
        {
            label: "Juin", value: 0
        },
        {
            label: "Juillet", value: 0
        },
        {
            label: "Aout", value: 0
        },
        {
            label: "Septembre", value: 0
        },
        {
            label: "Oct", value: 0
        },
        {
            label: "Nov", value: 0
        },
        {
            label: "Dec", value: 0
        },
    ]

    for (const expense of props.expenses) {
        const expenseMonth = new Date(expense.date).getMonth();
        chartDataPoint[expenseMonth].value += expense.amount;
    }
    return (<Chart dataPoints={chartDataPoint} />)
}
export default ExpenseChart;