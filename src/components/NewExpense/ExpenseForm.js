import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [number, setNumber] = useState("");
  // const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    number: "",
    date: "",
  });

  const dateInputed = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const saveNumber = (event) => {
    setUserInput({
      ...userInput,
      number: event.target.value,
    });
  };

  const saveDate = (event) => {
    setUserInput({
      ...userInput,
      date: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput({
      enteredTitle: "",
      number: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={dateInputed}
            value={userInput.enteredTitle}
          />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Number</label>
          <input type="number" min="0.01" step="0.01" onChange={saveNumber} value={userInput.number} />
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={saveDate} value={userInput.date} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
