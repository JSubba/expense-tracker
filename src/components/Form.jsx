import {
  Form as BTForm,
  FormGroup,
  Label,
  Input,
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
      <FormGroup className="row">
        <Label>Name of Expense</Label>
        <Col className="col-12 col-md-8 w-100 mx-auto">
          <Input
            type="text"
            name="name"
            id="expenseName"
            placeholder="Name of expense?"
            className="p-3"
            value={name}
            onChange={handleName}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label>$Amount</Label>
        <Col className="col-12 col-md-8 w-100 mx-auto">
          <Input
            type="number"
            name="amount"
            id="expenseAmount"
            placeholder="0.00"
            className="p-3"
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <Button type="submit" className="btn add-btn btn-lg m-1 px-4">
        Add
      </Button>
      <Button
        type="submit"
        className="btn delete-btn btn-lg m-1 px-4"
        onClick={handleClearExpenses}
      >
        Delete
      </Button>
    </BTForm>
  );
};

export default Form;
