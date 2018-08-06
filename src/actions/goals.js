export const ADD_GOAL = 'ADD_GOAL';
export const REMOV_GOAL = 'REMOVE_GOAL';

function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoal(id) {
    return {
        type: REMOV_GOAL,
        id,
    }
}