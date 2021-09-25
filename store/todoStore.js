import { createContext, useState } from 'react';

const initState = [
  // {
  //   id: 1,
  //   title: 'Get Milk',
  //   completed: false,
  // },
  // {
  //   id: 2,
  //   title: 'Write App',
  //   completed: false,
  // },
];

export const TodoContext = createContext(initState);

export const TodoContextProvider = (props) => {
  let [todos, setTodos] = useState(initState);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
};
