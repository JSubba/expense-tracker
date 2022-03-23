import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTimes } from "react-icons/fa";

const List = ({ expenses, handleClearExpense }) => {
  return (
    <div className="list pt-4 mb-5">
      <ListGroup>
        {expenses.map((item) => (
          <ListGroupItem
            key={item.id}
            className="my-1 rounded d-flex justify-content-between"
          >
            <div>
              {item.date} || {item.name} || $ {item.amount}
            </div>
            <div>
              <FaTimes
                className="icon"
                onClick={() => handleClearExpense(item.id)}
              />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
