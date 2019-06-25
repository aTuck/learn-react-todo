import { FETCH_TODOS, MARK_COMPLETE, DEL_TODO, ADD_TODO } from '../actions/types';

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  let newTodos = []
  switch (action.type){
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case MARK_COMPLETE:
      newTodos = [...state.todos];
      const idx =  state.todos.findIndex( item => item.id === action.payload );
      const itemToUpdate = {...state.todos[idx]};
      
      itemToUpdate.completed = !itemToUpdate.completed;
      newTodos.splice(idx, 1, itemToUpdate);
      
      return {
        ...state,
        todos: newTodos
      };
    case DEL_TODO:
      newTodos = [...state.todos.filter(todo => todo.id !== action.payload)];
      
      return {
        ...state,
        todos: newTodos
      }
    case ADD_TODO:
      newTodos = [...state.todos];
      newTodos.push({
        userId: (newTodos.length ? newTodos[newTodos.length - 1].userId + 1 : 0),
        id: (newTodos.length ? newTodos[newTodos.length - 1].id + 1 : 0),
        title: action.payload,
        completed: false,
      })

      return {
        ...state,
        todos: newTodos
      }
    default:
      return state;
  }
}