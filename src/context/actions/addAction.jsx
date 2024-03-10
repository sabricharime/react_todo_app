import { KEY } from "../types";

function Add(state, { payload }) {
  const ele = {
    id: Math.abs(~~(Math.random() * 0xffffffffff))
      .toString(16)
      .padStart(10, "f"),
    item: payload.item,
  };
  state = {
    ...state,
    todos: [...state.todos, ele],
  };
  localStorage.setItem(KEY, JSON.stringify(state.todos));
  return state;
}
export default Add;
