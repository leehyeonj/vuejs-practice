import axios from "axios";

export function getTodoList() {
  return axios.get("http://localhost:3000/todoData");
}
