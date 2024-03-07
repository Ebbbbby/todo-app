import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const filterTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter
    const searchTerm = state.searchTerm

    return todos.filter((todo)=>{
        const matchFilter =
          (filter === "COMPLETED" && todo.completed) ||
          (filter === "INCOMPLETED" && !todo.completed) || (filter=== 'ALL')
          const marchSearch = todo.text.toLowerCase().includes(searchTerm)
          return matchFilter && marchSearch
    })
  });
  return (
    <ul>
        <li className="my-2 text-sm italic">All your notes here </li>

        {
            filterTodos.map((todo, index)=>{
                <li key={index}>{todo.text}</li>
            })
        }
    </ul>
  )
};

export default TodoList;
