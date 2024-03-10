import Add from "../actions/addAction";
import edit from "../actions/editAction";
import changeToEdit from "../actions/changeToEdit";
import { GLOBAL_TYPES } from "../types";
import deleteActions from "../actions/deleteAction";

export default function (state, { type, payload }) {
  switch (type) {
    case GLOBAL_TYPES.ADD_ITEMS:
      return Add(state, { payload });
    case GLOBAL_TYPES.EDIT:
      return edit(state, { payload });
    case GLOBAL_TYPES.TRANSFER_EDIT:
      return changeToEdit(state, { payload });
    case GLOBAL_TYPES.DELETE_ITEM:
      return deleteActions(state, { payload });
  }

  return state;
}
