import axios from "axios";

export function getTodoList() {
  return axios.get("http://localhost:3000/todoData");
}

export function addTodoSv(todo) {
  return axios.post("http://localhost:3000/todoData", todo);
}
