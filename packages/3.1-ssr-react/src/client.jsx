import App from "./App";
import BrowserRouter from "react-router-dom/BrowserRouter";
import React from "react";
import { hydrate } from "react-dom";
import TodoStore from "./store/TodoStore";
hydrate(
  <BrowserRouter>
    <TodoStore>
      <App />
    </TodoStore>
  </BrowserRouter>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
