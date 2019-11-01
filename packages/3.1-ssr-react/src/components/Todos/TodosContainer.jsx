import React from "react";
import TodoStore from "../../store/TodoStore";
import Todos from "./Todos";
const TodosContainer = () => {
  return (
    <TodoStore.Context.Consumer>
      {store => <Todos {...store} />}
    </TodoStore.Context.Consumer>
  );
};

export default TodosContainer;
