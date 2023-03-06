import {
    TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_LIST_FAIL, TODO_LIST_RESET,
    TODO_ADD_REQUEST, TODO_ADD_SUCCESS, TODO_ADD_FAIL, TODO_ADD_RESET,
    TODO_DELETE_REQUEST, TODO_DELETE_SUCCESS, TODO_DELETE_FAIL, TODO_DELETE_RESET,
    TASK_ADD_REQUEST, TASK_ADD_SUCCESS, TASK_ADD_FAIL, TASK_ADD_RESET,
    TASK_DELETE_REQUEST, TASK_DELETE_SUCCESS, TASK_DELETE_FAIL, TASK_DELETE_RESET
} from '../Constants/todoConstants';

import axios from 'axios';



export const todoListAction = () => async (dispatch, getState) => {

    try {

        dispatch({
            type: TODO_LIST_REQUEST
        })


        const { userInfo: { token } } = getState().userLogin

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }


        const { data } = await axios.get(`/api/todo/get/all`, config)

        dispatch({
            type: TODO_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: TODO_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }

}


export const todoAddAction = (todoData) => async (dispatch, getState) => {

    try {

        dispatch({
            type: TODO_ADD_REQUEST
        })

        const { userInfo: { token } } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }


        const { data } = await axios.post(`/api/todo/create`, todoData, config)

        dispatch({
            type: TODO_ADD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TODO_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}


export const todoDeleteAction = (todoId) => async (dispatch, getState) => {

    try {

        dispatch({
            type: TODO_DELETE_REQUEST
        })

        const { userInfo: { token } } = getState().userLogin;

        const config = {
            headers: {
                "Conetent-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }


        const { data } = await axios.delete(`/api/todo/remove/${todoId}`, config)

        dispatch({
            type: TODO_DELETE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: TODO_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}



export const taskAddAction = (todoId, taskData) => async (dispatch, getState) => {

    try {
        dispatch({
            type: TASK_ADD_REQUEST
        })

        const { userInfo: { token } } = getState().userLogin


        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.put(`/api/todo/task/create/${todoId}`, taskData, config)

        dispatch({
            type: TASK_ADD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TASK_ADD_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }

}



export const taskDeleteAction = (todoId, taskId) => async (dispatch, getState) => {

    try {

        dispatch({
            type: TASK_DELETE_REQUEST
        })

        const { userInfo: { token } } = getState().userLogin

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.delete(`/api/todo/task/remove/${todoId}/${taskId}`, config)

        dispatch({
            type: TASK_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TASK_DELETE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}