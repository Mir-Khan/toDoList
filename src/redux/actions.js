import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO } from "./actionTypes";
import store from './store';

export let nextTodoId;
// this makes sure that we have a running total of whatever the user's last todo list id was
try {
    nextTodoId = Math.max.apply(Math, store.getState().todos.allIds);
    if (isNaN(nextTodoId) || nextTodoId === -Infinity) {
        throw 'No store! Something might have went wrong!...Or it just might be a new store';
    }
} catch (e) {
    // if there was nothing in the store, then we just default to 0
    console.warn(e);
    nextTodoId = 0;
}

export const addTodo = (content, priority, dueDate) => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content,
        priority,
        dueDate
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
})

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
