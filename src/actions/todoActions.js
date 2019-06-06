import { FETCH_TODOS, MARK_COMPLETE, DEL_TODO, ADD_TODO } from './types';
import axios from 'axios'

export const fetchTodos = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
        dispatch({
          type: FETCH_TODOS,
          payload: res.data
        })
      }
    );
}

export const delTodo = (id) => dispatch => {
  console.log(`deleting id: ${id} after click event`)
  dispatch({
    type: DEL_TODO,
    payload: id
  })
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      console.log(`deleting id: ${id} after api`)
      dispatch({
        type: DEL_TODO,
        payload: id
      })
    }
  );
}

export const markComplete = (id) => dispatch => {
  dispatch({
    type: MARK_COMPLETE,
    payload: id
  })
}

export const addTodo = (title) => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: title
  })
}
