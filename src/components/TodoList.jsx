import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const TodoList = () => {

  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search
    return todos.filter((todo) => {
      console.log(todo, 'todo')
      const matchesFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";

      const matchesSearch = todo.text
      console.log(matchesSearch.toLowerCase().includes(searchTerm),'matches')

      return matchesFilter && matchesSearch;
    });
  });

// const filterTodos = useSelector((state) => {
//   return state;
// });

// const filteredTodos = useMemo(() => {
//   const todos = filterTodos.todos;
//   const filter = filterTodos.filter;
//   const searchTerm = filterTodos.searchTerm.toLowerCase();


//   return todos.filter((todo) => {
//     const matchesFilter =
//       (filter === "COMPLETED" && todo.completed) ||
//       (filter === "INCOMPLETED" && !todo.completed) ||
//       filter === "ALL";

//      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);
//      console.log(matchesFilter, matchesSearch)

//     return matchesFilter && matchesSearch;
//   });
// }, [filterTodos]);

  console.log("Filtered Todos:", filteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All your notes here </li>

      {filteredTodos.map(
        (todo, index) => (
          <TodoItems key={index} todo={todo} index={index} />
        )
      )}
    </ul>
  );
};

export default TodoList;
