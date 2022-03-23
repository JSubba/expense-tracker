import { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "animate.css";
import Icon from "./images/icon.jpg";
import Form from "./components/Form";
import List from "./components/List";

const ALL_EXPENSES = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleName = (event) => {
    console.log("Name", event.target.value);
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    console.log("Amount", event.target.value);
    setAmount(event.target.value);
  };

  const handleDate = (event) => {
    console.log("Date", event.target.value);
    setDate(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (name !== "" && date !== "" && amount > 0) {
      const id = Math.floor(Math.random() * 10000) + 1;
      const expense = { id, name, amount, date };
      setExpenses([...expenses, expense]);
      setName("");
      setAmount("");
      setDate("");
    } else {
      console.log("No expenses added!");
    }
  };

  const handleClearExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleDeleteAllExpenses = () => {
    setExpenses([]);
  };

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <Container className="text-center">
      <div className="jumbotron text-white">
        <h3 className="display-6">
          Track Your Expenses
          <img src={Icon} className="mx-2" alt="icon image" />
        </h3>
        <div>
          <p className="py-3 fs-3">
            Total Expenses:{" "}
            <span className="text-success text-white">
              $ {""}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount));
              }, 0)}
            </span>
          </p>
        </div>
        <Form
          name={name}
          amount={amount}
          date={date}
          handleName={handleName}
          handleAmount={handleAmount}
          handleDate={handleDate}
          handleSubmitForm={handleSubmitForm}
          handleDeleteAllExpenses={handleDeleteAllExpenses}
        />
        <List expenses={expenses} handleClearExpense={handleClearExpense} />
      </div>
    </Container>
  );
}

export default App;
