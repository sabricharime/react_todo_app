import { useReducer, useContext, createContext } from "react";
import initialState from "./state/mainState";
import reducer from "./reducer/reducer";
// Create Context
const TodoContext = createContext();
//Create Provider
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
//Use Our Provider Anywhere
export const useTodo = () => {
  const main = useContext(TodoContext);
  if (!main) throw new Error("There is an Error ");
  return main;
};
export default TodoProvider;
