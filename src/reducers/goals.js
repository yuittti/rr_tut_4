import { 
    ADD_GOAL,
    REMOVE_GOAL
} from '../actions/goals';

export default function goals(state = [], action) {
    const {type} = action;

    switch(type) {
        case ADD_GOAL:
            return state.concat([action.goal]);
        case REMOVE_GOAL:
            return state.filter(goal => goal.id !== action.id);
        default:
            return state;
    }
}