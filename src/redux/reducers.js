import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = {
    todos: [],
    filter: "ALL",
    searchTerm :''
}

const todoReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_TODO:
            return {
                todos : [...state.todos, {text: action.payload.text, completed: false} ],
                filter:state.filter,
                searchTerm:state.searchTerm
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((index, todo)=> index === action.payload.id ? {...todo, completed :!todo.completed }: todo )

            }

        default:
            break;
    }

}
export default todoReducer