import React from "react";

const TodoItem = props => {
  const { id, name, description, isComplete, deleteTodo } = props;
  return (
    <div className="Todo-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="Todo-status">
        <span style={{ padding: 5 }}>
          {isComplete ? "Complete" : "Not Complete"}
        </span>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
