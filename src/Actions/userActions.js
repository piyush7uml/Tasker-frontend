import axios from 'axios';
import {
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_RESET,
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_RESET
} from '../Constants/userConstants';

import { TODO_LIST_RESET } from '../Constants/todoConstants';




export const userRegisterAction = (userData) => async (dispatch) => {

    try {

        dispatch({
            type: USER_REGISTER_REQUEST
        })


        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post(`/api/user/register`, userData, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {

        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }
}




export const userLoginAction = (userData) => async (dispatch) => {

    try {

        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        const { data } = await axios.post(`/api/user/login`, userData, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo", JSON.stringify(data))

    } catch (error) {

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })

    }

}



export const userLogoutAction = () => (dispatch) => {

    try {

        dispatch({
            type: USER_LOGIN_RESET
        })

        dispatch({
            type: USER_REGISTER_RESET
        })

        dispatch({
            type: TODO_LIST_RESET
        })

        localStorage.removeItem("userInfo")

    } catch (error) {
        console.log(error.message)
    }

}