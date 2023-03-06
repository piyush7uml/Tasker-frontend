import {
    TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAIL, TODO_LIST_RESET,
    TODO_ADD_REQUEST, TODO_ADD_SUCCESS, TODO_ADD_FAIL, TODO_ADD_RESET,
    TODO_DELETE_REQUEST, TODO_DELETE_SUCCESS, TODO_DELETE_FAIL, TODO_DELETE_RESET,
    TASK_ADD_REQUEST, TASK_ADD_SUCCESS, TASK_ADD_FAIL, TASK_ADD_RESET,
    TASK_DELETE_REQUEST, TASK_DELETE_SUCCESS, TASK_DELETE_FAIL, TASK_DELETE_RESET
} from '../Constants/todoConstants';





export const todoListReducer = (state = { todos: [] }, action) => {

    switch (action.type) {
        case TODO_LIST_REQUEST:
            return { loading: true }

        case TODO_LIST_SUCCESS:
            return { loading: false, todos: action.payload }

        case TODO_LIST_FAIL:
            return { loading: false, error: action.payload }

        case TODO_LIST_RESET:
            return { todos: [] }

        default:
            return state;
    }

}



export const todoAddReducer = (state = {}, action) => {

    switch (action.type) {
        case TODO_ADD_REQUEST:

            return { loading: true }

        case TODO_ADD_SUCCESS:
            return { loading: false, success: true }

        case TODO_ADD_FAIL:
            return { loading: false, error: action.payload }

        case TODO_ADD_RESET:
            return {}

        default:
            return state
    }
}



export const todoDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TODO_DELETE_REQUEST:
            return { loading: true }

        case TODO_DELETE_SUCCESS:
            return { loading: false, success: true }

        case TODO_DELETE_FAIL:
            return { loading: false, error: action.payload }

        case TODO_DELETE_RESET:
            return {}

        default:
            return state;
    }
}



export const taskAddReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_ADD_REQUEST:
            return { loading: true }

        case TASK_ADD_SUCCESS:
            return { loading: false, success: true, updatedTodo: action.payload }

        case TASK_ADD_FAIL:
            return { loading: false, error: action.payload }

        case TASK_ADD_RESET:
            return {}

        default:
            return state;
    }
}



export const taskDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_DELETE_REQUEST:
            return { loading: true }

        case TASK_DELETE_SUCCESS:
            return { loading: false, success: true }

        case TASK_DELETE_FAIL:
            return { loading: false, error: action.payload }

        case TASK_DELETE_RESET:
            return {}

        default:
            return state;
    }
}