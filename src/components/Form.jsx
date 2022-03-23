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
  date,
  handleName,
  handleAmount,
  handleDate,
  handleSubmitForm,
  handleDeleteAllExpenses,
}) => {
  return (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <FormGroup className="row">
        <Label>Fill and press Add</Label>
        <Col className="w-100 mx-auto">
          <Input
            type="text"
            name="name"
            id="expenseName"
            placeholder="Name"
            className="p-2"
            value={name}
            onChange={handleName}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col className="w-100 pb-2 mx-auto">
          <Input
            type="date"
            name="date"
            id="expenseDate"
            placeholder="Date"
            className="p-2"
            value={date}
            onChange={handleDate}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Col className="w-100 pb-2 mx-auto">
          <Input
            type="number"
            name="amount"
            id="expenseAmount"
            placeholder="Amount"
            className="p-2"
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <Button type="submit" className="btn add-btn m-1 px-4">
        Add
      </Button>
      <Button
        type="submit"
        className="btn delete-btn m-1 px-4"
        onClick={handleDeleteAllExpenses}
      >
        Delete All
      </Button>
    </BTForm>
  );
};

export default Form;
