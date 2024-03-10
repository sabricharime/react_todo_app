import { KEY } from "../types";

function edit(state, { payload }) {
  const newArray = state.todos.map((item) => {
    if (item.id === payload.id) {
      item = payload.item;
    }
    return item;
  });
  state = {
    ...state,
    todos: [...newArray],
    onEdit: false,
  };
  localStorage.setItem(KEY, JSON.stringify(state.todos));
  return state;
}

export default edit;
