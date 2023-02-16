import "./Expenses.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
function Expenses(props) {

  const [title, setTitle] = useState('test');

  const consoleMe = () => {
  setTitle("coucou");
  };
  return (
    <Card className="expenses">
      {props.data.map((value) => {
        return (
          <Card className="expense-item" key={value.id}>
            <ExpenseDate date={value.date} />
            <div className="expense-item__description">
              <h2>{title}</h2>
            </div>
            <div className="expense-item__price">${value.amount}</div>
            <button onClick={consoleMe}>Change Title</button>
          </Card>
        );
      })}
    </Card>
  );
}

export default Expenses;
