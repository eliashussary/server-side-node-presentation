import React from "react";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import "./Todos.css";

class Todos extends React.Component {
  renderTodos = () => {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        deleteTodo={() => this.props.deleteTodo(todo)}
        {...todo}
      />
    ));
  };
  render() {
    return (
      <div className="Todos-container">
        <TodoInput createTodo={this.props.createTodo} />
        {this.renderTodos()}
      </div>
    );
  }
}

export default Todos;
