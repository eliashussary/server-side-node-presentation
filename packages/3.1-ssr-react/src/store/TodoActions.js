import fetch from "isomorphic-fetch";
const API_HOST = "http://localhost:3000";

const getTodos = () => fetch(API_HOST + "/todos").then(res => res.json());

const postTodo = todo =>
  fetch(API_HOST + "/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());

const markComplete = todo =>
  fetch(API_HOST + "/todos/" + todo.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...todo,
      isComplete: true
    })
  }).then(res => res.json());

const deleteTodo = todo =>
  fetch(API_HOST + "/todos/" + todo.id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());

export { getTodos, postTodo, markComplete, deleteTodo };
