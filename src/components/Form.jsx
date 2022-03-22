import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

const Form = ({
  name,
  amount,
  handleName,
  handleAmount,
  handleSubmitForm,
  handleClearExpenses,
}) => {
  return (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <FormGroup className="row d-flex justify-content-center">
        {/* <Label for="exampleEmail" sm={4}>
          Name of Expense
        </Label> */}
        <Col sm={4} className="d-flex justify-content-center">
          <h4>Name</h4>
          <Input
            type="text"
            name="name"
            id="expenseName"
            placeholder="Name of expense?"
            value={name}
            onChange={handleName}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row d-flex justify-content-center">
        <Label for="exampleEmail" sm={4}>
          $Amount
        </Label>
        <Col sm={4}>
          <Input
            type="number"
            name="amount"
            id="expenseAmount"
            placeholder="0.00"
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <Button type="submit" className="btn btn-warning my-2 px-4">
        Add
      </Button>{" "}
      <Button
        type="submit"
        className="btn btn-danger my2 px-4"
        onClick={handleClearExpenses}
      >
        Delete
      </Button>
    </BTForm>
  );
};

export default Form;
