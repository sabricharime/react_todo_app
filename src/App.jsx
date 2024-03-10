/**
 ** Simple TODO APP USING CONTEXT API AND USE REDUCER HOOKS  
 * THIS SIMPLE APP BUILDING BY SABRI CHARIME 
 * SABRI CHARIME 2024
 */

import { useRef, useState } from "react";
import { useTodo } from "./context/mainContext";
import { GLOBAL_TYPES } from "./context/types";

function App() {
  const { state, dispatch } = useTodo();
  const inp = useRef();
  const [content, setContent] = useState("");
  const [temp, setTemp] = useState({
    id: "",
    value: "",
  });
  const handelChange = (e) => {
    setContent(e.target.value);
    setTemp({
      ...temp,
      value: e.target.value,
    });
  };

  const changeToEdit = (e) => {
    setTemp({
      ...temp,
      id: e.currentTarget.dataset.id,
    });
    inp.current.value = e.target.parentElement.previousSibling.textContent;
    dispatch({ type: GLOBAL_TYPES.TRANSFER_EDIT, payload: { status: true } });
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    state.onEdit && content.length > 3
      ? dispatch({
          type: GLOBAL_TYPES.EDIT,
          payload: {
            id: temp.id,
            item: {
              id: temp.id,
              item: temp.value,
            },
          },
        })
      : !state.onEdit && content.length > 3
      ? dispatch({ type: GLOBAL_TYPES.ADD_ITEMS, payload: { item: content } })
      : alert("Please Enter Valide  Task ");

    inp.current.value = "";
  };

  const deleteHandler = (e) => {
    dispatch({
      type: GLOBAL_TYPES.DELETE_ITEM,
      payload: {
        id: e.currentTarget.dataset.id,
      },
    });
  };

  return (
    <>
      <main>
        <form action="" onSubmit={handelSubmit} id="mainForm">
          <input type="text" onChange={handelChange} ref={inp} />
          <button type="submit">{state.onEdit ? "edit" : "add"}</button>
        </form>
        <div
          id="items"
          style={{
            display: state.todos.length > 0 ? "flex" : "none",
          }}
        >
          {state.todos.map((item, key) => (
            <div id="item" key={key}>
              <div id="result">{item.item}</div>
              <div id="tool">
                <button id="delete" data-id={item.id} onClick={deleteHandler}>
                  delete
                </button>
                <button id="edit" data-id={item.id} onClick={changeToEdit}>
                  edit
                </button>
              </div>
            </div>
          ))}
        </div>


      </main>
    </>
  );
}

export default App;
