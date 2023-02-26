import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {

  const onSaveExpenseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random.toString()
    };

    props.onAddExpense(expenseData);

  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseData} showForm={showForm} />
    </div>
  );
}
export default NewExpense;
