import React from "react";
import { getTodos, postTodo, markComplete, deleteTodo } from "./TodoActions";

let preloadedTodos = {};

if (typeof window !== "undefined") {
  preloadedTodos = window.__PRELOADED_STATE__;
}

const Context = React.createContext();

class TodoStore extends React.Component {
  static Context = Context;
  static actions = {
    getTodos,
    postTodo,
    markComplete
  };
  static defaultProps = {
    value: preloadedTodos
  };

  state = {
    todos: [],
    didPreload: false
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.didPreload) {
      return {
        todos: props.value,
        didPreload: true
      };
    }
    return state;
  }

  getTodos = () => {
    getTodos().then(todos => {
      this.setState({ todos });
    });
  };

  createTodo = todo => {
    postTodo(todo).then(newTodo => {
      this.setState(state => {
        return {
          todos: [...state.todos, newTodo]
        };
      });
    });
  };

  deleteTodo = todo => {
    deleteTodo(todo).then(res => {
      this.setState(state => {
        return {
          todos: state.todos.filter(t => t.id !== todo.id)
        };
      });
    });
  };

  render() {
    const providerState = {
      todos: this.state.todos,
      getTodos: this.getTodos,
      createTodo: this.createTodo,
      deleteTodo: this.deleteTodo
    };
    return (
      <Context.Provider value={providerState}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default TodoStore;
