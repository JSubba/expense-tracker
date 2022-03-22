import { ListGroup, ListGroupItem } from "reactstrap";

const List = ({ expenses }) => {
  return (
    <div className="list pt-4 mb-5">
      <ListGroup>
        {expenses.map((item) => (
          <ListGroupItem key={item.id} className="my-1 rounded">
            {item.name} - $ {item.amount}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
