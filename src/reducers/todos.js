import { 
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
} from '../actions/todos';
import {RECEIVE_DATA} from '../actions/shared'

export default function todos(state = [], action) {
    const {type} = action;
    switch(type) {
        case RECEIVE_DATA :
            return action.todos;
        case ADD_TODO :
            return state.concat([action.todo]);
        case REMOVE_TODO : 
            return state.filter((todo => todo.id !== action.id));
        case TOGGLE_TODO : 
            return state.map(todo => {
                return todo.id !== action.id 
                    ? todo 
                    : Object.assign({}, todo, {complete: !todo.complete})
            });
        default:
            return state;
    }
}