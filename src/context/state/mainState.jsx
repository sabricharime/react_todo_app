import { KEY } from "../types";
const initialState = {
  todos: localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [],
  onEdit: false,
  temp: null,
};
export default initialState;
