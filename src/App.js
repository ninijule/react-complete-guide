import React from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 435,
      date: new Date(),
    },
    {
      id: 2,
      title: "Car Insurance",
      amount: 46786,
      date: new Date(),
    },
    {
      id: 3,
      title: "Car Insurance",
      amount: 456,
      date: new Date(),
    },
  ];
  return (
    <div>
      <h2>Let's Test</h2>
      <ExpenseItem data={expenses} />
      <Expenses data={expenses} />
      <NewExpense/>
    </div>
  );
};
export default App;
