import { 
    ADD_GOAL,
    REMOVE_GOAL,
} from '../actions/goals';
import {RECEIVE_DATA} from '../actions/shared'

export default function goals(state = [], action) {
    const {type} = action;

    switch(type) {
        case RECEIVE_DATA:
            return action.goals;
        case ADD_GOAL:
            return state.concat([action.goal]);
        case REMOVE_GOAL:
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}