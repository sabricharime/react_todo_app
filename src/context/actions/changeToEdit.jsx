function changeToEdit(state, { payload }) {
  state = {
    ...state,
    onEdit: payload.status,
  };

  return state;
}

export default changeToEdit
