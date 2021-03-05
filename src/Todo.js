import "./Todo.css";
import {GiCheckMark} from 'react-icons/gi'

const Todo = ({ id, todo, removeTask }) => {
  return (
    <li className="Todo" id={id}>
      {todo} {" "}
      <a href="#" className="Todo-close" onClick={() => removeTask(id)}>
        <GiCheckMark />
      </a>
    </li>
  );
};

export default Todo;
