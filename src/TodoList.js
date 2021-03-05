import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";

const TodoList = () => {
    const TEST_TODO = [{key: uuid(), todo: 'Walk the dog'}]
    const TEST_COMPLETED = [{key: '', todo: ''}]

  const [tasks, setTask] = useState(TEST_TODO);
  
  const [completedTasks, setCompletedTask] = useState(TEST_COMPLETED);

  const addTask = ({ todo }) => {
    setTask((tasks) => [...tasks, { todo, key: uuid() }]);
  };


  const removeTask = (key) => {
    setCompletedTask((completedTasks) => [...completedTasks, tasks.filter(obj => obj.key === key)[0]]); 
    console.log(completedTasks) 
    setTask((tasks) => tasks.filter(obj => obj.key !== key))
  }



  return (
    <div>
      <NewTodoForm addTask={addTask} />
      <ul>
          {tasks.map (({todo, key}) => (
              <Todo key={key} id={key} todo={todo} removeTask={removeTask} />
          ))}
      </ul>
      <br/>
      <hr/>
      <br/>
      <h3>Completed</h3>
      <ul>
          
          {completedTasks.map (({todo, key}) => (
              <Todo key={key} id={key} todo={todo} removeTask={removeTask} />
          ))}
      </ul>

    </div>
  );
};

export default TodoList;
