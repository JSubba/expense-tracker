import { Button } from "bootstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const List = ({ expenses }) => {
  return (
    <div>
      <ListGroup className="d-flex">
        {expenses.map((item, index) => (
          <ListGroupItem key={index}>
            {item.name} $&nbsp;{item.amount}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
