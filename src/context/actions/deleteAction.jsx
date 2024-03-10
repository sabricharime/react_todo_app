import { KEY } from "../types";

function deleteActions(state, { payload }) {
  const newArr = state.todos.filter((item) => item.id !== payload.id);
  state = {
    ...state,
    todos: newArr,
  };
  localStorage.setItem(KEY, JSON.stringify(state.todos));
  return state;
}

export default deleteActions;
