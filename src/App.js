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

  const handleName = (event) => {
    console.log("Name ", event.target.value);
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setAmount(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (name !== "" && amount > 0) {
      const expense = { name, amount };
      setExpenses([...expenses, expense]);
      setName("");
      setAmount("");
    } else {
      console.log("Invalid expense name and amount");
    }
  };

  const handleClearExpenses = () => {
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
          <img
            src={Icon}
            style={{ width: 50, height: 50 }}
            className="mx-2"
            alt="logo image"
          />
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
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
          handleClearExpenses={handleClearExpenses}
        />
        <List expenses={expenses} />
      </div>
    </Container>
  );
}

export default App;
