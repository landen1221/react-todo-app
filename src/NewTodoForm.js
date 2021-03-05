import React, { useState } from "react";

const NewTodoForm = ({ addTask }) => {
  const INITIAL_STATE = { todo: "" };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <h3>This is the form to add a task!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">New Todo: </label>
        <input
          id="todo"
          type="text"
          name="todo"
          placeholder="ie: Walk the dog"
          value={formData.todo}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
